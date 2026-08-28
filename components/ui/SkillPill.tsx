import { cn } from "@/lib/utils";

interface SkillPillProps {
  name: string;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

export default function SkillPill({
  name,
  className,
  variant = "default",
}: SkillPillProps) {
  const variants = {
    default: "border-border text-muted-light hover:border-border-bright hover:text-foreground",
    accent: "border-border-bright text-foreground",
    muted: "border-transparent text-muted hover:text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 bg-[var(--theme-pill-bg)]",
        variants[variant],
        className
      )}
    >
      {name}
    </span>
  );
}
