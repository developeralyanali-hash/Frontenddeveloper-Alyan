import type { ComponentType } from "react";

/**
 * ------------------------------------------------------------------
 * Shared Icon Props
 * ------------------------------------------------------------------
 * Compatible with both:
 * - lucide-react
 * - react-icons
 * ------------------------------------------------------------------
 */
export interface AppIconProps {
  size?: number | string;
  className?: string;
  color?: string;
}

/**
 * Shared application icon type.
 */
export type AppIcon = ComponentType<AppIconProps>;