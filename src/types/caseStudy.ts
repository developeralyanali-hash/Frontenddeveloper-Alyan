/**
 * Represents a single case study displayed in the
 * Featured Work / Case Studies section.
 *
 * Each case study follows the structure:
 * Project Image
 * → Category
 * → Project Name
 * → Problem
 * → Solution
 * → Tech Stack
 * → Live Website
 */
export interface CaseStudy {
  /**
   * Unique identifier.
   *
   * Example:
   * "travel-booking-system"
   */
  id: string;

  /**
   * Project category.
   *
   * Examples:
   * - Business Website
   * - Travel Platform
   * - E-commerce
   * * - School Management System
   */
  category: string;

  /**
   * Project title displayed on the card.
   */
  title: string;

  /**
   * Brief client/business problem.
   */
  problem: string;

  /**
   * Your implemented solution.
   */
  solution: string;

  /**
   * Technologies used in the project.
   *
   * Example:
   * [
   *   "Next.js",
   *   "React",
   *   "Tailwind CSS",
   *   "Laravel"
   * ]
   */
  techStack: string[];

  /**
   * Preview image path.
   *
   * Example:
   * "/images/case-studies/project-1.webp"
   */
  mobileImage: string;
  desktopImage: string;

  /**
   * Live project URL.
   */
  liveUrl: string;

  /**
   * Optional GitHub repository.
   * Not displayed publicly unless available.
   */
  githubUrl: string;

  /**
   * Whether the project is featured.
   *
   * Allows future filtering without changing
   * the component logic.
   */
  featured?: boolean;
}

/**
 * Represents the complete case studies collection.
 */
export type CaseStudies = CaseStudy[];