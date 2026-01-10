"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 text-sm"
        >
          © 2026 James Phillip A. Mayor. Made with ❤️ and {"</>"}
        </motion.p>
      </div>
    </footer>
  );
}