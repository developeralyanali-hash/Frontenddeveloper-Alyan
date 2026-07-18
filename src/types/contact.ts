import type { LucideIcon } from "lucide-react";

/**
 * ------------------------------------------------------------------
 * Single Contact Card
 * ------------------------------------------------------------------
 */

export interface ContactItem {
  /**
   * Card title.
   *
   * Example:
   * Email
   */
  label: string;

  /**
   * Card value.
   */
  value: string;

  /**
   * Lucide icon.
   */
  icon: LucideIcon;

  /**
   * Optional clickable link.
   */
  href?: string;
}

/**
 * ------------------------------------------------------------------
 * Contact Form Text
 * ------------------------------------------------------------------
 */

export interface ContactForm {
  fullNamePlaceholder: string;
  emailPlaceholder: string;
  projectPlaceholder: string;
  messagePlaceholder: string;
  buttonText: string;
}

/**
 * ------------------------------------------------------------------
 * Social Links
 * ------------------------------------------------------------------
 */

export interface ContactSocial {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * ------------------------------------------------------------------
 * Complete Contact Section
 * ------------------------------------------------------------------
 */

export interface ContactInfo {
  eyebrow: string;

  heading: string;

  highlightedWord: string;

  description: string;

  items: ContactItem[];

  form: ContactForm;

  socials: ContactSocial[];
}