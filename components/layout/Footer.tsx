"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { CONTACT_INFO, SITE_CONFIG } from "@/constants/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const { showScrollTop } = useScrollPosition();

  return (
    <>
      <footer className="border-t border-border">
        <div className="max-w-[1400px] mx-auto section-padding !py-20">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              LET&apos;S<br />
              <span className="text-muted">WORK TOGETHER</span>
            </h2>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 text-lg md:text-xl text-foreground hover:text-accent-light transition-colors"
            >
              {CONTACT_INFO.email} <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t border-border">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-bold tracking-widest border border-border rounded-md px-2 py-1">
                {SITE_CONFIG.initials}
              </span>
              <div>
                <p className="text-sm font-medium">{SITE_CONFIG.name}</p>
                <p className="text-xs text-muted">Software Engineer · {SITE_CONFIG.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 items-center">
            <p className="text-xs text-muted items-center">
              © {new Date().getFullYear()} {SITE_CONFIG.name}
            </p>
            {/* <p className="text-xs text-muted items-center">
              Built from scratch · Next.js · TypeScript · Framer Motion · Lenis
            </p> */}
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollToSection("home")}
            className="fixed bottom-24 md:bottom-8 right-5 md:right-8 z-40 p-3 rounded-full border border-border bg-surface text-foreground hover:border-border-bright transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
