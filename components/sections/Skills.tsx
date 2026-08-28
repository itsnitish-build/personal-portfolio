"use client";

import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import SkillPill from "@/components/ui/SkillPill";
import SkillMarquee from "@/components/effects/SkillMarquee";
import { ALL_SKILL_NAMES, SKILL_CATEGORIES } from "@/constants/skills";

const CATEGORY_ICONS: Record<string, string> = {
  "Mobile Development": "📱",
  Frontend: "⚙️",
  Backend: "🗄️",
  Tools: "☁️",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border overflow-hidden" aria-label="Skills">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SplitHeading
            label="Technical Stack"
            lines={["What I build", "things with."]}
            accentLine={1}
            className="mb-6"
          />
        </Reveal>

        <div className="mt-12 space-y-4 mb-16">
          <SkillMarquee skills={ALL_SKILL_NAMES} speed="normal" />
          <SkillMarquee skills={[...ALL_SKILL_NAMES].reverse()} reverse speed="slow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <div className="border border-border rounded-2xl p-6 md:p-8 hover:border-border-bright transition-colors h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl">{CATEGORY_ICONS[category.title] || "{ }"}</span>
                  <h3 className="font-medium text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillPill key={skill.name} name={skill.name} variant="default" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
