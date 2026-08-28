"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ICONS = ["⚡", "◆", "✦", "◇", "○", "△"];

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".float-icon");

    elements.forEach((el, i) => {
      gsap.to(el, {
        y: "+=20",
        rotation: i % 2 === 0 ? 15 : -15,
        duration: 2 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {ICONS.map((icon, i) => (
        <span
          key={i}
          className="float-icon absolute text-accent/20 text-lg select-none"
          style={{
            top: `${15 + (i * 13) % 70}%`,
            left: `${5 + (i * 17) % 90}%`,
          }}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}
