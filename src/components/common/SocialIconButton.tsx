import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialIconButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export default function SocialIconButton({
  href,
  icon,
  label,
  className,
}: SocialIconButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F3FF] text-[#7B3FFF] transition-all duration-300",
        "hover:-translate-y-0.5 hover:bg-[#7B3FFF] hover:text-white",
        className
      )}
    >
      <span className="transition-colors duration-300">{icon}</span>
    </Link>
  );
}