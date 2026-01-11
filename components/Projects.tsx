"use client";

import type { Project } from "@/data/projects";
import { projects, type ProjectCategory } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const categories: ProjectCategory[] = ["Freelance", "Work", "Personal"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All"
  );
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            Projects
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(["All", ...categories] as const).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "glass text-gray-300 hover:text-purple-400 hover:border-purple-400/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass rounded-xl overflow-hidden group cursor-pointer relative"
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-linear-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Project Image</div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {project.name}
          </h3>
          <span className="px-2 py-1 text-xs font-medium rounded bg-purple-600/20 text-purple-300 border border-purple-500/30">
            {project.category}
          </span>
        </div>

        {project.company && (
          <p className="text-gray-500 text-xs mb-2 font-medium">
            {project.company}
          </p>
        )}

        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded bg-blue-600/20 text-blue-300 border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded bg-gray-600/20 text-gray-400 border border-gray-500/30">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiExternalLink className="w-5 h-5" />
              <span className="text-sm">Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
