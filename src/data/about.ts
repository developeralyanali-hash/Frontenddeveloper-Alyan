/**
 * ------------------------------------------------------------------
 * About Information
 * ------------------------------------------------------------------
 * Used in:
 * - About Section
 * - Future About Page
 * ------------------------------------------------------------------
 */

export const about = {
  /**
   * ---------------------------------------------------------------
   * Personal Information
   * ---------------------------------------------------------------
   */
  name: "Alyan Ali",

  profession: "Frontend Developer",

  location: "Pakistan",

  /**
   * ---------------------------------------------------------------
   * Section Content
   * ---------------------------------------------------------------
   */
  eyebrow: "ABOUT ME",

  heading: "Building Modern Web Experiences",

  highlightedWord: "Modern",

  paragraphOne:
    "I'm Alyan Ali, a Frontend Developer passionate about building fast, responsive and user-friendly web applications that help businesses establish a strong online presence.",

  paragraphTwo:
    "I specialize in React, Next.js, TypeScript and Tailwind CSS, focusing on creating clean, reusable and scalable user interfaces. As I continue expanding into Full Stack Development, my goal is to build complete digital solutions that solve real business problems.",

  /**
   * ---------------------------------------------------------------
   * Professional Statistics
   * ---------------------------------------------------------------
   */
  stats: [
    {
      label: "Projects",
      value: "3+",
    },
    {
      label: "Tech Stack",
      value: "React / Next.js",
    },
    {
      label: "Specialization",
      value: "Frontend Development",
    },
  ],

  /**
   * ---------------------------------------------------------------
   * Call To Action
   * ---------------------------------------------------------------
   */
  cta: {
    text: "Start Project",
    href: "#contact",
  },

  /**
   * ---------------------------------------------------------------
   * Profile Image
   * ---------------------------------------------------------------
   */
  image: "/images/about/profile.webp",
} as const;