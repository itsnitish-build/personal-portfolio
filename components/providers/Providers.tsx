"use client";

import SmoothScroll from "./SmoothScroll";
import ScrollProgress from "@/components/effects/ScrollProgress";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgress />
        {children}
      </SmoothScroll>
    </ThemeProvider>
  );
}
