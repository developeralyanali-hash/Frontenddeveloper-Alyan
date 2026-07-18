import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-2xl text-left",
        className
      )}
    >
      {/* Eyebrow */}
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[1px] text-[#7B3FFF]">
        {eyebrow}
      </span>

      {/* Heading */}
      <h2
        className={cn(
          "font-extrabold leading-tight text-[#0A0A0A]",
          "text-3xl md:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6B7280]">
          {description}
        </p>
      )}
    </div>
  );
}