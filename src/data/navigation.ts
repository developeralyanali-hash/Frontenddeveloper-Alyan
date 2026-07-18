import type { NavigationItem } from "@/types/navigation";

/**
 * Primary navigation used by:
 * - Navbar
 * - Mobile Menu
 * - Footer Quick Links
 */

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Case Studies",
    href: "#case-studies",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];