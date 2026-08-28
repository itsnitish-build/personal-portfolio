"use client";

import { motion } from "framer-motion";
import { Moon, Zap } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export default function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isCarbon = theme === "dark";

  return (
    <div
      className={cn(
        "relative flex items-center p-1 rounded-full border border-border bg-surface/60 backdrop-blur-xl",
        compact ? "h-9" : "h-10",
        className
      )}
      role="group"
      aria-label="Theme switcher"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={cn(
          "absolute top-1 bottom-1 rounded-full",
          isCarbon
            ? "left-1 right-[calc(50%-2px)] bg-foreground/10"
            : "left-[calc(50%-2px)] right-1 bg-[var(--theme-neon)]/25 shadow-[0_0_14px_var(--theme-neon-glow)]"
        )}
      />

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={isCarbon}
        aria-label="Carbon theme"
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full transition-colors",
          compact ? "w-9 h-7" : "w-10 h-8",
          isCarbon ? "text-foreground" : "text-muted"
        )}
      >
        <Moon size={14} strokeWidth={isCarbon ? 2.25 : 1.75} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("neon")}
        aria-pressed={!isCarbon}
        aria-label="Neon theme"
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full transition-colors",
          compact ? "w-9 h-7" : "w-10 h-8",
          !isCarbon ? "text-[var(--theme-neon)]" : "text-muted"
        )}
      >
        <Zap size={14} strokeWidth={!isCarbon ? 2.25 : 1.75} />
      </button>
    </div>
  );
}
