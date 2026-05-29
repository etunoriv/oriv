type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[];

/** Minimal class-name joiner. No deps — drops falsy values, flattens arrays. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue): void => {
    if (v === false || v === null || v === undefined || v === "") return;
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
    } else if (Array.isArray(v)) {
      v.forEach(walk);
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}
