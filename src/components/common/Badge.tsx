import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "tech" | "floating" | "label";
}

export default function Badge({
  children,
  className,
  variant = "tech",
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 transition-all duration-300",

        // Variants
        variant === "tech" &&
          "rounded-full bg-[#F5F3FF] px-3.5 py-1.5 text-xs font-semibold text-[#7B3FFF]",

        variant === "floating" &&
          "rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-[#111111] shadow-[0_8px_24px_rgba(0,0,0,0.08)]",

        variant === "label" &&
          "rounded-md bg-[#F5F3FF] px-3 py-1 text-xs font-bold uppercase tracking-[0.5px] text-[#7B3FFF]",

        className
      )}
    >
      {children}
    </div>
  );
}