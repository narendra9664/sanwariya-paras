import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility: Merge Tailwind classes safely
 * Think of this like a smart class combiner — it handles conflicts
 * (e.g., "bg-red" + "bg-blue" → keeps only "bg-blue")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
