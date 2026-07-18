import { GitBranch,Mail } from "lucide-react";



import { LinkIcon } from "lucide-react";



import type { Social } from "@/types/social";
import { i } from "framer-motion/client";

/**
 * ------------------------------------------------------------------
 * Social Media Links
 * ------------------------------------------------------------------
 * Centralized social platforms used throughout the portfolio.
 *
 * Used in:
 * - Footer
 * - Contact Section
 * - Hero (future)
 * - SEO / Metadata
 * ------------------------------------------------------------------
 */

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/developeralyanali-hash",
    icon: GitBranch,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alyan--ali/",
    icon: LinkIcon,
  },
  
  {
    id: "email",
    name: "Email",
    href: "mailto:example@gmail.com",
    icon: Mail,
  },
];