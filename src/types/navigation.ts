/**
 * Represents a single navigation item displayed in the Navbar
 * and Footer navigation.
 *
 * Future:
 * - Add "external" if linking outside the website.
 * - Add "target" for opening links in a new tab.
 * - Add "icon" if navigation icons are introduced.
 */
export interface NavigationItem {
  /**
   * Navigation label shown to the user.
   * Example:
   * Home
   * Services
   * Case Studies
   */
  label: string;

  /**
   * Section ID or URL.
   * Examples:
   * #hero
   * #services
   * #about
   */
  href: string;
}

/**
 * Type representing the complete navigation menu.
 *
 * Example:
 * const navigation: Navigation = [...]
 */
export type Navigation = NavigationItem[];