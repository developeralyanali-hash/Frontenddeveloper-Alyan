import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[#F1F1F1] bg-white transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:border-[#E5E7EB] hover:shadow-[0_18px_48px_rgba(123,63,255,0.10)]",
        className
      )}
    >
      {children}
    </div>
  );
}