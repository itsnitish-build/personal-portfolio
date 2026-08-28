"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    document.documentElement.classList.add("lenis");

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) {
      document.body.classList.add("touch-device");
    } else {
      document.body.classList.remove("touch-device");
    }
  }, [isTouch]);

  return <>{children}</>;
}
