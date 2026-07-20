"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Download,
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
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

const TECHNOLOGIES = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
];

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
                Fast & Scalable
              </span>
               <span className="mt-2 block text-[1.55rem] sm:text-[2rem] md:text-[2.15rem] lg:text-[2.35rem] xl:text-[2.6rem]">
                Web Applications
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInLeft}
              className="mx-auto mt-6 max-w-xl break-words text-center text-base leading-8 text-[#6B7280] sm:max-w-2xl sm:text-lg md:max-w-3xl lg:mx-0 lg:mt-8 lg:max-w-xl lg:text-left"
            >
              I help SaaS startups, healthcare providers, and service-based businesses build fast, scalable web applications with React and Next.js—creating modern user experiences, responsive interfaces, and production-ready frontend solutions.
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
                {TECHNOLOGIES.map((tech) => (
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
  className="order-2 flex flex-col items-center"
>

  {/* IMAGE AREA */}
  <div className="relative flex h-[340px] w-full items-center justify-center sm:h-[460px] lg:h-[620px]">

    {/* Background Glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="
        h-[280px] w-[280px]
        rounded-full
        bg-gradient-to-br
        from-violet-500/20
        to-fuchsia-500/15
        blur-3xl
        sm:h-[380px]
        sm:w-[380px]
        lg:h-[420px]
        lg:w-[420px]
        "
      />
    </div>


    {/* IMAGE */}
    <motion.div
      animate={{ y:[0,-12,0] }}
      transition={{
        duration:6,
        repeat:Infinity,
        repeatType:"mirror",
        ease:"easeInOut"
      }}
      className="relative z-10 flex items-center justify-center"
    >

      {/* spinning border */}
      <motion.div
        animate={{rotate:360}}
        transition={{
          duration:32,
          repeat:Infinity,
          ease:"linear"
        }}
        className="
        absolute
        h-[300px]
        w-[300px]
        rounded-full
        border
        border-dashed
        border-[#7B3FFF]/80

        sm:h-[390px]
        sm:w-[390px]

        lg:h-[505px]
        lg:w-[505px]
        "
      />

      <div
        className="
        relative
        h-[260px]
        w-[260px]
        overflow-hidden
        rounded-full
        border-8
        border-white
        bg-white
        shadow-[0_40px_100px_rgba(123,63,255,0.24)]

        sm:h-[340px]
        sm:w-[340px]

        lg:h-[470px]
        lg:w-[470px]
        "
      >
        <Image
          src="/images/hero/alyanali.png"
          alt="Alyan Ali"
          fill
          priority
          className="object-cover"
        />
      </div>

    </motion.div>


    {/* FLOATING BADGES ONLY DESKTOP */}

    <div className="hidden lg:block">

      {/* keep your four floating badges here */}

    </div>

  </div>


  {/* TECH STACK MOBILE + TABLET */}

  <div className="mt-8 w-full lg:hidden">

    <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
      Tech Stack
    </p>


    <div className="flex flex-wrap justify-center gap-3">

      {TECHNOLOGIES.map((tech)=>(
        <span
          key={tech}
          className="
          rounded-full
          border
          border-[#E5E7EB]
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-[#374151]
          shadow-sm
          "
        >
          {tech}
        </span>
      ))}

    </div>

  </div>


</motion.div>
        </div>
      </Container>
    </section>
  );
}