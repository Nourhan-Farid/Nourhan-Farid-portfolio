export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  transitionStory: string;
  languages: { language: string; proficiency: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  responsibilities: string[];
  techStack: string[];
}

export interface FeaturedProjectData {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  technologies: string[];
  overview: string;
  features: string[];
  uiUxConsiderations: string[];
  technicalImplementation: string[];
  performanceConsiderations: string[];
  highlights: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  association: string;
  period: string;
  description: string;
  technologies: string[];
  category: 'React' | 'JavaScript' | 'Responsive Web';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  relevanceNote?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  topics: string[];
  badgeColor?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Nourhan Farid",
  role: "Junior Front-End Developer",
  email: "nourhanfarid883@gmail.com",
  phone: "01070672730",
  location: "Cairo, Egypt",
  summary:
    "Front-End Developer with a strong eye for design and expertise in Tailwind CSS, Material UI, and Figma. Experienced in translating complex requirements into intuitive, mobile-first interfaces. Dedicated to creating visually appealing, accessible, and recruiter-friendly portfolios that balance aesthetics with functionality.",
  transitionStory:
    "With a Bachelor's Degree in Physics from Ain Shams University, I developed strong analytical thinking, mathematical problem-solving skills, and a methodical approach to complex systems. I channeled this foundation into front-end engineering, mastering modern JavaScript, React, and component architecture to build dependable, accessible, and high-performance digital interfaces.",
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Professional Working Proficiency" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Core Technologies",
    description: "Foundational web standards and language semantics",
    icon: "code",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    description: "Component architecture and modern client-side ecosystems",
    icon: "layers",
    skills: ["React", "Next.js", "React Query", "jQuery"],
  },
  {
    category: "Styling & UI",
    description: "Design systems, utility-first CSS, and visual prototyping",
    icon: "palette",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Material UI (MUI)",
      "Sass",
      "Figma",
      "Adobe XD",
    ],
  },
  {
    category: "Responsive & Modern Design",
    description: "Mobile-first layouts, accessibility standards, and UX fidelity",
    icon: "smartphone",
    skills: [
      "Mobile-first development",
      "Accessibility standards",
      "Cross-browser compatibility",
      "UI/UX principles",
    ],
  },
  {
    category: "State Management & APIs",
    description: "Predictable application data flow and RESTful data integration",
    icon: "database",
    skills: ["Context API", "CRUD operations", "REST APIs", "Redux"],
  },
  {
    category: "Soft Skills & Execution",
    description: "Collaborative mindset, engineering rigor, and execution speed",
    icon: "users",
    skills: [
      "Problem-solving",
      "Time management",
      "Effective communication",
      "Teamwork",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "route-academy",
    role: "Front-End Trainee",
    company: "Route Academy",
    period: "March 2024 – September 2024",
    type: "Intensive Program",
    responsibilities: [
      "Developed a Bookmark Application with full CRUD functionality for efficient data storage and retrieval.",
      "Built Daniel’s Portfolio using modern UI/UX principles and responsive design.",
      "Created a React + Tailwind CSS E-commerce Website using Context API for cart and product state management.",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Context API"],
  },
  {
    id: "codealpha",
    role: "Front-End Intern",
    company: "CodeAlpha",
    period: "September 2024 – October 2024",
    type: "Internship",
    responsibilities: [
      "Designed and deployed an Interactive Image Gallery with dynamic filtering and smooth transitions.",
      "Built a Simple Calculator with real-time functionality using JavaScript.",
      "Developed a Personal Portfolio demonstrating front-end framework skills with responsive and recruiter-friendly design.",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "UI Transitions"],
  },
  {
    id: "cognorise",
    role: "Front-End Intern",
    company: "CognoRise InfoTech",
    period: "November 2024 – December 2024",
    type: "Internship",
    responsibilities: [
      "Created a Quiz App with interactive features and state management.",
      "Developed a To-Do App using React state management.",
      "Implemented a Static Website optimized for performance and cross-browser compatibility.",
    ],
    techStack: ["React", "JavaScript (ES6+)", "State Management", "Performance Optimization"],
  },
];

export const featuredProject: FeaturedProjectData = {
  id: "shopifya-ecommerce",
  title: "Shopifya — E-commerce Website",
  subtitle: "Comprehensive e-commerce client handling dynamic catalog, persistent shopping cart, and REST APIs",
  period: "March 2024 – September 2024",
  role: "Lead Front-End Developer (Route Academy Project)",
  technologies: ["React.js", "Tailwind CSS", "REST APIs", "Context API", "JavaScript (ES6+)"],
  overview:
    "Shopifya is a modern, fully responsive e-commerce web application engineered to handle real-world catalog workflows. The platform integrates REST APIs to fetch, search, filter, and manage 100+ dynamic products while maintaining seamless client-side state for the shopping cart and checkout pipeline.",
  highlights: [
    { label: "Catalog Scale", value: "100+ Products Handled" },
    { label: "State Architecture", value: "Context API + Cart Persistence" },
    { label: "Layout Strategy", value: "100% Mobile-First Responsive" },
    { label: "Accessibility", value: "ARIA Semantics & Keyboard Flow" },
  ],
  features: [
    "Fully responsive e-commerce platform across mobile, tablet, and desktop viewports",
    "Dynamic routing architecture for frictionless category and product navigation",
    "Comprehensive shopping cart functionality with live quantity adjustments and item removal",
    "Direct REST API integration providing synchronized product listings and live updates",
    "Real-time product search with instant client-side query matching",
    "Multi-parameter product filtering by categories, price ranges, and ratings",
    "Engineered to seamlessly handle listings of 100+ items without layout shifting or interface lag",
    "Mobile-first design system with touch-friendly controls and sticky action bars",
    "Accessibility considerations with semantic tags, focus indicators, and screen-reader readiness",
    "Performance optimization through lazy loading, decoupled renders, and minimal re-render cycles",
    "State-management improvements utilizing Context API to eliminate prop-drilling",
  ],
  uiUxConsiderations: [
    "Intuitive shopping journey: From initial search and instant filtering to one-click cart additions.",
    "Mobile-first navigation: Collapsible responsive drawer, sticky bottom controls, and fluid touch targets.",
    "Visual feedback: Clear loading states, empty cart visual prompts, and interactive badge counters.",
    "Clarity and contrast: Strict compliance with WCAG standards for legible product pricing and descriptions.",
  ],
  technicalImplementation: [
    "Component architecture: Reusable ProductCard, FilterBar, CartDrawer, and SearchInput components.",
    "State management: Centralized CartContext for cart synchronization and local storage persistence.",
    "API handling: Modular service layer consuming REST endpoints with error handling and fallback states.",
    "Styling: Configured custom Tailwind utility classes to guarantee consistent spacing, colors, and elevations.",
  ],
  performanceConsiderations: [
    "Optimized render cycles: Memoized selectors and isolated cart updates preventing widespread re-renders.",
    "Image and asset optimization: Layout stability with explicit aspect ratios to prevent layout shifts (CLS).",
    "Lightweight bundle: Built without bulky external dependencies to ensure fast initial page loads.",
  ],
};

export const otherProjects: ProjectItem[] = [
  {
    id: "bookmark-app",
    title: "Bookmark Application",
    association: "Route Academy",
    period: "March 2024 – September 2024",
    category: "JavaScript",
    description:
      "Developed a Bookmark Application with full CRUD functionality for efficient data storage and retrieval. Features input validation, URL structure verification, and persistent local storage.",
    technologies: ["JavaScript (ES6+)", "CRUD Operations", "HTML5", "CSS3", "Local Storage"],
  },
  {
    id: "daniels-portfolio",
    title: "Daniel’s Portfolio",
    association: "Route Academy",
    period: "March 2024 – September 2024",
    category: "Responsive Web",
    description:
      "Built Daniel’s Portfolio using modern UI/UX principles and responsive design. Emphasizes clean typography, responsive layout breakpoints, and subtle interactive transitions.",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Principles", "Responsive Design"],
  },
  {
    id: "interactive-gallery",
    title: "Interactive Image Gallery",
    association: "CodeAlpha",
    period: "September 2024 – October 2024",
    category: "JavaScript",
    description:
      "Designed and deployed an Interactive Image Gallery with dynamic filtering and smooth transitions. Enables users to explore categorized collections with instantaneous visual feedback.",
    technologies: ["JavaScript", "CSS Transitions", "Dynamic Filtering", "Responsive Grid"],
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator",
    association: "CodeAlpha",
    period: "September 2024 – October 2024",
    category: "JavaScript",
    description:
      "Built a Simple Calculator with real-time functionality using JavaScript. Features clean arithmetic parsing, error prevention for invalid inputs, and a tactile keypad interface.",
    technologies: ["JavaScript (ES6+)", "DOM Manipulation", "CSS Grid", "Event Handling"],
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    association: "CognoRise InfoTech",
    period: "November 2024 – December 2024",
    category: "React",
    description:
      "Created a Quiz App with interactive features and state management. Implements question progression logic, immediate answer scoring, and an end-of-round performance summary.",
    technologies: ["React", "State Management", "Component Architecture", "Tailwind CSS"],
  },
  {
    id: "todo-app",
    title: "To-Do App",
    association: "CognoRise InfoTech",
    period: "November 2024 – December 2024",
    category: "React",
    description:
      "Developed a To-Do App using React state management. Provides task creation, status toggles, deletion, and filtering by completion state in a clean, minimal interface.",
    technologies: ["React", "React Hooks", "State Management", "Tailwind CSS"],
  },
  {
    id: "static-website",
    title: "Static Website",
    association: "CognoRise InfoTech",
    period: "November 2024 – December 2024",
    category: "Responsive Web",
    description:
      "Implemented a Static Website optimized for performance and cross-browser compatibility. Followed strict semantic HTML structures and accessible styling guidelines.",
    technologies: ["HTML5", "CSS3", "Cross-browser Compatibility", "Performance Optimization"],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor’s Degree in Physics",
    institution: "Ain Shams University",
    period: "2018 – 2022",
    description:
      "Developed analytical and problem-solving skills that can be applied to front-end engineering and debugging complex UI challenges.",
    relevanceNote:
      "Analytical mindset, mathematical rigor, and systematic troubleshooting applied directly to UI state logic and responsive design.",
  },
  {
    degree: "Frontend Development Diploma",
    institution: "Route Academy",
    period: "March 2024 – September 2024",
    description:
      "Intensive practical diploma covering React, Next.js, TypeScript, modern UI frameworks, and hands-on e-commerce and portfolio projects.",
    highlights: [
      "React & Next.js component ecosystems",
      "TypeScript type safety in modern web apps",
      "Modern UI frameworks (Tailwind CSS, Material UI, Bootstrap)",
      "Hands-on e-commerce and responsive portfolio projects",
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Responsive Web Design Certification",
    issuer: "FreeCodeCamp",
    topics: [
      "Mobile-first design",
      "Accessibility standards",
      "Cross-browser compatibility",
      "CSS Grid & Flexbox mastery",
    ],
    badgeColor: "emerald",
  },
  {
    title: "React.js Certification",
    issuer: "Mahara-Tech",
    topics: [
      "Scalable React applications",
      "State management & Hooks",
      "API integration",
      "Component lifecycle & rendering",
    ],
    badgeColor: "cyan",
  },
];
