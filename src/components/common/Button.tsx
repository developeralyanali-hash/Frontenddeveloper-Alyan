"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * ------------------------------------------------------------------
 * Button Variants
 * ------------------------------------------------------------------
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#7B3FFF] to-[#8B5CF6] text-white shadow-[0_8px_24px_rgba(123,63,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(123,63,255,0.35)]",

        secondary:
          "border border-[#E5E7EB] bg-white text-[#111111] hover:border-[#7B3FFF] hover:text-[#7B3FFF] hover:bg-[#F9FAFB]",

        ghost:
          "bg-transparent text-[#111111] hover:bg-[#F5F3FF] hover:text-[#7B3FFF]",

        live:
          "bg-gradient-to-r from-[#7B3FFF] to-[#8B5CF6] text-white shadow-[0_8px_24px_rgba(123,63,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(123,63,255,0.35)]",
      },

      size: {
        sm: "h-10 px-4 text-sm",

        default: "h-12 px-6 text-[15px]",

        lg: "h-14 px-8 text-base",

        icon: "h-10 w-10",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

/**
 * ------------------------------------------------------------------
 * Props
 * ------------------------------------------------------------------
 */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;

  external?: boolean;

  loading?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  /**
   * Automatically renders an ArrowRight icon.
   */
  withArrow?: boolean;
}

/**
 * ------------------------------------------------------------------
 * Button Component
 * ------------------------------------------------------------------
 */

export default function Button({
  className,
  variant,
  size,
  fullWidth,

  href,
  external = false,

  loading = false,

  leftIcon,
  rightIcon,
  withArrow = false,

  children,

  disabled,

  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants({
      variant,
      size,
      fullWidth,
    }),
    className
  );

  const finalRightIcon =
    rightIcon ?? (withArrow ? <ArrowRight size={18} /> : null);

  const content = (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}

      <span>{loading ? "Loading..." : children}</span>

      {!loading && finalRightIcon && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {finalRightIcon}
        </span>
      )}
    </>
  );

  /**
   * --------------------------------------------------------------
   * Link Button
   * --------------------------------------------------------------
   */

  if (href) {
  return (
    <a
      href={href}
      className={cn(classes, "group")}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

  /**
   * --------------------------------------------------------------
   * Native Button
   * --------------------------------------------------------------
   */

  return (
    <button
      className={cn(classes, "group")}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}