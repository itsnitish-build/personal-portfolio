export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  value?: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export type ProjectCategory = "all" | "mobile" | "web" | "fullstack";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Exclude<ProjectCategory, "all">;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
