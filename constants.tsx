import React from 'react';
import { Home, User, Briefcase, Code, Mail, Layers } from 'lucide-react';
import { NavItem, Project, Experience, Skill } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home', icon: <Home size={20} /> },
  { name: 'About', href: '#about', icon: <User size={20} /> },
  { name: 'Skills', href: '#skills', icon: <Code size={20} /> },
  { name: 'Projects', href: '#projects', icon: <Layers size={20} /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
];

export const HERO_CONTENT = {
  name: "Khalid Ghalib",
  role: "Full Stack Developer",
  description: "4 years of experience building scalable web, mobile, and software systems using React.js, Next.js, Node.js, Django, and PostgreSQL. Specialized in creating high-performance, user-centered products with clean architecture.",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ebazar",
    description: "Full eCommerce Platform. Built a complete system with product management, cart, checkout, and order tracking. Features an admin dashboard for managing users and visualizing income analytics.",
    tags: ["React.js", "Django", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "TestNest",
    description: "Food Ordering System. Developed a food-ordering website allowing users to browse menus and place orders in real time. Includes an admin dashboard and server-side rendering for SEO.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "React.js"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "SaaS application leveraging Gemini API to generate marketing copy and blog posts.",
    tags: ["Next.js", "Gemini API", "TypeScript", "Stripe"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Social Connect",
    description: "A modern social media platform focusing on privacy and community building.",
    tags: ["React", "Firebase", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "Byte Render | Remote",
    period: "Jan. 2024 – Present",
    description: "Developed and maintained modern web applications using React.js, Next.js, and PostgreSQL. Integrated Cloudinary for media management and REST APIs. Implemented JWT authentication and collaborated with UI/UX designers.",
    skills: ["React.js", "Next.js", "PostgreSQL", "Cloudinary", "JWT"]
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "Code Alpha | Remote",
    period: "Jul. 2023 – Dec. 2023",
    description: "Contributed to multiple full-stack projects using React.js, Node.js, and Express. Learned and implemented Docker, Redux Toolkit, and MUI. Assisted in API design and database schema creation.",
    skills: ["Node.js", "Express", "Docker", "Redux Toolkit"]
  },
  {
    id: 3,
    role: "Bachelor of Computer Science",
    company: "Karwan University | Kabul",
    period: "5th Semester",
    description: "Coursework focused on Web Development, Database Design, Algorithms, AI Fundamentals, and Software Engineering.",
    skills: ["Algorithms", "AI", "Software Engineering"]
  }
];

export const SKILLS: Skill[] = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "backend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "other" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "other" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "other" },
];
