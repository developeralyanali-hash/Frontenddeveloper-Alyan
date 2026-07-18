"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import { navigation } from "@/data/navigation";
import { SITE_CONFIG, SECTION_IDS } from "@/lib/constants";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

/**
 * ------------------------------------------------------------------
 * Navbar
 * ------------------------------------------------------------------
 * Global navigation for the portfolio.
 *
 * Features:
 * - Sticky navigation
 * - Background changes on scroll
 * - Responsive mobile menu
 * - Smooth animations
 * ------------------------------------------------------------------
 */

export default function Navbar() {
  /**
   * --------------------------------------------------------------
   * States
   * --------------------------------------------------------------
   */

  const [isOpen, setIsOpen] = useState(false);

  /**
   * --------------------------------------------------------------
   * Scroll State
   * --------------------------------------------------------------
   * useScroll() returns current scroll position.
   */

  const scrollY = useScroll();
  const scrolled = scrollY > 20;

  /**
   * --------------------------------------------------------------
   * Helpers
   * --------------------------------------------------------------
   */

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#E5E7EB] bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* ======================================================
              Logo
          ====================================================== */}

          <Link
  href="/"
  className="flex items-center gap-3"
  aria-label="Go to homepage"
>
  {/* Brand Mark */}
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B3FFF] to-[#8B5CF6] font-bold text-white shadow-lg shadow-violet-500/20 sm:h-11 sm:w-11">
    AA
  </div>

  {/* Brand Text */}
  <div className="min-w-0 leading-tight">
   <h1 className="truncate text-[20px] font-bold text-[#111111] sm:text-lg lg:text-xl">
  Alyan Ali
</h1>

<p className="hidden text-sm font-medium text-[#6B7280] sm:block">
  Frontend Developer
</p>
  </div>
</Link>

          {/* ======================================================
              Desktop Navigation
          ====================================================== */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-[#6B7280] transition-colors duration-200 hover:text-[#7B3FFF]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ======================================================
              Desktop CTA
          ====================================================== */}

          <div className="hidden lg:block">
            <Button
              href={`#${SECTION_IDS.contact}`}
              variant="primary"
              rightIcon={<ArrowRight size={16} />}
            >
              Get Started
            </Button>
          </div>

          {/* ======================================================
              Mobile Toggle
          ====================================================== */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white transition hover:border-[#7B3FFF] lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* ==========================================================
          Mobile Menu
      ========================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#E5E7EB] bg-white lg:hidden"
          >
            <Container>
              <nav className="flex flex-col gap-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#6B7280] transition-colors duration-200 hover:bg-[#F5F3FF] hover:text-[#7B3FFF]"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-4">
                  
                   <a
  href={`#${SECTION_IDS.contact}`}
  onClick={closeMenu}
  className="block"
>
  <Button
    variant="primary"
    fullWidth
    rightIcon={<ArrowRight size={16} />}
  >
    Get Started
  </Button>
</a>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}