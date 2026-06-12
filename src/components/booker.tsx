"use client";

/**
 * Oriv-themed booker — live, wired to Cal.com v2.
 *
 * 4-step flow: archetype → questions → slot → confirm → success.
 * Slots come from /api/cal/slots; bookings POST to /api/cal/book.
 * Server routes proxy to Cal, so the browser never sees the API key.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ---------- types ----------

type Step = "archetype" | "questions" | "slot" | "confirm" | "success";

type FieldKind = "text" | "textarea" | "select";

type Question = {
  slug: string;
  label: string;
  placeholder?: string;
  kind: FieldKind;
  options?: string[];
  required?: boolean;
};

type Archetype = {
  id: string;
  label: string;
  description: string;
  duration: string;
  questions: Question[];
};

type Slot = { time: string; start: string; taken: boolean };
type SlotDay = {
  iso: string;
  weekday: string;
  day: string;
  month: string;
  slots: Slot[];
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

// ---------- archetypes ----------

/**
 * Archetype questions are tuned to qualify hard. Each Q is either:
 *   - a foot-in-the-door easy commit (company, role) that builds momentum, or
 *   - a self-id primer with industry-specific placeholders so non-fits feel
 *     friction before we do, or
 *   - an open-ended pain prompt that surfaces depth without leading the answer.
 * Cap at 4 per archetype to respect decision fatigue.
 */
