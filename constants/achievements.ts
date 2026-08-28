import type { Achievement } from "@/types";
import { YEARS_OF_EXPERIENCE } from "./site";

export const ACHIEVEMENTS: Achievement[] = [
  {
    label: "Years of Experience",
    value: YEARS_OF_EXPERIENCE,
    suffix: "+",
    icon: "calendar",
  },
  {
    label: "Technologies Mastered",
    value: 20,
    suffix: "+",
    icon: "code",
  },
];
