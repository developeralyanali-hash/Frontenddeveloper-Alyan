import type { CaseStudy } from "@/types/caseStudy";

/**
 * ------------------------------------------------------------------
 * SWIX Featured Projects
 * ------------------------------------------------------------------
 * Real projects built by Alyan Ali.
 * Used in:
 * - Featured Work section
 * - Future Projects page
 * ------------------------------------------------------------------
 */

export const caseStudies: CaseStudy[] = [
  {
    id: "pizza-shop",
    category: "Restaurant Platform",
    title: "Pizza Shop ",
    problem:
      "The restaurant needed a modern online presence where customers could explore the menu quickly and enjoy a smooth browsing experience across all devices.",
    solution:
      "Built a responsive restaurant website with interactive UI, smooth animations, centralized state management using Zustand, and a clean user experience optimized for desktop and mobile.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
    ],
    mobileImage: "/images/case-studies/pizza-shop-horizontal.webp",
    desktopImage: "/images/case-studies/pizza-shop-vertical.webp",
    liveUrl: "https://thepizzashop.vercel.app/",
    githubUrl:
      "https://github.com/developeralyanali-hash/the-pizza-shop",
  },

  {
    id: "hair-salon",
    category: "Business Platform",
    title: "Hair Salon",
    problem:
      "The salon needed a professional website to showcase its services, attract new customers and build trust through a modern online presence.",
    solution:
      "Developed a fast and responsive business website with a clean layout, service showcase and mobile-friendly experience using modern frontend technologies.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],
    mobileImage: "/images/case-studies/hair-salon-horizontal.webp",
    desktopImage: "/images/case-studies/hair-salonvertical.webp",
    liveUrl: "https://daniyal-salon.vercel.app/",
    githubUrl:
      "https://github.com/developeralyanali-hash/daniyal-salon",
  },

  {
    id: "email-marketing-portfolio",
    category: "Professional Portfolio",
    title: "Email Marketing Portfolio",
    problem:
      "The client needed a modern portfolio website to present professional experience, showcase services and make it easier for potential clients to get in touch.",
    solution:
      "Designed and developed a responsive portfolio website with modern layouts, smooth user experience and strong visual hierarchy to highlight the client's expertise.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    mobileImage: "/images/case-studies/email-marketing-horizontal.png",
    desktopImage: "/images/case-studies/email-marketing-vertical.jpeg",
    liveUrl: "https://sufyanaliportfolio.vercel.app/",
    githubUrl:
      "https://github.com/developeralyanali-hash/email-marketing-portfolio",
  },
];