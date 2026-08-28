"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn, scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const activeSection = useActiveSection();
  const { isScrolled } = useScrollPosition();

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace("#", ""));
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled && "nav-blur border-border"
      )}
    >
      <nav
        className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-14 md:h-16"
        aria-label="Main navigation"
      >
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2.5 group"
        >
          <span className="logo-badge font-display text-xs font-bold tracking-widest border rounded-md px-2 py-1 transition-colors">
            {SITE_CONFIG.initials}
          </span>
          <span className="hidden sm:block text-sm text-muted group-hover:text-foreground transition-colors font-mono">
            {SITE_CONFIG.domain}
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-3.5 py-2 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="ml-2">
            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl btn-resume-nav text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </li>
          <li className="ml-2">
            <ThemeToggle compact />
          </li>
        </ul>

        <div className="lg:hidden">
          <ThemeToggle compact />
        </div>
      </nav>
    </motion.header>
  );
}
