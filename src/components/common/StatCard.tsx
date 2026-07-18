import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  className?: string;
}

export default function StatCard({
  label,
  value,
  className,
}: StatCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="mb-1 text-xs font-bold uppercase tracking-[1px] text-[#7B3FFF]">
        {label}
      </span>

      <span className="text-2xl font-extrabold leading-tight text-[#0A0A0A] md:text-[32px]">
        {value}
      </span>
    </div>
  );
}