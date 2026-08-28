"use client";

import Reveal, { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import SkillPill from "@/components/ui/SkillPill";
import { EXPERIENCES } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border" aria-label="Work experience">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SplitHeading
            label="Work Experience"
            lines={["Where I've", "shipped."]}
            accentLine={1}
            className="mb-16"
          />
        </Reveal>

        <StaggerContainer className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <StaggerItem key={exp.company}>
              <article className="border border-border rounded-2xl p-6 md:p-8 hover:border-border-bright hover-subtle transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl md:text-2xl font-semibold">
                        {exp.company}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-muted-light text-sm md:text-base">{exp.position}</p>
                  </div>
                  <span className="text-sm text-muted font-mono shrink-0">{exp.duration}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="text-sm text-muted leading-relaxed flex gap-3">
                      <span className="text-muted/40 shrink-0 mt-1.5 w-1 h-1 rounded-full bg-muted" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <SkillPill key={tech} name={tech} variant="muted" />
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
