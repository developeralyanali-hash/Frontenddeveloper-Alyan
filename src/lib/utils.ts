import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely.
 *
 * Example:
 * cn("p-4", isActive && "bg-purple-500")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}