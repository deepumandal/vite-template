import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS
 * classes intelligently to avoid conflicts and redundant styles.
 *
 * This utility function leverages `clsx` to conditionally combine class names
 * and `tailwind-merge` to merge Tailwind CSS classes correctly. It is particularly
 * useful in React components where class names need to be dynamically generated
 * based on props or state.
 *
 * @param {...ClassValue[]} inputs - An array of class values which can be strings,
 * arrays, or objects with boolean keys indicating whether a class should be included.
 *
 * @returns {string} A single string of merged class names.
 *
 * @example
 * // Basic usage with string literals
 * const className = cn('bg-red-500', 'text-white');
 *
 * @example
 * // Conditional class names
 * const isActive = true;
 * const className = cn('bg-red-500', { 'text-white': isActive });
 *
 * @example
 * // Combining arrays of class names
 * const baseClasses = ['p-4', 'rounded'];
 * const additionalClasses = ['hover:bg-red-700', 'focus:outline-none'];
 * const className = cn(baseClasses, additionalClasses);
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { type ClassValue as ClassType, cn };
