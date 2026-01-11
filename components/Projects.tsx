"use client";

import type { Project } from "@/data/projects";
import { projects, type ProjectCategory } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiImage, FiX } from "react-icons/fi";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Close modal on ESC key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

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
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {(["All", ...categories] as const).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
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
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  // Get image source - handle both StaticImageData and string paths
  const getImageSrc = (image: string | StaticImageData): string => {
    if (typeof image === "string") {
      return image;
    }
    return image.src;
  };

  const imageSrc = getImageSrc(project.image);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      className="glass rounded-xl overflow-hidden group cursor-pointer relative"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-linear-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
        {imageSrc && !imageError ? (
          <Image
            src={imageSrc}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-sm">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-purple-600/20 to-transparent animate-pulse" />

            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <FiImage className="w-12 h-12 text-purple-300/70 mb-3" />
            </motion.div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm font-medium text-gray-300/80 relative z-10"
            >
              {project.name}
            </motion.p>

            {/* Decorative dots */}
            <div
              className="absolute top-4 left-4 w-2 h-2 bg-purple-400/50 rounded-full animate-ping"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute bottom-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-pink-400/50 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            />
          </div>
        )}
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
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

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  if (!project) return null;

  // Get image source - handle both StaticImageData and string paths
  const getImageSrc = (image: string | StaticImageData): string => {
    if (typeof image === "string") {
      return image;
    }
    return image.src;
  };

  const imageSrc = getImageSrc(project.image);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Project Image */}
          <div className="relative h-64 sm:h-80 bg-linear-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
            {imageSrc && !imageError ? (
              <Image
                src={imageSrc}
                alt={project.name}
                fill
                className="object-cover"
                sizes="100vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-purple-600/20 to-transparent animate-pulse" />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <FiImage className="w-16 h-16 text-purple-300/70 mb-3" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-base font-medium text-gray-300/80 relative z-10"
                >
                  {project.name}
                </motion.p>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {project.name}
              </h3>
              <span className="px-3 py-1 text-sm font-medium rounded bg-purple-600/20 text-purple-300 border border-purple-500/30">
                {project.category}
              </span>
            </div>

            {project.company && (
              <p className="text-gray-400 text-sm mb-4 font-medium">
                {project.company}
              </p>
            )}

            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm rounded bg-blue-600/20 text-blue-300 border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub className="w-6 h-6" />
                  <span>GitHub</span>
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-6 h-6" />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
