/**
 * ------------------------------------------------------------------
 * Global Site Configuration
 * ------------------------------------------------------------------
 * Centralized configuration used throughout the portfolio.
 *
 * Used in:
 * - Metadata
 * - SEO
 * - Open Graph
 * - Sitemap
 * - Robots
 * - Footer
 * - Contact
 * ------------------------------------------------------------------
 */

export const SITE_CONFIG = {
  name: "Alyan Ali",

  title: "Alyan Ali | Frontend Developer",

  description:
    "Modern, responsive and scalable web applications built with React, Next.js, TypeScript and Tailwind CSS.",

  url: "https://your-domain.com",

  ogImage: "/images/og-image.jpg",

  author: {
    name: "Alyan Ali",
    email: "developeralyanali@gmail.com",
  },
} as const;

export const SECTION_IDS = {
  hero: "hero",
  services: "services",
  caseStudies: "case-studies",
  about: "about",
  contact: "contact",
} as const;

export const ANIMATION = {
  duration: 0.6,
  stagger: 0.1,
  floatDuration: 3,
} as const;