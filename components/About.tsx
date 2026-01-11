"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiServer } from "react-icons/fi";

const aboutCards = [
  {
    icon: FiCode,
    title: "Web Development",
    description: "Modern UI, scalable frontend & backend systems",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiServer,
    title: "DevOps",
    description: "CI/CD, cloud infrastructure, automation",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FiCpu,
    title: "AI Automation",
    description: "Workflow automation and AI-driven solutions",
    gradient: "from-violet-500 to-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center">
            I&apos;m a forward-thinking developer and systems architect
            specializing in full-stack development, DevOps automation, and
            AI-driven solutions. With a passion for creating elegant, scalable
            systems, I bridge the gap between complex infrastructure and
            intuitive user experiences. My work focuses on building robust
            applications that leverage cutting-edge technology while maintaining
            clean, maintainable code.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-xl p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-4 rounded-lg bg-linear-to-br ${card.gradient} mb-4`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
