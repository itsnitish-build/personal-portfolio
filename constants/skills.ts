import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile Development",
    icon: "smartphone",
    skills: [
      { name: "React Native", proficiency: 95 },
      { name: "Expo", proficiency: 90 },
      { name: "Redux Toolkit", proficiency: 88 },
      { name: "Zustand", proficiency: 85 },
      { name: "Firebase", proficiency: 82 },
    ],
  },
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React", proficiency: 95 },
      { name: "Next.js", proficiency: 92 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 92 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 82 },
      { name: "MongoDB", proficiency: 80 },
      { name: "REST APIs", proficiency: 90 },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", proficiency: 92 },
      { name: "GitHub", proficiency: 90 },
      { name: "VS Code", proficiency: 95 },
      { name: "Android Studio", proficiency: 80 },
      { name: "Xcode", proficiency: 75 },
    ],
  },
];

export const ALL_SKILL_NAMES = SKILL_CATEGORIES.flatMap((cat) =>
  cat.skills.map((s) => s.name)
);