const ARCHETYPES: Archetype[] = [
  {
    id: "design-partner",
    label: "Design partner",
    description: "Five teams in the Q3 cohort. Hardware in volume with real BOM pressure.",
    duration: "30 min",
    questions: [
      { slug: "company", label: "Company", kind: "text", required: true, placeholder: "Company name" },
      { slug: "role", label: "Your role", kind: "text", required: true, placeholder: "e.g. Director of Hardware Engineering" },
      {
        slug: "pain",
        label: "What's the first thing in your component-data workflow that breaks?",
        kind: "textarea",
        required: true,
        placeholder: "Spec drift across EDA / PLM? Supplier qual re-keyed every release? Be specific.",
      },
      {
        slug: "stack",
        label: "Tools we'd be living next to",
        kind: "text",
        required: true,
        placeholder: "Altium, Cadence Allegro, Windchill, custom Python, etc.",
      },
    ],
  },
  {
    id: "investor",
    label: "Investor",
    description: "Pre-seed. We don't pitch decks at first touch — we talk wedge and data.",
    duration: "30 min",
    questions: [
      { slug: "firm", label: "Firm", kind: "text", required: true, placeholder: "Fund name" },
      { slug: "role", label: "Your role", kind: "text", required: true, placeholder: "Partner, Principal, etc." },
      {
        slug: "thesis",
        label: "How deeptech or industrial AI fits your current thesis",
        kind: "textarea",
        required: true,
        placeholder: "A sentence or two. A recent bet in the space helps.",
      },
      {
        slug: "stage",
        label: "Stage focus",
        kind: "select",
        required: true,
        options: [
          "Pre-seed only",
          "Pre-seed + seed",
          "Seed + Series A",
          "Multi-stage",
        ],
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering team",
    description: "Hardware or systems engineer kicking the tires. Bring a real spec if you want.",
    duration: "25 min",
    questions: [
      { slug: "company", label: "Company", kind: "text", required: true, placeholder: "Company name" },
      { slug: "role", label: "Your role", kind: "text", required: true, placeholder: "e.g. Systems Engineer" },
      {
        slug: "tool",
        label: "Where your component data actually lives today",
        kind: "select",
        required: true,
        options: [
          "In our EDA tool",
          "In our PLM",
          "Custom DB or spreadsheet",
          "Re-extracted from PDFs every time",
          "Other",
        ],
      },
      {
        slug: "pain",
        label: "What slows you down most (optional)",
        kind: "textarea",
        placeholder: "A specific moment helps more than generalities.",
      },
    ],
  },
  {
    id: "other",
    label: "Something else",
    description: "Press, partnerships, or you're not sure which box. We'll figure it out.",
    duration: "20 min",
    questions: [
      { slug: "context", label: "Where you're coming from", kind: "text", required: true, placeholder: "Press, partner, consultant, etc." },
      { slug: "topic", label: "What you'd like to talk about", kind: "textarea", required: true, placeholder: "A sentence or two is enough." },
    ],
  },
];

// ---------- live slots ----------

async function fetchSlots(archetypeId: string, timeZone: string): Promise<SlotDay[]> {
  const now = new Date();
  const startISO = now.toISOString();
  const endDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
  const endISO = endDate.toISOString();

  const qs = new URLSearchParams({
    archetypeId,
    start: startISO,
    end: endISO,
    timeZone,
  });
  const res = await fetch(`/api/cal/slots?${qs.toString()}`, { cache: "no-store" });
  const body = await res.json();
  if (!body.ok) {
    throw new Error(body.message || "Slot lookup failed");
  }
  return groupSlots(body.data as Record<string, { start: string; end: string }[]>);
}

function groupSlots(data: Record<string, { start: string; end: string }[]>): SlotDay[] {
  const days: SlotDay[] = [];
  for (const [iso, ranges] of Object.entries(data)) {
    if (!ranges?.length) continue;
    const d = new Date(`${iso}T00:00:00`);
    const slots: Slot[] = ranges.map((r) => ({
      time: new Date(r.start).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      start: r.start,
      taken: false,
    }));
    days.push({
      iso,
      weekday: WEEKDAYS[d.getDay()],
      day: String(d.getDate()).padStart(2, "0"),
      month: MONTHS[d.getMonth()],
      slots,
    });
  }
  return days.sort((a, b) => a.iso.localeCompare(b.iso));
}

function formatLongDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

// ---------- hooks ----------

/**
 * Fetch available slots for an archetype when `enabled` is true. Cancels
 * in-flight requests if the caller unmounts or flips enabled off.
 */
function useSlots(archetypeId: string | null, enabled: boolean, timeZone: string) {
  const [days, setDays] = useState<SlotDay[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (!enabled || !archetypeId) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchSlots(archetypeId, timeZone)
      .then((d) => {
        if (!cancelled) setDays(d);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message || "Could not load times. Try again.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [archetypeId, enabled, timeZone, nonce]);

  const reset = useCallback(() => {
    setDays([]);
    setError(null);
  }, []);

  const refetch = useCallback(() => setNonce((n) => n + 1), []);

  return { days, loading, error, refetch, reset };
}

// ---------- context ----------

type BookerContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const BookerContext = createContext<BookerContextValue | null>(null);

export function useBooker(): BookerContextValue {
  const ctx = useContext(BookerContext);
  if (!ctx) throw new Error("useBooker must be used inside <BookerProvider>");
  return ctx;
}

export function BookerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return (
    <BookerContext.Provider value={value}>
      {children}
      <BookerDialog />
    </BookerContext.Provider>
  );
}

// ---------- dialog shell ----------

function BookerDialog() {
  const { open, setOpen } = useBooker();
  const [step, setStep] = useState<Step>("archetype");
  const [archetypeId, setArchetypeId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [slotIso, setSlotIso] = useState<string | null>(null);
  const [slotTime, setSlotTime] = useState<string | null>(null);
  const [slotStart, setSlotStart] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  const archetype = ARCHETYPES.find((a) => a.id === archetypeId) ?? null;
  const timeZone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    [],
  );

  const {
    days: slots,
    loading: slotsLoading,
    error: slotsError,
    refetch: refetchSlots,
    reset: resetSlots,
  } = useSlots(archetypeId, step === "slot", timeZone);

  async function submitBooking() {
    if (!archetypeId || !slotStart || !name.trim() || !email.trim()) return;
    setBookingLoading(true);
    setBookingError(null);
    try {
      const res = await fetch("/api/cal/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          archetypeId,
          start: slotStart,
          name: name.trim(),
          email: email.trim(),
          timeZone,
          answers,
        }),
      });
      const body = await res.json();
      if (!body.ok) throw new Error(body.message || "Booking failed");
      setStep("success");
    } catch (err) {
      setBookingError((err as Error).message);
    } finally {
      setBookingLoading(false);
    }
  }

  // body scroll lock + esc-to-close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  // Reset the body's scroll position whenever the step changes. Without this,
  // stepping forward from a long Questions step would leave the user looking
  // halfway down the next step's content.
  const bodyScrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bodyScrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [step]);

  // Track whether we're on a mobile viewport so the entry animation slides
  // up from the bottom edge like a drawer, vs. a small fade-in pop on desktop.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Focus restore — remember whatever element had focus when the booker
  // opened (typically the CTA button), and send focus back there once the
  // close animation finishes. Keyboard / screen-reader users land back
  // where they started instead of on `<body>`.
  const previousFocusRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (open) {
      previousFocusRef.current =
        (document.activeElement as HTMLElement | null) ?? null;
      return;
    }
    if (!previousFocusRef.current) return;
    const target = previousFocusRef.current;
    const t = setTimeout(() => {
      target.focus?.();
      previousFocusRef.current = null;
    }, 320);
    return () => clearTimeout(t);
  }, [open]);

  // reset state shortly after close so re-open starts clean
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setStep("archetype");
      setArchetypeId(null);
      setAnswers({});
      setSlotIso(null);
      setSlotTime(null);
      setSlotStart(null);
      setName("");
      setEmail("");
      resetSlots();
      setBookingError(null);
    }, 320);
    return () => clearTimeout(t);
  }, [open]);

  const goNext = useCallback(() => {
    setStep((s) =>
      s === "archetype" ? "questions"
      : s === "questions" ? "slot"
      : s === "slot" ? "confirm"
      : s === "confirm" ? "success"
      : s,
    );
  }, []);

  const goBack = useCallback(() => {
    setStep((s) =>
      s === "questions" ? "archetype"
      : s === "slot" ? "questions"
      : s === "confirm" ? "slot"
      : s,
    );
  }, []);

  const stepIndex = ["archetype", "questions", "slot", "confirm"].indexOf(step);
  const showProgress = step !== "success";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="booker-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-md md:items-center"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={isMobile ? { y: "100%" } : { y: 24, opacity: 0, scale: 0.985 }}
            animate={isMobile ? { y: 0 } : { y: 0, opacity: 1, scale: 1 }}
            exit={isMobile ? { y: "100%" } : { y: 16, opacity: 0, scale: 0.99 }}
            transition={{
              duration: isMobile ? 0.42 : 0.32,
              ease: isMobile ? [0.32, 0.72, 0, 1] : EASE,
            }}
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            dragTransition={{
              bounceStiffness: 380,
              bounceDamping: 32,
              power: 0.18,
              timeConstant: 200,
            }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 600) setOpen(false);
            }}
            className="relative w-full overflow-hidden rounded-t-[1.75rem] bg-[var(--surface-container-low)] p-1.5 ring-1 ring-black/5 md:m-6 md:max-w-[640px] md:rounded-[2rem]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle — mobile only. Signals the sheet can be dismissed
                by dragging downward. */}
            <div
              aria-hidden
              className="mx-auto mt-1 mb-1.5 h-1 w-9 rounded-full bg-[var(--outline)]/40 md:hidden"
            />
            <div className="relative rounded-[calc(1.75rem-0.375rem)] bg-[var(--surface)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] md:rounded-[calc(2rem-0.375rem)]">
              {/* top bar — back / label / close all sit on a single 32px row.
                  Each slot is h-8 with internal items-center so glyphs and
                  text share an identical vertical center line. */}
              <div className="flex h-8 items-center justify-between px-6 pt-5 md:px-8">
                <div className="flex h-8 items-center">
                  <AnimatePresence initial={false}>
                    {step !== "archetype" && step !== "success" && (
                      <motion.button
                        key="back"
                        type="button"
                        onClick={goBack}
                        initial={{ width: 0, opacity: 0, marginRight: 0 }}
                        animate={{ width: 32, opacity: 1, marginRight: 12 }}
                        exit={{ width: 0, opacity: 0, marginRight: 0 }}
                        transition={{ duration: 0.28, ease: EASE }}
                        className="flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-full text-[var(--on-surface-variant)] transition-colors hover:bg-[var(--surface-container)] hover:text-[var(--on-surface)]"
                        aria-label="Back"
                      >
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                          <path d="M7.5 2.5L4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.button>
                    )}
                  </AnimatePresence>
                  <motion.span
                    layout
                    transition={{ duration: 0.28, ease: EASE }}
                    className="label-mono inline-flex h-8 items-center text-[10px] leading-none tracking-[0.18em] text-[var(--outline)]"
                  >
                    {step === "success" ? "BOOKED" : "TALK TO A CO-FOUNDER"}
                  </motion.span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--on-surface-variant)] transition-colors hover:bg-[var(--surface-container)] hover:text-[var(--on-surface)]"
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* progress (goal-gradient) */}
              {showProgress && (
                <div className="px-6 pt-4 md:px-8">
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-[3px] flex-1 overflow-hidden rounded-full bg-[var(--border-subtle)]"
                      >
                        <motion.div
                          initial={false}
                          animate={{ scaleX: i <= stepIndex ? 1 : 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          style={{ originX: 0 }}
                          className="h-full w-full bg-[var(--oriv-yellow)]"
                        />
                      </div>
                    ))}
                    <span className="ml-2 label-mono text-[9.5px] tracking-[0.18em] text-[var(--outline)]">
                      {Math.min(stepIndex + 1, 4)} / 4
                    </span>
                  </div>
                </div>
              )}

              {/* step body — fixed height so chrome and pinned CTAs never
                  move between steps. Step content scrolls inside if needed. */}
              <div
                ref={bodyScrollRef}
                className="relative h-[480px] overflow-y-auto px-6 pt-6 pb-6 md:h-[560px] md:px-8 md:pt-8 md:pb-8"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.24, ease: EASE }}
                    className="flex min-h-full flex-col"
                  >
                    {step === "archetype" && (
                      <ArchetypeStep
                        onPick={(id) => {
                          setArchetypeId(id);
                          goNext();
                        }}
                      />
                    )}
                    {step === "questions" && archetype && (
                      <QuestionsStep
                        archetype={archetype}
                        answers={answers}
                        onChange={(slug, v) => setAnswers((a) => ({ ...a, [slug]: v }))}
                        onNext={goNext}
                      />
                    )}
                    {step === "slot" && (
                      <SlotStep
                        days={slots}
                        loading={slotsLoading}
                        error={slotsError}
                        selectedIso={slotIso}
                        selectedTime={slotTime}
                        onRetry={refetchSlots}
                        onPick={(iso, time, start) => {
                          setSlotIso(iso);
                          setSlotTime(time);
                          setSlotStart(start);
                          goNext();
                        }}
                      />
                    )}
                    {step === "confirm" && archetype && slotIso && slotTime && (
                      <ConfirmStep
                        archetype={archetype}
                        slotIso={slotIso}
                        slotTime={slotTime}
                        name={name}
                        email={email}
                        onName={setName}
                        onEmail={setEmail}
                        loading={bookingLoading}
                        error={bookingError}
                        onConfirm={submitBooking}
                      />
                    )}
                    {step === "success" && archetype && slotIso && slotTime && (
                      <SuccessStep
                        archetype={archetype}
                        slotIso={slotIso}
                        slotTime={slotTime}
                        onClose={() => setOpen(false)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------- step 1: archetype ----------

function ArchetypeStep({ onPick }: { onPick: (id: string) => void }) {
  return (
    <div className="flex h-full flex-col">
      <h2 className="headline-md text-[var(--on-surface)]">
        Which one are you?
      </h2>
      <p className="mt-2 body-md text-[var(--on-surface-variant)]">
        Pick the closest. We tune the rest of the conversation around it.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-2.5">
        {ARCHETYPES.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onPick(a.id)}
            className="group flex items-center justify-between gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-5 py-4 text-left transition-all duration-300 hover:border-[var(--oriv-yellow)] hover:bg-[var(--surface-container)] active:scale-[0.99]"
            style={{ transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
          >
            <div className="min-w-0">
              <p className="text-[14.5px] font-semibold text-[var(--on-surface)]">{a.label}</p>
              <p className="mt-0.5 text-[12.5px] text-[var(--on-surface-variant)]">{a.description}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="label-mono text-[9.5px] tracking-[0.18em] text-[var(--outline)]">
                {a.duration.toUpperCase()}
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--surface-container)] text-[var(--on-surface-variant)] transition-all group-hover:bg-[var(--oriv-yellow)] group-hover:text-[var(--on-oriv-yellow)] group-hover:translate-x-0.5">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------- step 2: questions ----------

function QuestionsStep({
  archetype,
  answers,
  onChange,
  onNext,
}: {
  archetype: Archetype;
  answers: Record<string, string>;
  onChange: (slug: string, v: string) => void;
  onNext: () => void;
}) {
  const requiredMissing = archetype.questions
    .filter((q) => q.required)
    .some((q) => !(answers[q.slug] ?? "").trim());

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!requiredMissing) onNext();
      }}
      className="flex h-full flex-col"
    >
      <h2 className="headline-md text-[var(--on-surface)]">
        A few quick things about you.
      </h2>
      <p className="mt-2 body-md text-[var(--on-surface-variant)]">
        So we walk into the call knowing what matters.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {archetype.questions.map((q) => (
          <Field key={q.slug} label={q.label} required={q.required}>
            {q.kind === "text" && (
              <input
                value={answers[q.slug] ?? ""}
                onChange={(e) => onChange(q.slug, e.target.value)}
                placeholder={q.placeholder}
                className={INPUT_CLASS}
              />
            )}
            {q.kind === "textarea" && (
              <textarea
                rows={3}
                value={answers[q.slug] ?? ""}
                onChange={(e) => onChange(q.slug, e.target.value)}
                placeholder={q.placeholder}
                className={cn(INPUT_CLASS, "resize-none")}
              />
            )}
            {q.kind === "select" && (
              <div className="relative">
                <select
                  value={answers[q.slug] ?? ""}
                  onChange={(e) => onChange(q.slug, e.target.value)}
                  className={cn(INPUT_CLASS, "appearance-none pr-10")}
                >
                  <option value="">Select…</option>
                  {q.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <svg
                  aria-hidden
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)]"
                >
                  <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </Field>
        ))}
      </div>
      <div className="mt-auto flex justify-end pt-7">
        <button
          type="submit"
          disabled={requiredMissing}
          className="mag inline-flex items-center gap-2 btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>Pick a time</span>
          <span className="arrow flex h-6 w-6 items-center justify-center rounded bg-black/10">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
}

// ---------- step 3: slot ----------

function SlotStep({
  days,
  loading,
  error,
  selectedIso,
  selectedTime,
  onPick,
  onRetry,
}: {
  days: SlotDay[];
  loading: boolean;
  error: string | null;
  selectedIso: string | null;
  selectedTime: string | null;
  onPick: (iso: string, time: string, start: string) => void;
  onRetry: () => void;
}) {
  const [activeIso, setActiveIso] = useState<string>(selectedIso ?? days[0]?.iso ?? "");
  useEffect(() => {
    if (!activeIso && days[0]?.iso) setActiveIso(days[0].iso);
  }, [days, activeIso]);
  const day = days.find((d) => d.iso === activeIso) ?? days[0];

  if (loading) {
    return (
      <div className="flex h-full flex-col">
        <h2 className="headline-md text-[var(--on-surface)]">Pick a time.</h2>
        <p className="mt-2 body-md text-[var(--on-surface-variant)]">
          Loading your available slots…
        </p>
        <div className="mt-6 grid grid-cols-5 gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[68px] animate-pulse rounded-lg bg-[var(--surface-container)]" />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-[46px] animate-pulse rounded-lg bg-[var(--surface-container)]" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full flex-col">
        <h2 className="headline-md text-[var(--on-surface)]">Couldn&rsquo;t load times.</h2>
        <p className="mt-2 body-md text-[var(--on-surface-variant)]">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 btn-secondary"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!days.length) {
    return (
      <div className="flex h-full flex-col">
        <h2 className="headline-md text-[var(--on-surface)]">No openings in the next two weeks.</h2>
        <p className="mt-2 body-md text-[var(--on-surface-variant)]">
          Email <a href="mailto:hello@oriv.io" className="underline">hello@oriv.io</a> and we&rsquo;ll figure out a time.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <h2 className="headline-md text-[var(--on-surface)]">Pick a time.</h2>
      <p className="mt-2 body-md text-[var(--on-surface-variant)]">
        All slots in your local timezone.
      </p>

      {/* date strip */}
      <div className="mt-6 grid grid-cols-5 gap-1.5">
        {days.slice(0, 5).map((d) => {
          const isActive = d.iso === activeIso;
          return (
            <button
              key={d.iso}
              type="button"
              onClick={() => setActiveIso(d.iso)}
              className={cn(
                "flex flex-col items-center rounded-lg border px-2 py-2.5 transition-all duration-200",
                isActive
                  ? "border-[var(--oriv-yellow)] bg-[var(--oriv-yellow)]/10"
                  : "border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-container)]",
              )}
            >
              <span className="label-mono text-[9.5px] tracking-[0.16em] text-[var(--outline)]">
                {d.weekday.toUpperCase()}
              </span>
              <span className={cn("mt-0.5 text-[18px] font-semibold tracking-tight", isActive ? "text-[var(--on-surface)]" : "text-[var(--on-surface)]")}>
                {d.day}
              </span>
              <span className="label-mono text-[9px] tracking-[0.16em] text-[var(--outline)]">
                {d.month.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>

      {/* time slots */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        {day?.slots.map((s) => {
          const isSelected = selectedIso === day.iso && selectedTime === s.time;
          return (
            <button
              key={s.start}
              type="button"
              disabled={s.taken}
              onClick={() => onPick(day.iso, s.time, s.start)}
              className={cn(
                "rounded-lg border px-4 py-3 text-[14px] font-medium transition-all duration-200",
                s.taken
                  ? "border-[var(--border-subtle)] bg-[var(--surface-container)] text-[var(--outline)] line-through cursor-not-allowed"
                  : isSelected
                  ? "border-[var(--oriv-yellow)] bg-[var(--oriv-yellow)] text-[var(--on-oriv-yellow)]"
                  : "border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--on-surface)] hover:border-[var(--on-surface-variant)] hover:bg-[var(--surface-container)] active:scale-[0.99]",
              )}
            >
              {s.time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------- step 4: confirm ----------

function ConfirmStep({
  archetype,
  slotIso,
  slotTime,
  name,
  email,
  onName,
  onEmail,
  onConfirm,
  loading,
  error,
}: {
  archetype: Archetype;
  slotIso: string;
  slotTime: string;
  name: string;
  email: string;
  onName: (v: string) => void;
  onEmail: (v: string) => void;
  onConfirm: () => void;
  loading: boolean;
  error: string | null;
}) {
  const valid = name.trim().length > 1 && /\S+@\S+\.\S+/.test(email);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) onConfirm();
      }}
      className="flex h-full flex-col"
    >
      <h2 className="headline-md text-[var(--on-surface)]">Just one more thing.</h2>
      <p className="mt-2 body-md text-[var(--on-surface-variant)]">
        We send the calendar invite to this email.
      </p>

      {/* Summary card — render the booking as already theirs (endowment effect). */}
      <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-5">
        <p className="label-mono text-[9.5px] tracking-[0.18em] text-[var(--outline)]">
          YOUR BOOKING
        </p>
        <p className="mt-1.5 text-[15px] font-semibold text-[var(--on-surface)]">
          {archetype.label} · {archetype.duration}
        </p>
        <p className="mt-1 text-[13px] text-[var(--on-surface-variant)]">
          {formatLongDate(slotIso)} · {slotTime}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4">
        <Field label="Your name" required>
          <input
            value={name}
            onChange={(e) => onName(e.target.value)}
            placeholder="First and last"
            className={INPUT_CLASS}
          />
        </Field>
        <Field label="Work email" required>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmail(e.target.value)}
            placeholder="you@company.com"
            className={INPUT_CLASS}
          />
        </Field>
      </div>

      {error && (
        <p className="mt-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-container)] px-4 py-3 text-[13px] text-[var(--on-surface)]">
          {error}
        </p>
      )}

      <div className="mt-auto flex items-center justify-end gap-4 pt-7">
        <button
          type="submit"
          disabled={!valid || loading}
          className="mag inline-flex items-center gap-2 btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>{loading ? "Booking…" : "Confirm"}</span>
          <span className="arrow flex h-6 w-6 items-center justify-center rounded bg-black/10">
            {loading ? (
              <motion.svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
              >
                <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="6 18" />
              </motion.svg>
            ) : (
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6l2.5 2.5L9.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}

// ---------- step 5: success ----------

function SuccessStep({
  archetype,
  slotIso,
  slotTime,
  onClose,
}: {
  archetype: Archetype;
  slotIso: string;
  slotTime: string;
  onClose: () => void;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--oriv-yellow)]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 12.5L10 17l9-10" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <h2 className="mt-5 headline-md text-[var(--on-surface)]">You&rsquo;re on the calendar.</h2>
      <p className="mt-2 max-w-[420px] body-md text-[var(--on-surface-variant)]">
        {formatLongDate(slotIso)} · {slotTime} · {archetype.duration}. Calendar invite arrives in your inbox.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-7 btn-secondary"
      >
        Close
      </button>
    </div>
  );
}

// ---------- field + input ----------

const INPUT_CLASS =
  "w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-3.5 py-2.5 text-[14px] text-[var(--on-surface)] placeholder:text-[var(--outline)] outline-none transition-colors focus:border-[var(--on-surface-variant)] focus:bg-[var(--surface-container)]";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="label-mono mb-1.5 block text-[10px] tracking-[0.16em] text-[var(--outline)]">
        {label.toUpperCase()}
        {required && <span className="ml-1 text-[var(--oriv-yellow-deep)]">*</span>}
      </span>
      {children}
    </label>
  );
}
