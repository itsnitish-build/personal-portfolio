"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function AuroraBackground() {
  const { x, y } = useMousePosition();
  const [dims, setDims] = useState({ w: 1, h: 1 });

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const parallaxX = (x / dims.w - 0.5) * 30;
  const parallaxY = (y / dims.h - 0.5) * 30;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 noise-overlay opacity-50" />

      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          top: "10%",
          left: "20%",
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          animation: "aurora 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          top: "50%",
          right: "10%",
          transform: `translate(${-parallaxX * 0.3}px, ${-parallaxY * 0.3}px)`,
          animation: "aurora 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          bottom: "10%",
          left: "40%",
          transform: `translate(${parallaxX * 0.2}px, ${parallaxY * 0.2}px)`,
          animation: "aurora 18s ease-in-out infinite 2s",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
