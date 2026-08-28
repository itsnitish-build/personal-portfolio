"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: { x: number; y: number; size: number; opacity: number; twinkle: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars.length = 0;
      const count = theme === "neon" ? 120 : 60;
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const flicker = Math.sin(time * 0.001 + star.twinkle) * 0.3 + 0.7;
        const alpha = star.opacity * flicker * (theme === "neon" ? 1 : 0.5);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        if (theme === "neon") {
          ctx.fillStyle = `rgba(200, 255, 0, ${alpha * 0.6})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
        }
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
