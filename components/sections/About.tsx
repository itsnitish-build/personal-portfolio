"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { ABOUT_BIO, ABOUT_HIGHLIGHTS, SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border" aria-label="About">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SplitHeading
            label="About me"
            lines={["The engineer", "behind the", "apps."]}
            accentLine={1}
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal delay={0.1}>
            <p className="text-muted text-base md:text-lg leading-[1.85] whitespace-pre-line mb-8">
              {ABOUT_BIO}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent-light transition-colors"
              >
                Download CV <ArrowUpRight size={14} />
              </a>
              {SOCIAL_LINKS.filter((s) => s.icon !== "mail").map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.name} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
              🖥 Engineering environment
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="border border-border rounded-2xl p-5 hover:border-border-bright hover-subtle transition-all duration-300"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="font-medium text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
