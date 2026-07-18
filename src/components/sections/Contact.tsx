"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MessageCircle } from "lucide-react";

import Container from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { SECTION_IDS } from "@/lib/constants";
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

export default function Contact() {
  const services = [
    "Business Website",
    "Admin Dashboard",
    "Landing Page",
    "Responsive UI Development",
    "Frontend Web Application",
    "Figma to React / Next.js",
    "Other",
  ];

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    project: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Thanks! Your message has been sent. I'll get back to you soon.");
      setForm({
        full_name: "",
        email: "",
        project: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Unable to send your message. Please contact me directly via email.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setShowServices(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id={SECTION_IDS.contact} className="w-full bg-white py-20 lg:py-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <motion.div variants={fadeIn} className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                <MessageCircle size={18} className="text-[#7B3FFF]" />
                <span className="text-sm font-semibold text-[#7B3FFF]">
                  {contact.eyebrow}
                </span>
              </div>
            </div>

            <motion.h2 variants={fadeIn} className="mx-auto max-w-4xl font-extrabold leading-[1.1] tracking-tight text-[#111111]">
              <span className="block text-[2rem] sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.9rem] xl:text-[3.2rem]">
                Let's Build Your
              </span>
              <span className="mt-2 block bg-gradient-to-r from-[#7B3FFF] to-[#A855F7] bg-clip-text text-[2rem] text-transparent sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.9rem] xl:text-[3.2rem]">
                Next Web Application
              </span>
            </motion.h2>
          </motion.div>

          {/* Content Layout */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            
            {/* Left Column (Info) */}
            <motion.div variants={fadeInLeft} className="order-2 flex flex-col justify-start lg:order-1">
              <motion.p variants={fadeIn} className="text-center text-[15px] leading-relaxed text-[#6B7280] sm:text-lg lg:text-left">
                {contact.description}
              </motion.p>

              <div className="mt-10 space-y-4">
                {contact.items.map((item, index) => {
                  const Icon = item.icon;
                  const Card = (
                    <motion.div
                      key={item.label}
                      variants={fadeIn}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="group flex items-center gap-4 border border-[#ECECEC] bg-[#FAFAFA] p-4 transition-all duration-300 rounded-3xl sm:gap-5 sm:p-5 hover:border-[#7B3FFF]/20 hover:bg-white hover:shadow-[0_18px_40px_rgba(123,63,255,0.08)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 transition-all duration-300 sm:h-12 sm:w-12 group-hover:bg-[#7B3FFF]">
                        <Icon size={22} className="text-[#7B3FFF] transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7B3FFF]">
                          {item.label}
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold text-[#111111] sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <Link key={item.label} href={item.href} className="block rounded-3xl">
                      {Card}
                    </Link>
                  ) : (
                    <div key={item.label}>{Card}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <div className="flex flex-col items-stretch gap-3 border border-[#ECECEC] bg-[#FAFAFA] p-3 rounded-3xl sm:flex-row sm:items-center">
                  {contact.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center justify-center gap-3 border border-transparent bg-white py-4 transition-all duration-300 rounded-2xl sm:flex-1 hover:-translate-y-1 hover:border-[#7B3FFF]/20 hover:shadow-[0_12px_28px_rgba(123,63,255,0.10)]"
                      >
                        <Icon size={19} className="text-[#7B3FFF] transition-transform duration-300 group-hover:scale-110" />
                        <span className="font-semibold text-[#111111]">{social.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column (Form Container) */}
            <motion.div variants={fadeInRight} className="order-1 w-full lg:order-2">
              <motion.form
                onSubmit={handleSubmit}
                variants={fadeIn}
                className="w-full border border-[#ECECEC] bg-white p-5 shadow-[0_18px_45px_rgba(17,17,17,0.06)] rounded-3xl sm:p-6 lg:p-8"
              >
                {/* Full Name */}
                <div className="mb-5">
                  <label htmlFor="full_name" className="mb-2 block text-sm font-semibold text-[#111111]">
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={contact.form.fullNamePlaceholder}
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    className="h-14 w-full border border-[#E5E7EB] px-4 text-[15px] text-[#111111] outline-none transition-all duration-300 rounded-2xl placeholder:text-[#9CA3AF] focus:border-[#7B3FFF] focus:ring-4 focus:ring-[#7B3FFF]/10"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#111111]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={contact.form.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-14 w-full border border-[#E5E7EB] px-4 text-[15px] text-[#111111] outline-none transition-all duration-300 rounded-2xl placeholder:text-[#9CA3AF] focus:border-[#7B3FFF] focus:ring-4 focus:ring-[#7B3FFF]/10"
                  />
                </div>

                {/* Project Name */}
                <div className="mb-5">
                  <label htmlFor="project" className="mb-2 block text-sm font-semibold text-[#111111]">
                    Project Name
                  </label>
                  <input
                    id="project"
                    name="project"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder={contact.form.projectPlaceholder}
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="h-14 w-full border border-[#E5E7EB] px-4 text-[15px] text-[#111111] outline-none transition-all duration-300 rounded-2xl placeholder:text-[#9CA3AF] focus:border-[#7B3FFF] focus:ring-4 focus:ring-[#7B3FFF]/10"
                  />
                </div>

                {/* Service Needed */}
                <div ref={serviceRef} className="relative mb-5">
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[#111111]">
                    Service Needed
                  </label>
                  <input
                    id="service"
                    type="text"
                    autoComplete="off"
                    placeholder="Choose or type a service..."
                    value={form.service}
                    onFocus={() => setShowServices(true)}
                    onClick={() => setShowServices(true)}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="h-14 w-full border border-[#E5E7EB] px-4 text-[15px] text-[#111111] outline-none transition-all duration-300 rounded-2xl placeholder:text-[#9CA3AF] focus:border-[#7B3FFF] focus:ring-4 focus:ring-[#7B3FFF]/10"
                  />

                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 right-0 z-30 mt-2 max-h-60 overflow-y-auto border border-[#ECECEC] bg-white shadow-[0_18px_45px_rgba(17,17,17,0.08)] rounded-2xl"
                    >
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, service });
                            setShowServices(false);
                          }}
                          className="block w-full border-b border-[#F5F5F5] px-4 py-3 text-left text-[15px] text-[#374151] transition-all duration-200 hover:bg-violet-50 hover:text-[#7B3FFF] last:border-b-0"
                        >
                          {service}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Project Details */}
                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#111111]">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    name="message"
                    autoComplete="off"
                    placeholder={contact.form.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none border border-[#E5E7EB] bg-[#FCFCFD] px-4 py-4 text-[15px] leading-7 text-[#111111] outline-none transition-all duration-300 rounded-2xl placeholder:text-[#9CA3AF] focus:border-[#7B3FFF] focus:bg-white focus:ring-4 focus:ring-[#7B3FFF]/10"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#7B3FFF] to-[#8B5CF6] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_15px_35px_rgba(123,63,255,0.22)] transition-all duration-300 rounded-2xl hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(123,63,255,0.32)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? "Sending..." : contact.form.buttonText}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="mt-4 text-center text-sm text-[#6B7280]">
                  I'll usually respond within 24 hours.
                </p>
              </motion.form>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}