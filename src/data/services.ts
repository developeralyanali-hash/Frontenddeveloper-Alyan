import {
  LayoutDashboard,
  Workflow,
  Paintbrush,
  Component,
  Gauge,
  RefreshCw,
} from "lucide-react";

import type { Service } from "@/types/service";

/**
 * ------------------------------------------------------------------
 * SWIX Frontend Services
 * ------------------------------------------------------------------
 * Specialized frontend services for SaaS, Healthcare,
 * Manufacturing, and Digital Agencies.
 * ------------------------------------------------------------------
 */

export const services: Service[] = [
  {
    id: "react-nextjs-development",
    title: "React & Next.js Development",
    description:
      "Build scalable, high-performance web applications using React, Next.js, TypeScript, and modern frontend architecture.",
    icon: Component,
  },
  {
    id: "dashboard-development",
    title: "Dashboard & Admin Panels",
    description:
      "Develop intuitive dashboards and internal tools for analytics, operations, inventory, healthcare, and SaaS platforms.",
    icon: LayoutDashboard,
  },
  {
    id: "figma-to-code",
    title: "Figma to Production Code",
    description:
      "Transform Figma designs into pixel-perfect, responsive, and reusable React or Next.js interfaces.",
    icon: Paintbrush,
  },
  {
    id: "api-integration",
    title: "Frontend API Integration",
    description:
      "Integrate REST and GraphQL APIs to connect user interfaces with secure, reliable backend systems.",
    icon: Workflow,
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Improve application speed, Core Web Vitals, and overall user experience through frontend performance optimization.",
    icon: Gauge,
  },
  {
    id: "ui-modernization",
    title: "UI Modernization",
    description:
      "Refresh legacy applications with responsive layouts, modern UI components, and improved usability across all devices.",
    icon: RefreshCw,
  },
];