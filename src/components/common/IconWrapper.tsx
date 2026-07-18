import { cn } from "@/lib/utils";

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function IconWrapper({
  children,
  className,
  size = "md",
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#7B3FFF] transition-all duration-300",

        size === "sm" && "h-10 w-10",
        size === "md" && "h-12 w-12",
        size === "lg" && "h-14 w-14",

        className
      )}
    >
      {children}
    </div>
  );
}