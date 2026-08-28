"use client";

import SkillPill from "@/components/ui/SkillPill";
import { cn } from "@/lib/utils";

interface SkillMarqueeProps {
  skills: string[];
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function SkillMarquee({
  skills,
  reverse = false,
  speed = "normal",
  className,
}: SkillMarqueeProps) {
  const items = [...skills, ...skills];

  const speedClass = {
    slow: reverse ? "animate-marquee-reverse-slow" : "animate-marquee-slow",
    normal: reverse ? "animate-marquee-reverse" : "animate-marquee",
    fast: reverse ? "animate-marquee-reverse-fast" : "animate-marquee-fast",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className={cn("flex w-max gap-3 py-1", speedClass[speed])}>
        {items.map((skill, i) => (
          <SkillPill
            key={`${skill}-${i}`}
            name={skill}
            variant={i % 3 === 0 ? "accent" : "default"}
          />
        ))}
      </div>
    </div>
  );
}
