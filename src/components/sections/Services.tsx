"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Gauge,
  LayoutDashboard,
  Component,
  Paintbrush,
  Workflow,
  RefreshCw,
  LucideIcon,
} from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import { SECTION_IDS } from "@/lib/constants";
import { fadeIn, fadeInLeft, staggerContainer } from "@/lib/animations";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Component,
    title: "React & Next.js Development",
    description:
      "Build scalable, high-performance web applications using React, Next.js, TypeScript, and modern frontend architecture.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Admin Panels",
    description:
      "Develop intuitive dashboards and internal tools for analytics, operations, inventory, healthcare, and SaaS platforms.",
  },
  {
    icon: Paintbrush,
    title: "Figma to Production Code",
    description:
      "Transform Figma designs into pixel-perfect, responsive, and reusable React or Next.js interfaces.",
  },
  {
    icon: Workflow,
    title: "Frontend API Integration",
    description:
      "Integrate REST and GraphQL APIs to connect user interfaces with secure, reliable backend systems.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Improve application speed, Core Web Vitals, and overall user experience through frontend performance optimization.",
  },
  {
    icon: RefreshCw,
    title: "UI Modernization",
    description:
      "Refresh legacy applications with responsive layouts, modern UI components, and improved usability across all devices.",
  },
];

export default function Services() {
  return (
    <section
      id={SECTION_IDS.services}
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
          {/* ========================================================= */}
          {/* Left Column */}
          {/* ========================================================= */}
          <motion.div
          variants={fadeIn}
          className="mx-auto max-w-6xl"
         >
            {/* Eyebrow */}
            <motion.div
  variants={fadeIn}
  className="mb-6 flex justify-center"
>
  <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
    <Sparkles
      size={18}
      className="text-[#7B3FFF]"
    />

    <span className="text-sm font-semibold text-[#7B3FFF]">
      Services
    </span>
  </div>
</motion.div>

            {/* Heading */}
            <motion.h2
  variants={fadeIn}
  className="mx-auto max-w-3xl text-center font-extrabold leading-[1.1] tracking-tight text-[#111111]"
>
  <span
    className="
      block
      text-[2rem]
      sm:text-[2.35rem]
      md:text-[2.55rem]
      lg:text-[2.9rem]
      xl:text-[3.2rem]
    "
  >
    Web Solutions Built
  </span>

  <span
    className="
      mt-2
      block
      bg-gradient-to-r
      from-[#7B3FFF]
      to-[#A855F7]
      bg-clip-text
      text-[2rem]
      text-transparent
      sm:text-[2.35rem]
      md:text-[2.45rem]
      lg:text-[3.15rem]
      xl:text-[3.45rem]
    "
  >
    For Business Growth
  </span>
</motion.h2>

            {/* Description */}
            <motion.p
  variants={fadeIn}
  className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-[#6B7280] sm:text-lg"
>
  I develop scalable frontend applications with React and Next.js for SaaS products, healthcare platforms, manufacturing systems, and digital agencies—delivering modern interfaces that are fast, intuitive, and built for real business workflows.
</motion.p>

            {/* Cards */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    variants={fadeIn}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                    group
                relative
                flex
                h-full
                min-h-[260px]
                flex-col
                justify-between
                rounded-3xl
                border
              border-[#ECECEC]
              bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-2  
                hover:border-[#7B3FFF]/20
                  hover:shadow-[0_20px_50px_rgba(123,63,255,0.12)]
                  "
                  >
                    <div className="flex flex-col items-start gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F3FF]">
                        <Icon
                          size={30}
                          className="text-[#7B3FFF]"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#111111]">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-7 text-[#6B7280]">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center">
  <span
    className="
      inline-flex
      items-center
      gap-2
      text-sm
      font-semibold
      text-[#7B3FFF]
      transition-all
      duration-300
      group-hover:gap-3
    "
  >
    Learn More

    <ArrowRight size={16} />
  </span>
</div>
                  </motion.div>
                
                );
              })}
              
            </div>
            {/* CTA */}
<motion.div
  variants={fadeIn}
  className="mt-24 text-center"
>
  {/* Heading */}
  <h3 className="mx-auto max-w-3xl font-extrabold leading-[1.15] tracking-tight text-[#111111]">
    <span className="block text-[1.65rem] sm:text-[1.95rem] md:text-[2.15rem] lg:text-[2.35rem] xl:text-[2.6rem]">
      Let's Build
    </span>

    <span className="mt-2 block bg-gradient-to-r from-[#7B3FFF] to-[#A855F7] bg-clip-text text-[1.55rem] text-transparent sm:text-[1.95rem] md:text-[2.15rem] lg:text-[2.35rem] xl:text-[2.6rem]">
      Something Exceptional
    </span>
  </h3>

  {/* Description */}
  <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-[#6B7280] sm:text-lg">
   Whether you're launching a SaaS product, modernizing an internal dashboard, or scaling a business platform, I'm ready to build a fast, reliable, and production-ready frontend tailored to your goals.
  </p>

  {/* Buttons */}
  <motion.div
    variants={fadeIn}
    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
      href="https://wa.me/+923325942042"
      external
      variant="secondary"
      size="lg"
    >
      Chat on WhatsApp
    </Button>
  </motion.div>
</motion.div>
          </motion.div>

          
           
        </motion.div>
      </Container>
    </section>
  );
}