"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          aria-label="Loading"
          role="status"
        >
          <div className="font-display text-5xl font-bold tracking-tighter mb-8 text-foreground">
            {SITE_CONFIG.initials}
          </div>
          <div className="flex items-baseline gap-1 font-mono text-sm text-muted mb-3">
            <span className="text-foreground tabular-nums">
              {String(Math.min(progress, 100)).padStart(2, "0")}
            </span>
            <span>/ 100</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            loading experience
          </p>
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-accent-brand transition-all duration-150"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
