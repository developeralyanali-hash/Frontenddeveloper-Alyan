"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Code2,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { SECTION_IDS } from "@/lib/constants";

import {
  fadeIn,
  staggerContainer,
} from "@/lib/animations";

import { caseStudies } from "@/data/casestudies";

/* -------------------------------------------------------------------------- */
/*                              Case Studies                                  */
/* -------------------------------------------------------------------------- */

export default function CaseStudies() {
  return (
    <section
      id={SECTION_IDS.caseStudies}
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
          {/* Section Header */}
          {/* ========================================================= */}

          <motion.div
            variants={fadeIn}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
  variants={fadeIn}
  className="mb-6 flex justify-center"
>
  <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
    <Code2
      size={18}
      className="text-[#7B3FFF]"
    />

    <span className="text-sm font-semibold text-[#7B3FFF]">
      Case Studies
    </span>
  </div>
</motion.div>

            <motion.h2
  variants={fadeIn}
  className="mx-auto max-w-5xl text-center font-extrabold leading-[1.1] tracking-tight text-[#111111]"
>
  {/* Line 1 */}
  <span className="block text-[1.75rem] sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.9rem] xl:text-[3.2rem]">
    Featured
  </span>

  <span className="mt-2 block bg-gradient-to-r from-[#7B3FFF] to-[#A855F7] bg-clip-text text-[1.75rem] text-transparent sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.9rem] xl:text-[3.2rem]">
  Frontend Projects
</span>
</motion.h2>

            <motion.p
  variants={fadeIn}
  className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-[#6B7280] sm:text-lg"
>
  Explore a selection of React and Next.js projects demonstrating scalable frontend architecture, responsive user interfaces, and modern development practices.
</motion.p>
          </motion.div>

          {/* ========================================================= */}
          {/* Projects */}
          {/* ========================================================= */}

          <div className="mt-16 space-y-8">

            {caseStudies.map((project, index) => (

              <motion.article
                key={project.id}
                variants={fadeIn}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#ECECEC]
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#7B3FFF]/20
                  hover:shadow-[0_20px_50px_rgba(123,63,255,0.10)]
                "
              >
                <div className="grid lg:grid-cols-[420px_1fr]">
               

                  {/* ================================================= */}
                  {/* Project Image */}
                  {/* ================================================= */}

                  
  {/* ================================================= */}
{/* Mobile + Tablet Image */}
{/* ================================================= */}

<div className="relative aspect-[16/10] overflow-hidden bg-[#FAFAFA] p-5 sm:p-6 lg:hidden">
  <Image
    src={project.mobileImage}
    alt={project.title}
    fill
    sizes="100vw"
    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
  />
</div>

{/* ================================================= */}
{/* Desktop Image */}
{/* ================================================= */}

<div className="relative hidden lg:flex items-center justify-center bg-[#FAFAFA] p-8">
  <div className="relative h-full w-full">
    <Image
      src={project.desktopImage}
      alt={project.title}
      fill
      sizes="420px"
      className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
    />
  </div>
</div>

                  {/* ================================================= */}
                  {/* Project Content */}
                  {/* ================================================= */}

                  <div className="flex flex-col justify-between p-7 lg:p-10">
                                        <div>

                      {/* Category */}

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-[#F5F3FF]
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-[#7B3FFF]
                        "
                      >
                        {project.category}
                      </span>

                      {/* Title */}

                      <h3 className="mt-5 text-3xl font-bold text-[#111111]">
                        {project.title}
                      </h3>

                      {/* Problem */}

                      <div className="mt-8">

                        <h4 className="text-lg font-semibold text-[#111111]">
                          Challenge
                        </h4>

                        <p className="mt-2 text-[15px] leading-7 text-[#6B7280]">
                          {project.problem}
                        </p>

                      </div>

                      {/* Solution */}

                      <div className="mt-6">

                        <h4 className="text-lg font-semibold text-[#111111]">
                          Solution
                        </h4>

                        <p className="mt-2 text-[15px] leading-7 text-[#6B7280]">
                          {project.solution}
                        </p>

                      </div>

                      {/* Tech Stack */}

                      <div className="mt-8 flex flex-wrap gap-3">

                        {project.techStack.map((tech) => (

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
                            "
                          >
                            {tech}
                          </span>

                        ))}

                      </div>

                    </div>

                    {/* =============================================== */}
                    {/* Action Buttons */}
                    {/* =============================================== */}

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-[#7B3FFF]
                          px-6
                          py-3
                          text-sm
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#6A31E8]
                        "
                      >
                        Live Demo

                        <ArrowUpRight size={18} />

                      </Link>

                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-[#E5E7EB]
                          bg-white
                          px-6
                          py-3
                          text-sm
                          font-semibold
                          text-[#111111]
                          transition-all
                          duration-300
                          hover:border-[#7B3FFF]
                          hover:text-[#7B3FFF]
                        "
                      >
                        GitHub

                        <Code2 size={18} />

                      </Link>

                    </div>

                  </div>
                                  </div>

              </motion.article>

            ))}

          </div>

        </motion.div>

      </Container>

    </section>
  );
}