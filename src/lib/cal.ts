/**
 * Spread these props onto any element that should open the Cal.com
 * booking modal on click. The embed init lives in `src/app/layout.tsx`.
 *
 *   <Link href="..." {...calMeeting}>Talk to a co-founder</Link>
 */
export const calMeeting = {
  "data-cal-link": "orivstudio/demo",
  "data-cal-namespace": "demo",
  "data-cal-config":
    '{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}',
} as const;
