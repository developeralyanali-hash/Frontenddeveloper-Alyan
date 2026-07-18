"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";

import { Check } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";

import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

/* -------------------------------------------------------------------------- */
/*                                Tech Stack                                  */
/* -------------------------------------------------------------------------- */

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Framer Motion",
  "Git",
  "GitHub",
];

/* -------------------------------------------------------------------------- */
/*                                   Stats                                    */
/* -------------------------------------------------------------------------- */

const stats = [
  {
    label: "Projects",
    value: "3+",
  },
  {
    label: "Core Stack",
    value: "React • Next.js",
  },
  {
    label: "Current Focus",
    value: "Frontend → Full Stack",
  },
];

/* -------------------------------------------------------------------------- */
/*                                About Section                               */
/* -------------------------------------------------------------------------- */

export default function About() {
  return (
    <section
      id={SECTION_IDS.about}
      className="bg-white py-20 lg:py-24"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          {/* ===================================================== */}
          {/* Section Header */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeIn}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Eyebrow */}

            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                <User
                  size={18}
                  className="text-[#7B3FFF]"
                />

                <span className="text-sm font-semibold text-[#7B3FFF]">
                  About Me
                </span>
              </div>
            </div>

            {/* Heading */}

           
              <motion.h2
  variants={fadeIn}
  className="mx-auto max-w-4xl text-center font-extrabold leading-[1.1] tracking-tight text-[#111111]"
>
  <span className="block text-[2rem] sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.9rem] xl:text-[3.2rem]">
    Passionate About
  </span>

  <span className="mt-2 block bg-gradient-to-r from-[#7B3FFF] to-[#A855F7] bg-clip-text text-[2rem] text-transparent sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.9rem] xl:text-[3.2rem]">
    Frontend Engineering
  </span>
</motion.h2>

           
            
          </motion.div>

          {/* ===================================================== */}
          {/* Content Layout */}
          {/* ===================================================== */}

          <div className="mt-16 grid items-center gap-14 lg:grid-cols-[460px_minmax(0,1fr)]">

            {/* ===================================================== */}
            {/* Left Column */}
            {/* ===================================================== */}
            
            <motion.div
  variants={fadeInLeft}
  className="
  order-1
  lg:order-2

  relative
  flex
  items-center
  justify-center

  h-[320px]
  sm:h-[420px]
  md:h-[480px]
  lg:h-[500px]
xl:h-[540px]

  lg:justify-center
lg:-translate-x-2
  lg:-translate-y-12
xl:-translate-y-14
"
>
  {/* Floating Animation */}
  <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    relative
    flex
    items-center
    justify-center
  "
>
  
    {/* Rotating Dotted Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute

        h-[250px]
        w-[250px]

        sm:h-[340px]
        sm:w-[340px]

        md:h-[390px]
        md:w-[390px]

        lg:h-[435px]
lg:w-[435px]

xl:h-[470px]
xl:w-[470px]

        rounded-full
        border-2
        border-dashed
        border-[#7B3FFF]/60
      "
    />

    {/* Main Circle */}
    <div
      className="
        relative

        h-[230px]
        w-[230px]

        sm:h-[310px]
        sm:w-[310px]

        md:h-[360px]
        md:w-[360px]

        lg:h-[410px]
lg:w-[410px]

xl:h-[445px]
xl:w-[445px]

        overflow-hidden
        rounded-full

        bg-white
        border-[3px]
        border-white

       shadow-[0_70px_110px_rgba(17,17,17,0.16)]
      "
    >
      {/* Inner Premium Ring */}
      <div
        className="
          absolute
          inset-2
          rounded-full
          border
          border-[#EFEAFE]
        "
      />

      {/* Image */}
      <Image
        src="/images/hero/alyanali.png"
        alt="Muhammad Alyan Ali"
        fill
        priority
        sizes="(max-width:768px) 230px, (max-width:1024px) 360px, 455px"
        className="
          object-contain
          object-bottom 

          scale-[0.90]
          sm:scale-[0.92]
          md:scale-[0.94]
          lg:scale-[0.97]
        "
      />
    </div>
  </motion.div>
</motion.div>
            {/* ===================================================== */}
            {/* Right Column */}
            {/* ===================================================== */}

            <motion.div
              variants={fadeInRight}
              className="
  order-2
  lg:order-2
  flex
  flex-col
"
            >
              {/* Paragraph 1 */}

              <>
  <p className="text-center text-base leading-8 text-[#6B7280] sm:text-lg lg:text-left">
    I'm <strong className="text-[#111111]">Muhammad Alyan Ali</strong>, a
    self-taught Frontend Developer specializing in modern, responsive, and
    high-performance web applications built with React, Next.js, TypeScript,
    and Tailwind CSS.
  </p>

  <p className="mt-6 text-center text-base leading-8 text-[#6B7280] sm:text-lg lg:text-left">
    I focus on creating clean, scalable, and user-centered digital experiences
    that help businesses grow, while continuously expanding my expertise toward
    full-stack development to deliver complete web solutions.
  </p>
</>

              {/* ===================================================== */}
              {/* Tech Stack */}
              {/* ===================================================== */}

              <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
                {techStack.map((tech) => (
                 <span
  key={tech}
  className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-violet-100
    bg-violet-50/70
    px-5
    py-2.5
    text-sm
    font-semibold
    text-[#4B5563]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#7B3FFF]/30
    hover:bg-white
    hover:text-[#7B3FFF]
    hover:shadow-[0_10px_25px_rgba(123,63,255,0.12)]
  "
>
  <Check
    size={14}
    className="text-[#7B3FFF]"
  />

  {tech}
</span>
                ))}
              </div>

              {/* ===================================================== */}
             {/* ===================================================== */}
{/* Stats */}
{/* ===================================================== */}

<div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
  {stats.map((item) => (
    <div
      key={item.label}
      className="
        w-full
        rounded-2xl
        border
        border-[#ECECEC]
        bg-[#FAFAFA]
        px-5
        py-5
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#7B3FFF]/20
        hover:shadow-[0_12px_30px_rgba(123,63,255,0.08)]

        sm:w-[220px]
        lg:w-[180px]
        xl:w-[195px]
      "
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B3FFF]">
        {item.label}
      </p>

      <h3 className="mt-2 text-lg font-bold leading-snug text-[#111111]">
        {item.value}
      </h3>
    </div>
  ))}
</div>
              {/* ===================================================== */}
              {/* CTA */}
              {/* ===================================================== */}

              <div className="mt-10 flex justify-center lg:justify-start">
                <Button
                  href={`#${SECTION_IDS.contact}`}
                  variant="primary"
                  size="lg"
                  withArrow
                >
                  Let's Work Together
                </Button>
              </div>
            </motion.div>
          </div>
                  </motion.div>
      </Container>
    </section>
  );
}
             