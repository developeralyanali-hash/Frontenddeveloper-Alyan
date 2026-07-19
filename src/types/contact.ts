import type { LucideIcon } from "lucide-react";
import type { AppIcon } from "@/types/icon";

/**
 * ------------------------------------------------------------------
 * Single Contact Card
 * ------------------------------------------------------------------
 */

export interface ContactItem {
  /**
   * Card title.
   */
  label: string;

  /**
   * Card value.
   */
  value: string;

  /**
   * UI icon (Lucide only).
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

  /**
   * Supports:
   * - lucide-react
   * - react-icons
   */
  icon: AppIcon;
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