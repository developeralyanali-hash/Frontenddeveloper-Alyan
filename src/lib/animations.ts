import type { TargetAndTransition, Variants } from "framer-motion";

/**
 * ------------------------------------------------------------------
 * Fade Up
 * ------------------------------------------------------------------
 */

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * ------------------------------------------------------------------
 * Fade In
 * ------------------------------------------------------------------
 */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * ------------------------------------------------------------------
 * Fade Left
 * ------------------------------------------------------------------
 */

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * ------------------------------------------------------------------
 * Fade Right
 * ------------------------------------------------------------------
 */

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * ------------------------------------------------------------------
 * Stagger Container
 * ------------------------------------------------------------------
 */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/**
 * ------------------------------------------------------------------
 * Scale In
 * ------------------------------------------------------------------
 */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * ------------------------------------------------------------------
 * Floating Animations
 * ------------------------------------------------------------------
 */

export const floatingAnimation: TargetAndTransition = { 
  y: [0, -12, 0],
  rotate: [0, 1, 0, -1, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  },
};

export const slowFloatingAnimation: TargetAndTransition = {
  y: [0, -14, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear",
  },
};

/**
 * ------------------------------------------------------------------
 * Hover Animations
 * ------------------------------------------------------------------
 */

export const hoverLift: TargetAndTransition = {
  y: -4,
  transition: {
    duration: 0.25,
    ease: "linear",
  },
};

export const hoverScale: TargetAndTransition = {
  scale: 1.02,
  transition: {
    duration: 0.25,
    ease: "linear",
  },
};

/**
 * ------------------------------------------------------------------
 * Button Tap
 * ------------------------------------------------------------------
 */

export const buttonTap: TargetAndTransition = {
  scale: 0.97,
};

/**
 * ------------------------------------------------------------------
 * Viewport Settings
 * ------------------------------------------------------------------
 */

export const viewport = {
  once: true,
  amount: 0.2,
};