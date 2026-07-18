"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Download,
  ChevronDown,
  Code2,
  BadgeCheck,
  MonitorSmartphone,
  Palette,
  Zap,
} from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import { SECTION_IDS } from "@/lib/constants";
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  floatingAnimation,
} from "@/lib/animations";

// --- DATA ---

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
];

// --- COMPONENT ---

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative overflow-hidden bg-white pb-20 pt-28 lg:min-h-screen lg:pt-36"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] top-0 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-400/10 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-14">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-1"
          >
            {/* Freelance Badge */}
            <motion.div
              variants={fadeInLeft}
              className="mb-6 flex justify-center lg:mb-7 lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                <BadgeCheck size={18} className="text-[#7B3FFF]" />
                <span className="text-sm font-semibold text-[#7B3FFF]">
                  Available for New Projects
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInLeft}
              className="mx-auto max-w-2xl text-center font-extrabold leading-[1.1] tracking-tight text-[#111111] lg:mx-0 lg:text-left"
            >
              <span className="block text-[2rem] sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.9rem] xl:text-[3.2rem]">
                Building
              </span>
              <span className="mt-2 block bg-gradient-to-r from-[#7B3FFF] to-[#A855F7] bg-clip-text text-[2rem] text-transparent sm:text-[2.35rem] md:text-[2.45rem] lg:text-[3.15rem] xl:text-[3.45rem]">
               Scalable React &
              </span>
              <span className="mt-2 block whitespace-nowrap text-[1.55rem] sm:whitespace-normal sm:text-[2rem] md:text-[2.15rem] lg:text-[2.35rem] xl:text-[2.6rem]">
                Next.js Applications
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInLeft}
              className="mx-auto mt-6 max-w-xl text-center text-base leading-8 text-[#6B7280] sm:max-w-2xl sm:text-lg md:max-w-3xl lg:mx-0 lg:mt-8 lg:max-w-xl lg:text-left"
            >
              I help SaaS companies, healthcare providers, manufacturers, and agencies build fast, scalable React and Next.js applications with modern UI, seamless user experiences, and production-ready frontend architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInLeft}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                href={`#${SECTION_IDS.contact}`}
                variant="primary"
                size="lg"
                withArrow
              >
                Discuss Your Project
              </Button>
              <Button
                href={`#${SECTION_IDS.caseStudies}`}
                variant="secondary"
                size="lg"
              >
                View My Work
              </Button>
            </motion.div>

            {/* Resume Link */}
            <motion.div
              variants={fadeInLeft}
              className="mt-6 flex justify-center lg:justify-start"
            >
              <Link
                href="/images/hero/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#7B3FFF] transition-all duration-300 hover:gap-3"
              >
                <Download size={18} />
                Download Resume
              </Link>
            </motion.div>

            {/* Tech Stack (Desktop) */}
            <motion.div variants={fadeInLeft} className="mt-10 hidden lg:block">
              <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[#6B7280] lg:text-left">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:flex-nowrap lg:justify-start lg:gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#374151] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative order-2 flex h-[400px] items-center justify-center sm:h-[500px] lg:h-[620px]"
          >
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="order-1 lg:-mt-10"
            >
              <div className="relative flex h-[420px] w-full items-center justify-center sm:h-[500px] lg:h-[620px]">
                
                {/* Background Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[320px] w-[320px] rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/15 blur-3xl sm:h-[420px] sm:w-[420px]" />
                </div>

                {/* Profile Image & Spinning Border */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 32,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-[305px] w-[305px] rounded-full border border-dashed border-[#7B3FFF]/80 sm:h-[390px] sm:w-[390px] lg:h-[505px] lg:w-[505px] xl:h-[555px] xl:w-[555px]"
                  />
                  <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-8 border-white bg-white shadow-[0_40px_100px_rgba(123,63,255,0.24)] sm:h-[360px] sm:w-[360px] lg:h-[470px] lg:w-[470px] xl:h-[520px] xl:w-[520px]">
                    <Image
                      src="/images/hero/alyanali.png"
                      alt="Alyan Ali"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Badge 1: React.js */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-4 top-28 z-20 hidden scale-[0.72] rounded-2xl border border-[#ECECEC] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:left-6 sm:top-20 sm:scale-90 lg:left-6 lg:top-24 lg:flex lg:scale-100 lg:px-5 lg:py-4"
                >
                  <div className="flex items-center gap-2">
                    <Code2 size={18} className="text-[#7B3FFF]" />
                    <span className="text-sm font-semibold text-[#111111]">
                      React.js
                    </span>
                  </div>
                </motion.div>

                {/* Badge 2: Responsive */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
                  transition={{
                    duration: 6.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="absolute top-28 z-20 hidden rounded-2xl border border-[#ECECEC] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] lg:right-6 lg:flex"
                >
                  <div className="flex items-center gap-2">
                    <MonitorSmartphone size={18} className="text-[#7B3FFF]" />
                    <span className="text-sm font-semibold text-[#111111]">
                      Responsive
                    </span>
                  </div>
                </motion.div>

                {/* Badge 3: Clean UI */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
                  transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute bottom-16 z-20 hidden rounded-2xl border border-[#ECECEC] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] lg:left-8 lg:flex"
                >
                  <div className="flex items-center gap-2">
                    <Palette size={18} className="text-[#7B3FFF]" />
                    <span className="text-sm font-semibold text-[#111111]">
                      Clean UI
                    </span>
                  </div>
                </motion.div>

                {/* Badge 4: Fast & Optimized */}
                <motion.div
                  animate={{ y: [0, -9, 0], rotate: [0, -1, 0] }}
                  transition={{
                    duration: 5.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                  className="absolute bottom-16 right-6 z-20 hidden scale-[0.72] rounded-2xl border border-[#ECECEC] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:bottom-20 sm:right-6 sm:scale-90 lg:bottom-14 lg:right-8 lg:flex lg:scale-100 lg:px-5 lg:py-4"
                >
                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-[#7B3FFF]" />
                    <span className="text-sm font-semibold text-[#111111]">
                      Fast & Optimized
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Tech Stack (Mobile) */}
              <motion.div variants={fadeInRight} className="mt-2 lg:hidden">
                <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                  Tech Stack
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#374151] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}