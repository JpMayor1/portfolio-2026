import addressImage from "@/public/images/address.png";
import bccsImage from "@/public/images/bccs.png";
import convoTalkImage from "@/public/images/convotalk.png";
import ecommerceImage from "@/public/images/ecommerce.png";
import eLegislativeImage from "@/public/images/elegislative.png";
import exTrackImage from "@/public/images/extrack.png";
import fimanageImage from "@/public/images/fimanage.png";
import khoVeterinaryClinicMobileImage from "@/public/images/khoveterinaryclinicmobile.png";
import khoVeterinaryClinicWebImage from "@/public/images/khoveterinaryclinicweb.png";
import networkDocImage from "@/public/images/networkdoc.png";
import rmmsImage from "@/public/images/rmms.png";
import webSmashImage from "@/public/images/websmash.png";
import type { StaticImageData } from "next/image";

export type ProjectCategory = "Freelance" | "Work" | "Personal";

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  category: ProjectCategory;
  company?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  // Freelance Projects
  {
    id: "1",
    name: "Research Monitoring Management System (RMMS)",
    description:
      "A web-based system designed to manage and track student thesis and capstone projects from title proposal through defense. RMMS supports multiple roles—administrators, teachers, advisers, panelists, and researchers—and centralizes research records, progress tracking, and documentation for Chapters 1 to 4.",
    image: rmmsImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Freelance",
    github: "https://github.com/JpMayor1/rmms",
  },
  {
    id: "2",
    name: "WebSmash",
    description:
      "A web application that helps teachers monitor and manage students' badminton training progress. The platform provides separate accounts for teachers and students, allowing teachers to create structured training plans while students submit completed training videos. Teachers can then review the uploaded videos and provide feedback, comments, and improvement suggestions to support continuous skill development.",
    image: webSmashImage,
    technologies: ["JavaScript", "React", "Express.js", "MongoDB"],
    category: "Freelance",
    github: "https://github.com/JpMayor1/web-smash",
  },
  {
    id: "3",
    name: "Kho Veterinary Clinic (Web)",
    description:
      "A web-based management system that allows administrators to efficiently handle client appointments and maintain records of users and their pets. The platform centralizes scheduling and record management, helping streamline clinic operations and improve data organization.",
    image: khoVeterinaryClinicWebImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Freelance",
    github: "https://github.com/JpMayor1/khoveterinaryclinic",
  },
  {
    id: "4",
    name: "Kho Veterinary Clinic (Mobile)",
    description:
      "A mobile application that enables pet owners to manage their pets' records, book veterinary appointments, and place emergency calls directly to the doctor. Designed for convenience and accessibility, the app improves communication between clients and the veterinary clinic.",
    image: khoVeterinaryClinicMobileImage,
    technologies: ["TypeScript", "React Native", "Express.js", "MongoDB"],
    category: "Freelance",
    github: "https://github.com/JpMayor1/kho-veterinary-mobile",
  },
  // Work Projects
  {
    id: "5",
    name: "NetworkDoc",
    description:
      "An internal web application used to document and manage community network infrastructure such as CCTV, Wi-Fi, public address systems, and solar lights. The system allows administrators and project managers to track projects, manage equipment and tools, record installations and repairs, and visualize network locations on an interactive map. This helps teams maintain accurate records, monitor infrastructure status, and respond efficiently to maintenance needs.",
    image: networkDocImage,
    technologies: [
      "TypeScript",
      "React",
      "Express.js",
      "MongoDB",
      "Ubuntu",
      "Nginx",
    ],
    category: "Work",
    company: "Quantum Cloud Corporation",
  },
  {
    id: "6",
    name: "BCCS",
    description:
      "A web application that helps barangays automate previously manual processes. The system supports digital document management, social media content handling, and various administrative procedures, improving efficiency, organization, and day-to-day operations.",
    image: bccsImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Work",
    company: "Quantum Cloud Corporation",
  },
  {
    id: "7",
    name: "E-Legislative",
    description:
      "A web application that helps municipalities automate document tracking and other administrative processes. My contribution focused on developing AI-powered automation features to improve efficiency and streamline workflow management.",
    image: eLegislativeImage,
    technologies: ["n8n"],
    category: "Work",
    company: "Quantum Cloud Corporation",
  },
  {
    id: "8",
    name: "Address",
    description:
      "An internal web application developed to manage and maintain address data. This system serves as a foundation for future projects that require accurate and organized addressing information.",
    image: addressImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Work",
    company: "Quantum Cloud Corporation",
  },
  {
    id: "9",
    name: "ExTrack",
    description:
      "An internal web application to track and manage company expenses. The system helps maintain accurate financial records and simplifies expense monitoring for internal teams.",
    image: exTrackImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Work",
    company: "Quantum Cloud Corporation",
  },
  // Personal Projects
  {
    id: "10",
    name: "FiManage",
    description:
      "A personal web application that helps users manage their finances. The system allows users to track income, expenses, and overall financial health in a simple and organized way.",
    image: fimanageImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Personal",
    github: "https://github.com/JpMayor1/fimanage",
    demo: "https://fimanage.netlify.app",
  },
  {
    id: "11",
    name: "ConvoTalk",
    description:
      "A web application that enables real-time chatting and video calls. The platform allows users to communicate instantly through messages and video, providing a seamless and interactive communication experience.",
    image: convoTalkImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Personal",
    github: "https://github.com/JpMayor1/ConvoTalk",
  },
  {
    id: "12",
    name: "E-commerce",
    description:
      "A web application designed for online shopping, allowing users to browse products, add items to their cart, and complete purchases. The platform provides a streamlined and interactive shopping experience.",
    image: ecommerceImage,
    technologies: ["TypeScript", "React", "Express.js", "MongoDB"],
    category: "Personal",
    github: "https://github.com/JpMayor1/MERN-E-commerce-vite",
  },
];
