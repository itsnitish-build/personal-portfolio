"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  size = "md",
  magnetic = true,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setVariant, reset } = useCursor();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    reset();
  };

  const variants = {
    primary:
      "bg-foreground text-background hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
    secondary:
      "glass text-foreground hover:border-accent/30",
    ghost: "text-muted hover:text-foreground bg-transparent",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const inner = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVariant("button")}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 overflow-hidden group",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      )}
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block disabled:opacity-50">
      {inner}
    </button>
  );
}
