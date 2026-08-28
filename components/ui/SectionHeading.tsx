"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="gradient-text">
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent to-purple-400" />
    </motion.div>
  );
}
