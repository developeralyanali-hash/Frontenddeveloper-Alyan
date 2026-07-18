"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track window scroll position.
 *
 * Usage:
 * const scrollY = useScroll();
 *
 * Returns:
 * - Current vertical scroll position in pixels.
 *
 * Common usage:
 * - Navbar background change on scroll
 * - Scroll-based animations
 * - Sticky elements
 * - Section visibility logic
 */
export function useScroll(): number {
  // Stores current vertical scroll position
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Prevent execution during server-side rendering
    if (typeof window === "undefined") return;

    /**
     * Updates scroll position whenever user scrolls.
     * 
     * Future changes:
     * - Add throttling/debouncing here if advanced scroll effects are added.
     * - Add direction tracking (scroll up/down) if navbar behavior changes.
     */
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Listen for browser scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}