"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8"><span className="text-primary">About</span> Me</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">
            This is my about page. I'm a Salesforce developer with expertise in...
          </p>
          {/* Add your content here */}
        </div>
      </motion.div>
    </div>
  );
}