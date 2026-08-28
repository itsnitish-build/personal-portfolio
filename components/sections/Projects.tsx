"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import SkillPill from "@/components/ui/SkillPill";
import { PROJECTS, PROJECT_FILTERS } from "@/constants/projects";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding border-t border-border" aria-label="Projects">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SplitHeading
            label="Selected Projects"
            lines={["Systems I've", "built & shipped."]}
            accentLine={1}
          />
          <p className="text-muted text-base md:text-lg mt-6 max-w-xl">
            Real apps — shipped to production and available on app stores.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-2 mt-10 mb-12">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all",
                activeFilter === filter.value
                  ? "btn-primary"
                  : "border border-border text-muted hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <article className="group border border-transparent hover:border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover-subtle">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  <span className="font-mono text-sm text-muted shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent-light transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <SkillPill key={tech} name={tech} variant="muted" />
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                      >
                        Live <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
