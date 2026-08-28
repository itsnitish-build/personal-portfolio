"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Starfield from "@/components/effects/Starfield";
import HeroTerminal from "@/components/sections/HeroTerminal";
import {
  HERO_INTRO,
  HERO_STATS,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from "@/constants/site";
import { scrollToSection } from "@/lib/utils";

const statColorClass = {
  green: "text-[var(--theme-stat-green)]",
  blue: "text-[var(--theme-stat-blue)]",
  amber: "text-[var(--theme-stat-amber)]",
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-24 md:pt-28 overflow-hidden"
      aria-label="Hero"
    >
      <Starfield />

      {/* Hero glow — stronger in neon theme */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-[120px]"
        style={{ background: "var(--theme-hero-glow)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ── Left column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest mb-8"
            >
              <span className="inline-flex items-center gap-2 text-[var(--theme-stat-green)] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-stat-green)] animate-pulse" />
                {SITE_CONFIG.status}
              </span>
              <span className="text-muted">·</span>
              <span className="text-muted">{SITE_CONFIG.location}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="font-display text-[clamp(2.8rem,9vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.92] mb-5"
            >
              <span className="block text-foreground">{SITE_CONFIG.firstName}</span>
              <span className="block hero-surname">{SITE_CONFIG.lastName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-base text-muted-light font-medium mb-5 tracking-wide"
            >
              {SITE_CONFIG.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 }}
              className="text-sm md:text-base text-muted leading-relaxed mb-8 max-w-xl"
            >
              {HERO_INTRO.map((seg, i) =>
                seg.accent ? (
                  <span
                    key={i}
                    className={
                      seg.accent === "brand"
                        ? "text-brand font-medium"
                        : "text-foreground font-medium"
                    }
                  >
                    {seg.text}
                  </span>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowDown size={15} />
              </button>
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover-subtle transition-colors"
              >
                Resume <ArrowUpRight size={15} />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Hire Me →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35 }}
              className="flex flex-wrap gap-x-8 gap-y-3"
            >
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">{link.name}</p>
                  <p className="text-xs text-muted-light group-hover:text-brand transition-colors truncate max-w-[180px]">
                    {link.value}
                  </p>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: terminal + stats bento ── */}
          <div className="space-y-4">
            <HeroTerminal />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="bento-card rounded-2xl p-4 sm:p-5">
                  <p className={`font-display text-2xl sm:text-3xl font-bold ${statColorClass[stat.color]}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-foreground mt-1">{stat.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted mt-0.5 leading-snug">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 right-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted hover:text-foreground transition-colors z-10"
      >
        scroll <ArrowDown size={13} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
