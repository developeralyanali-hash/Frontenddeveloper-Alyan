import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Input component props.
 *
 * Extend this type in the future if custom props are needed.
 */
export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-14 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[15px] font-normal text-[#111111] placeholder:text-[#9CA3AF] transition-all duration-200",
          "focus:border-[#7B3FFF] focus:outline-none focus:ring-4 focus:ring-[rgba(123,63,255,0.08)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;