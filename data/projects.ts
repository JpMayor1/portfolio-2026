export type ProjectCategory = "Freelance" | "Work" | "Personal";

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "/project-placeholder.jpg",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Freelance",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://demo.example.com",
  },
  {
    id: "2",
    name: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    category: "Work",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-demo.example.com",
  },
  {
    id: "3",
    name: "AI Content Generator",
    description: "AI-powered content generation tool with multiple templates and export options.",
    image: "/project-placeholder.jpg",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Framer Motion"],
    category: "Personal",
    github: "https://github.com/yourusername/ai-content-generator",
    demo: "https://ai-demo.example.com",
  },
  {
    id: "4",
    name: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations and dark theme.",
    image: "/project-placeholder.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Personal",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio.example.com",
  },
  {
    id: "5",
    name: "Cloud Infrastructure Dashboard",
    description: "DevOps dashboard for monitoring and managing cloud infrastructure with automated deployments.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "Docker", "Kubernetes", "AWS", "GraphQL"],
    category: "Work",
    github: "https://github.com/yourusername/cloud-dashboard",
  },
  {
    id: "6",
    name: "Restaurant Booking System",
    description: "Online reservation system for restaurants with table management and customer notifications.",
    image: "/project-placeholder.jpg",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Resend", "Stripe"],
    category: "Freelance",
    github: "https://github.com/yourusername/restaurant-booking",
    demo: "https://booking.example.com",
  },
];