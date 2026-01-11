"use client";

import { motion } from "framer-motion";
import {
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";
import {
  CursorIcon,
  FramerMotionIcon,
  N8nIcon,
  VSCodeIcon,
  ZustandIcon,
} from "./icons/DevIcon";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Zustand", icon: ZustandIcon },
  { name: "Framer Motion", icon: FramerMotionIcon },
  { name: "Figma", icon: SiFigma },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "VS Code", icon: VSCodeIcon },
  { name: "Cursor", icon: CursorIcon },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Trello", icon: SiTrello },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Linux", icon: SiLinux },
  { name: "Ubuntu", icon: SiUbuntu },
  { name: "Nginx", icon: SiNginx },
  { name: "n8n", icon: N8nIcon },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 glass rounded-xl group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                <skill.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-300 group-hover:text-purple-400 transition-colors" />
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 group-hover:text-gray-200 transition-colors text-center font-medium">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
