"use client";

import { motion } from "framer-motion";
import { Home, User, Code2, FolderKanban, Briefcase, Mail } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn, scrollToSection } from "@/lib/utils";

const TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Stack", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function MobileTabBar() {
  const activeSection = useActiveSection();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      aria-label="Mobile navigation"
    >
      {/* Fade gradient above tab bar */}
      <div
        className="absolute inset-x-0 -top-8 h-8 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--theme-bg), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
        <div className="mobile-tab-glass rounded-[1.25rem] px-1.5 py-1.5">
          <ul className="flex items-center justify-between relative">
            {TABS.map((tab) => {
              const isActive = activeSection === tab.id;
              const Icon = tab.icon;

              return (
                <li key={tab.id} className="flex-1 relative">
                  {isActive && (
                    <motion.div
                      layoutId="mobile-tab-indicator"
                      className="absolute inset-0 mobile-tab-active rounded-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <button
                    onClick={() => scrollToSection(tab.id)}
                    className={cn(
                      "relative z-10 w-full flex flex-col items-center gap-0.5 py-2 rounded-xl transition-colors duration-300",
                      isActive ? "text-foreground" : "text-muted"
                    )}
                  >
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2.25 : 1.75}
                      className={cn(isActive && "text-accent-brand")}
                    />
                    <span
                      className={cn(
                        "text-[9px] font-medium",
                        isActive && "text-accent-light"
                      )}
                    >
                      {tab.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
