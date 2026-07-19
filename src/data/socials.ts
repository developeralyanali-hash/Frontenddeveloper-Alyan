import { Mail } from "lucide-react";
import type { Social } from "@/types/social";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

/**
 * ------------------------------------------------------------------
 * Social Media Links
 * ------------------------------------------------------------------
 * Centralized social platforms used throughout the portfolio.
 *
 * Used in:
 * - Footer
 * - Contact Section
 * - Hero Section
 * - SEO / Metadata
 * ------------------------------------------------------------------
 */

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/developeralyanali-hash",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alyan--ali/",
    icon: FaLinkedin,
  },
  {
    id: "email",
    name: "Email",
    href: "mailto:developeralyanali@gmail.com",
    icon: Mail,
  },
];