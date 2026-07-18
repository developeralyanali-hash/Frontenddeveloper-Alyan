import {
  Briefcase,
  GitBranch,
  LinkIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import type { ContactInfo } from "@/types/contact";

/**
 * ------------------------------------------------------------------
 * Contact Information
 * ------------------------------------------------------------------
 * Used in:
 * - Contact Section
 * - Footer
 * - Future Contact Page
 * ------------------------------------------------------------------
 */

export const contact: ContactInfo = {
  /**
   * ---------------------------------------------------------------
   * Section Content
   * ---------------------------------------------------------------
   */
  eyebrow: "CONTACT",

  heading: "Let's Build Something Your Business Will Actually Use.",

  highlightedWord: "Business",

  description:
    "Whether you're launching a SaaS product, redesigning an existing platform, or building a custom business website, I'm here to turn your ideas into fast, scalable, and user-friendly web applications. Let's discuss your project and find the best solution.",

  /**
   * ---------------------------------------------------------------
   * Contact Cards
   * ---------------------------------------------------------------
   */
  items: [
    {
      label: "Email",
      value: "developeralyanali@gmail.com",
      icon: Mail,
      href: "mailto:example@gmail.com",
    },
    {
      label: "Phone",
      value: "+92 3325942042",
      icon: Phone,
      href: "tel:0000000000",
    },
    {
      label: "Location",
      value: "Pakistan",
      icon: MapPin,
    },
    {
      label: "Availability",
      value: "Available for Freelance",
      icon: Briefcase,
    },
  ],

  /**
   * ---------------------------------------------------------------
   * Contact Form
   * ---------------------------------------------------------------
   */
  form: {
    fullNamePlaceholder: "Full Name",
    emailPlaceholder: "Email Address",
    projectPlaceholder: "Project Type",
    messagePlaceholder: "Tell me about your project...",
    buttonText: "Start Project",
  },

  /**
   * ---------------------------------------------------------------
   * Social Links
   * ---------------------------------------------------------------
   */
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/developeralyanali-hash",
      icon: GitBranch,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alyan--ali/",
      icon: LinkIcon,
    },
  ],
};