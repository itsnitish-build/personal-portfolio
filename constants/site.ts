import type { ContactInfo } from "@/types";

export const SITE_CONFIG = {
  name: "Nitish Kumar",
  firstName: "NITISH",
  lastName: "KUMAR",
  initials: "NK",
  domain: "nitish.dev",
  title: "Nitish Kumar — Software Engineer",
  description:
    "Software Engineer building production React Native mobile apps and modern web experiences. Shipped Ulikme, BookYourHolistic, and contributed to Kundli Pro.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nitish.dev",
  ogImage: "/images/og-image.svg",
  resumeUrl: "https://drive.google.com/file/d/1CHTlYB8OOnFtb8w0kStM49DGPHK4gq5y/view?usp=drivesdk",
  role: "Full Stack Mobile Developer",
  location: "Delhi, India",
  status: "Open to new roles",
};

type IntroSegment = { text: string; accent?: "brand" | "fg" };

export const HERO_INTRO: IntroSegment[] = [
  { text: "I'm a " },
  { text: "Full Stack Mobile Developer", accent: "fg" },
  { text: " with expertise in " },
  { text: "React Native", accent: "brand" },
  { text: ", building " },
  { text: "high-performance applications", accent: "fg" },
  { text: " for iOS and Android. I enjoy creating " },
  { text: "clean, scalable, and user-focused products", accent: "fg" },
  { text: " while continuously expanding my skills in " },
  { text: "backend development, AWS, and DevOps", accent: "brand" },
  { text: ". I'm passionate about solving " },
  { text: "real-world problems", accent: "fg" },
  { text: " through technology and delivering " },
  { text: "production-ready software", accent: "brand" },
  { text: " with a great user experience." },
];

export const HERO_STATS = [
  {
    value: "3",
    label: "Apps Shipped",
    sub: "Play Store & App Store",
    color: "green" as const,
  },
  {
    value: "1+",
    label: "Year",
    sub: "Production experience",
    color: "blue" as const,
  },
  {
    value: "3",
    label: "Live Products",
    sub: "Ulikme · Holistic · Kundli",
    color: "green" as const,
  },
  {
    value: "2",
    label: "Companies",
    sub: "NOYT India · Abhiwan",
    color: "amber" as const,
  },
];

export const TERMINAL_LINES = [
  { type: "cmd" as const, text: "$ whoami" },
  { type: "out" as const, text: "→ Nitish Kumar — Software Engineer" },
  { type: "cmd" as const, text: "$ cat experience.txt" },
  { type: "out" as const, text: "→ NOYT India Pvt. Ltd.     [2025–Present]" },
  { type: "out" as const, text: "→ Abhiwan Technology       [Internship]" },
  { type: "cmd" as const, text: "$ ls ./projects/" },
  { type: "out" as const, text: "→ Ulikme.app" },
  { type: "out" as const, text: "→ BookYourHolistic.app" },
  { type: "out" as const, text: "→ KundliPro" },
  { type: "cmd" as const, text: "$ npx impact --show" },
  { type: "success" as const, text: "✓ 3 apps live on stores" },
  { type: "info" as const, text: "✓ React Native · TypeScript · Expo" },
];

export const ABOUT_BIO = `Software Engineer with 1+ year building production-grade React Native 
applications across HealthTech, dating, and astrology domains.

From fixing bugs on Kundli Pro at Abhiwan Technology to shipping Ulikme and BookYourHolistic 
at NOYT India — I've focused on real apps with real users on the Play Store and App Store.

Proficient in React Native, Expo, TypeScript, Next.js, and REST API integrations — with 
end-to-end iOS and Android deployment experience.`;

export const YEARS_OF_EXPERIENCE = 1;

export const ABOUT_HIGHLIGHTS = [
  {
    icon: "📱",
    title: "Cross-Platform Mobile",
    description:
      "React Native apps on App Store & Play Store — Ulikme, BookYourHolistic with full production deployment.",
  },
  {
    icon: "⚡",
    title: "Production Engineering",
    description:
      "Bug fixes and stability improvements on Kundli Pro — a live, production-level app on Play Store.",
  },
  {
    icon: "🏗️",
    title: "End-to-End Development",
    description:
      "UI screens, navigation, state management, API integration, and release-ready builds.",
  },
  {
    icon: "☁️",
    title: "Modern Web Stack",
    description:
      "Next.js, TypeScript, and Tailwind CSS for performant web experiences alongside mobile work.",
  },
];

export const MARQUEE_TECH = [
  "React Native", "Next.js", "TypeScript", "Expo", "Node.js",
  "MongoDB", "Tailwind CSS", "Firebase", "Redux Toolkit", "Zustand",
  "Express.js", "REST APIs", "Git", "React Navigation", "React",
];

export const CONTACT_INFO: ContactInfo = {
  email: "work.nitish19@gmail.com",
  phone: "+91 87097 95268",
  location: "Delhi, India",
};

export const SOCIAL_LINKS = [
  {
    name: "Email",
    href: "mailto:work.nitish19@gmail.com",
    icon: "mail",
    value: "work.nitish19@gmail.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/nitish4git",
    icon: "github",
    value: "github.com/nitish4git",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/er-nitish",
    icon: "linkedin",
    value: "in/er-nitish",
  },
];
