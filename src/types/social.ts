import type { LucideIcon } from "lucide-react";

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
   * Lucide React icon component.
   */
  icon: LucideIcon;

}

/**
 * Collection of social links.
 */
export type Socials = Social[];