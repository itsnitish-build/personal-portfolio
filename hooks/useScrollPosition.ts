"use client";

import { useEffect, useState } from "react";

/** Track scroll position for navbar and scroll-to-top visibility */
export function useScrollPosition(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
      setShowScrollTop(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, showScrollTop };
}
