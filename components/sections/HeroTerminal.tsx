"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TERMINAL_LINES } from "@/constants/site";

type Token = { text: string; className: string };

/* Turn a raw terminal line into syntax-highlighted tokens. */
function tokenize(type: string, text: string): Token[] {
  if (type === "cmd") {
    // e.g. "$ npx impact --show"
    const tokens: Token[] = [];
    const parts = text.split(/(\s+)/); // keep whitespace
    let cmdSeen = false;
    parts.forEach((part) => {
      if (part.trim() === "") {
        tokens.push({ text: part, className: "" });
        return;
      }
      if (part === "$") {
        tokens.push({ text: part, className: "text-[var(--theme-stat-green)] font-semibold" });
      } else if (part.startsWith("--") || part.startsWith("-")) {
        tokens.push({ text: part, className: "text-[var(--theme-stat-blue)]" });
      } else if (!cmdSeen) {
        cmdSeen = true;
        tokens.push({ text: part, className: "text-[var(--theme-accent-brand)] font-medium" });
      } else {
        tokens.push({ text: part, className: "text-muted-light" });
      }
    });
    return tokens;
  }

  if (type === "out") {
    // e.g. "→ NOYT India Pvt. Ltd.     [2025–Present]"
    const tokens: Token[] = [];
    // split out the leading arrow and any [bracketed] segments
    const regex = /(\[[^\]]*\])/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    const pushPlain = (s: string) => {
      if (!s) return;
      if (s.startsWith("→")) {
        tokens.push({ text: "→", className: "text-muted" });
        tokens.push({ text: s.slice(1), className: "text-foreground/80" });
      } else {
        tokens.push({ text: s, className: "text-foreground/80" });
      }
    };
    while ((match = regex.exec(text)) !== null) {
      pushPlain(text.slice(lastIndex, match.index));
      tokens.push({ text: match[0], className: "text-[var(--theme-stat-amber)]" });
      lastIndex = regex.lastIndex;
    }
    pushPlain(text.slice(lastIndex));
    return tokens;
  }

  if (type === "success") {
    return [{ text, className: "text-[var(--theme-stat-green)] font-medium" }];
  }
  if (type === "info") {
    return [{ text, className: "text-[var(--theme-stat-blue)]" }];
  }
  return [{ text, className: "text-foreground/80" }];
}

const TYPED = TERMINAL_LINES.map((l) => ({
  ...l,
  tokens: tokenize(l.type, l.text),
  length: l.text.length,
}));

/* Render a line, revealing only the first `reveal` characters. */
function PartialLine({ tokens, reveal }: { tokens: Token[]; reveal: number }) {
  let remaining = reveal;
  return (
    <>
      {tokens.map((tok, i) => {
        if (remaining <= 0) return null;
        const slice = tok.text.slice(0, remaining);
        remaining -= tok.text.length;
        return (
          <span key={i} className={tok.className}>
            {slice}
          </span>
        );
      })}
    </>
  );
}

export default function HeroTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (done) return;

    if (lineIndex >= TYPED.length) {
      setDone(true);
      return;
    }

    const current = TYPED[lineIndex];

    if (charIndex < current.length) {
      // Commands type slower (human-like), output prints fast.
      const base = current.type === "cmd" ? 38 : 9;
      const jitter = current.type === "cmd" ? Math.random() * 55 : 0;
      timer.current = setTimeout(() => setCharIndex((c) => c + 1), base + jitter);
    } else {
      // Pause before next line, longer after a command finishes.
      const pause = current.type === "cmd" ? 320 : 90;
      timer.current = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, pause);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [lineIndex, charIndex, done]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      className="bento-card rounded-2xl overflow-hidden font-mono text-xs sm:text-sm"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-elevated/80">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-muted text-[10px]">nitish@engineer — ~</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[var(--theme-stat-green)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-stat-green)] animate-pulse" />
          live
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-1.5 h-[280px] overflow-hidden">
        {TYPED.map((line, i) => {
          if (i > lineIndex) return null;
          const reveal = i < lineIndex ? line.length : charIndex;
          const isActive = i === lineIndex && !done;
          return (
            <p key={i} className="whitespace-pre-wrap leading-relaxed">
              <PartialLine tokens={line.tokens} reveal={reveal} />
              {isActive && (
                <span className="inline-block w-[7px] h-[1em] -mb-[2px] ml-px bg-[var(--theme-accent-brand)] cursor-blink" />
              )}
            </p>
          );
        })}

        {/* Idle prompt + blinking cursor once everything is typed */}
        {done && (
          <p className="leading-relaxed">
            <span className="text-[var(--theme-stat-green)] font-semibold">$ </span>
            <span className="inline-block w-[7px] h-[1em] -mb-[2px] bg-[var(--theme-accent-brand)] cursor-blink" />
          </p>
        )}
      </div>
    </motion.div>
  );
}
