import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import { SITE_CONFIG } from "@/lib/constants";

/**
 * ------------------------------------------------------------------
 * Global Font
 * ------------------------------------------------------------------
 * Inter is used throughout the portfolio.
 * Loaded with next/font for optimal performance.
 * ------------------------------------------------------------------
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * ------------------------------------------------------------------
 * Global Metadata
 * ------------------------------------------------------------------
 * Used for:
 * - SEO
 * - Browser title
 * - Open Graph
 * - Twitter cards
 * ------------------------------------------------------------------
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
    "Web Developer",
    "Responsive Websites",
  ],

  authors: [
  {
    name: "Alyan Ali",
  },
],

creator: "Alyan Ali",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * ------------------------------------------------------------------
 * Root Layout
 * ------------------------------------------------------------------
 * Wraps the entire application.
 * Responsible only for:
 * - HTML structure
 * - Global styles
 * - Fonts
 * - Metadata
 * ------------------------------------------------------------------
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-[#111111] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}