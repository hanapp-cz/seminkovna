import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ! `twMerge` is a custom function that extends `tailwind-merge` with custom class groups
// ! It has to be imported from `~lib/twMerge` instead of `tailwind-merge`

/**
 * Add cn helper to make it easier to conditionally add Tailwind CSS classes
 * It is combination of tailwind-merge and clsx libraries
 * https://ui.shadcn.com/docs/installation/manual
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
