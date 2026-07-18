"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  y?: number;
}

export default function AnimatedWrapper({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  y = 40,
}: AnimatedWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}