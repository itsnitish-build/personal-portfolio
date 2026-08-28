import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ulikme",
    title: "Ulikme",
    description:
      "A cross-platform mobile application built with React Native. Shipped to production and available on both Google Play Store and Apple App Store.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Expo", "REST APIs"],
    features: [
      "Cross-platform iOS & Android",
      "Production release on Play Store",
      "Production release on App Store",
      "End-to-end feature development",
    ],
    githubUrl: "#",
    liveUrl: "https://play.google.com/store/search?q=Ulikme&c=apps",
  },
  {
    id: "bookyourholistic",
    title: "BookYourHolistic",
    description:
      "A holistic wellness booking mobile app built with React Native. Live on Google Play Store and Apple App Store.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Expo", "Redux Toolkit"],
    features: [
      "Booking & scheduling flows",
      "Cross-platform deployment",
      "Live on Play Store & App Store",
      "Production-ready UI/UX",
    ],
    githubUrl: "#",
    liveUrl: "https://play.google.com/store/search?q=BookYourHolistic&c=apps",
  },
  {
    id: "kundli-pro",
    title: "Kundli Pro",
    description:
      "Production-level astrology application. Contributed bug fixes and stability improvements during internship at Abhiwan Technology. Live on Google Play Store.",
    image:
      "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=800&q=80",
    category: "mobile",
    technologies: ["React Native", "JavaScript", "React Navigation", "Firebase"],
    features: [
      "Production app maintenance",
      "Bug fixes & stability improvements",
      "Live on Google Play Store",
      "Real-world production codebase",
    ],
    githubUrl: "#",
    liveUrl: "https://play.google.com/store/search?q=Kundli+Pro&c=apps",
  },
];

export const PROJECT_FILTERS = [
  { label: "All", value: "all" as const },
  { label: "Mobile Apps", value: "mobile" as const },
  { label: "Web Apps", value: "web" as const },
  { label: "Full Stack", value: "fullstack" as const },
];
