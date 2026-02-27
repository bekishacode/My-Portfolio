"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8"><span className="text-primary">Contact</span> Me</h1>
        <p className="text-muted-foreground">Coming soon...</p>
      </motion.div>
    </div>
  );
}