"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect CSS media query changes.
 *
 * Example:
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 *
 * Common usage:
 * - Responsive component rendering
 * - Mobile/desktop layout switching
 * - Conditional UI behavior
 */
export function useMediaQuery(query: string): boolean {
  /**
   * Gets the initial media query value.
   *
   * Important:
   * During server-side rendering there is no window object,
   * so we return false as the default value.
   */
  const getMatches = (query: string): boolean => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  };

  /**
   * Stores current media query state.
   *
   * Example:
   * "(min-width: 1024px)" → true on desktop
   * "(max-width: 768px)" → true on mobile
   */
  const [matches, setMatches] = useState<boolean>(() =>
    getMatches(query)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    /**
     * Updates state only when browser media query changes.
     *
     * Future changes:
     * - Add multiple breakpoint handling here.
     * - Add orientation detection if needed.
     */
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Subscribe to media query changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}