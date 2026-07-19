import type { ComponentType, SVGProps } from "react";

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
   * Supports icons from:
   * - lucide-react
   * - react-icons
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

/**
 * Collection of social links.
 */
export type Socials = Social[];