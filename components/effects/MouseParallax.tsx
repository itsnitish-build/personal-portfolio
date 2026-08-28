"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export default function MouseParallax() {
  const { x, y } = useMousePosition();
  const isTouch = useIsTouchDevice();
  const [dims, setDims] = useState({ w: 1, h: 1 });

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (isTouch) return null;

  const px = (x / dims.w - 0.5) * 20;
  const py = (y / dims.h - 0.5) * 20;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(99,102,241,0.06), transparent 40%)`,
        transform: `translate(${px}px, ${py}px)`,
        transition: "transform 0.3s ease-out",
      }}
    />
  );
}
