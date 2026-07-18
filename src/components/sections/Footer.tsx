"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { contact } from "@/data/contact";

import {
  fadeIn,
  fadeInLeft,
  staggerContainer,
} from "@/lib/animations";

import { SECTION_IDS } from "@/lib/constants";

import { FaInstagram } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                Footer Links                                */
/* -------------------------------------------------------------------------- */

const quickLinks = [
  {
    label: "Home",
    href: `#${SECTION_IDS.hero}`,
  },
  {
    label: "Services",
    href: `#${SECTION_IDS.services}`,
  },
  {
    label: "Case Studies",
    href: `#${SECTION_IDS.caseStudies}`,
  },
  {
    label: "About",
    href: `#${SECTION_IDS.about}`,
  },
  {
    label: "Contact",
    href: `#${SECTION_IDS.contact}`,
  },
];

const services = [
  "Business Websites",
  "Web Applications",
  "Admin Dashboards",
  "Business Systems",
];

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  return (
    <footer className="border-t border-[#F1F1F1] bg-white pt-16 pb-6">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.3fr_0.9fr_1fr_1fr]
          "
        >
          {/* ========================================================= */}
          {/* Brand */}
          {/* ========================================================= */}

          <motion.div variants={fadeInLeft}>
            {/* ------------------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------------------- */}

            <Link
              href={`#${SECTION_IDS.hero}`}
              className="inline-flex items-center gap-3"
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-[#7B3FFF]
                  to-[#8B5CF6]
                  text-lg
                  font-bold
                  text-white
                "
              >
                A
              </div>

              <span className="text-2xl font-extrabold text-[#111111]">
                Alyan
              </span>
            </Link>

            {/* ------------------------------------------------------- */}
            {/* Tagline */}
            {/* ------------------------------------------------------- */}

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-[#6B7280]
              "
            >
              I build modern websites, web applications and business
              systems that help companies automate workflows, improve
              efficiency and create better digital experiences.
            </p>

            {/* ------------------------------------------------------- */}
            {/* Social Links */}
            {/* ------------------------------------------------------- */}

            <div className="mt-8 flex flex-wrap gap-3">
              {contact.socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F5F3FF]
                      text-[#7B3FFF]
                      transition-all
                      duration-300
                      hover:bg-[#7B3FFF]
                      hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* Quick Links */}
          {/* ========================================================= */}
                    <motion.div variants={fadeIn}>
            <h4
              className="
                mb-5
                text-[13px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#111111]
              "
            >
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    w-fit
                    text-sm
                    text-[#6B7280]
                    transition-colors
                    duration-300
                    hover:text-[#7B3FFF]
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* ========================================================= */}
          {/* Services */}
          {/* ========================================================= */}

          <motion.div variants={fadeIn}>
            <h4
              className="
                mb-5
                text-[13px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#111111]
              "
            >
              Services
            </h4>

            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <p
                  key={service}
                  className="
                    text-sm
                    leading-6
                    text-[#6B7280]
                    transition-colors
                    duration-300
                    hover:text-[#7B3FFF]
                  "
                >
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* Contact Info */}
          {/* ========================================================= */}

          <motion.div variants={fadeIn}>
            <h4
              className="
                mb-5
                text-[13px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#111111]
              "
            >
              Contact Info
            </h4>

            <div className="space-y-4">
              <Link
                href={`mailto:${contact.items[0].value}`}
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-[#6B7280]
                  transition-colors
                  duration-300
                  hover:text-[#7B3FFF]
                "
              >
                <Mail
                  size={16}
                  className="text-[#7B3FFF]"
                />

                <span>{contact.items[0].value}</span>
              </Link>

              <Link
                href={`tel:${contact.items[1].value}`}
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-[#6B7280]
                  transition-colors
                  duration-300
                  hover:text-[#7B3FFF]
                "
              >
                <Phone
                  size={16}
                  className="text-[#7B3FFF]"
                />

                <span>{contact.items[1].value}</span>
              </Link>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-[#6B7280]
                "
              >
                <MapPin
                  size={16}
                  className="text-[#7B3FFF]"
                />

                <span>{contact.items[2].value}</span>
              </div>
            </div>
          </motion.div>
                  {/* ========================================================= */}
        {/* Copyright */}
        {/* ========================================================= */}

        
        <div
  className="
    col-span-full
    mt-14
    border-t
    border-[#F1F1F1]
    pt-6
  "
>
          <p
            className="
              text-center
              text-sm
              text-[#6B7280]
            "
          >
            © {new Date().getFullYear()} Alyan Ali. All rights reserved.
          </p>
        </div>
              </motion.div>
              </Container>
    </footer>
  );
}