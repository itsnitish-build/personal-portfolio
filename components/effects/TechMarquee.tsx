"use client";

import SkillPill from "@/components/ui/SkillPill";
import { MARQUEE_TECH } from "@/constants/site";

export default function TechMarquee() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <section className="py-6 overflow-hidden border-y border-white/[0.06]" aria-label="Technologies">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max gap-3 animate-marquee-slow">
          {items.map((tech, i) => (
            <SkillPill
              key={`${tech}-${i}`}
              name={tech}
              variant={i % 4 === 0 ? "accent" : "muted"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
