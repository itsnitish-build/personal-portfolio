"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useCursor } from "@/context/CursorContext";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export default function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const { variant, label } = useCursor();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.6 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 500 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 500 });

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch, cursorX, cursorY]);

  if (isTouch) return null;

  const size =
    variant === "project" ? 100 : variant === "button" ? 56 : variant === "link" ? 40 : 12;

  const isExpanded = variant !== "default";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ width: size, height: size, opacity: isExpanded ? 1 : 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="rounded-full border border-white/80 flex items-center justify-center"
        >
          {variant === "project" && label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10px] font-medium text-white tracking-wide uppercase whitespace-nowrap"
            >
              {label}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ opacity: isExpanded ? 0 : 1 }}
          className="w-1.5 h-1.5 rounded-full bg-accent"
        />
      </motion.div>
    </>
  );
}
