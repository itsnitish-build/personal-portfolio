"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type CursorVariant = "default" | "button" | "link" | "project" | "text";

interface CursorContextValue {
  variant: CursorVariant;
  label: string;
  setVariant: (variant: CursorVariant) => void;
  setLabel: (label: string) => void;
  reset: () => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");

  const reset = useCallback(() => {
    setVariant("default");
    setLabel("");
  }, []);

  return (
    <CursorContext.Provider value={{ variant, label, setVariant, setLabel, reset }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
}
