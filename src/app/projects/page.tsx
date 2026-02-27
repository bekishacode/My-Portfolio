"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">My <span className="text-primary">Projects</span></h1>
        <p className="text-muted-foreground">Coming soon...</p>
      </motion.div>
    </div>
  );
}