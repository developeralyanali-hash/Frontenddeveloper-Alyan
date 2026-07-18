import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Textarea component props.
 *
 * Extend this type in the future if custom props are needed.
 */
export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-40 w-full resize-y rounded-xl border border-[#E5E7EB] bg-white px-4 py-4 text-[15px] font-normal text-[#111111] placeholder:text-[#9CA3AF] transition-all duration-200",
          "focus:border-[#7B3FFF] focus:outline-none focus:ring-4 focus:ring-[rgba(123,63,255,0.08)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;