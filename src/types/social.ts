import type { AppIcon } from "@/types/icon";

/**
 * ------------------------------------------------------------------
 * Social Media Link
 * ------------------------------------------------------------------
 * Represents a single social platform used throughout
 * the portfolio.
 */

export interface Social {
  /**
   * Unique identifier.
   *
   * Examples:
   * github
   * linkedin
   * email
   */
  id: string;

  /**
   * Display name.
   *
   * Examples:
   * GitHub
   * LinkedIn
   * Email
   */
  name: string;

  /**
   * External URL.
   */
  href: string;

  /**
   * Icon component.
   *
   * Supports:
   * - lucide-react (UI icons)
   * - react-icons (official brand logos)
   */
  icon: AppIcon;
}

/**
 * Collection of social links.
 */
export type Socials = Social[];