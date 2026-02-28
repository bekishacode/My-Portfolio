"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectStatsProps {
  projects: Project[];
}

export default function ProjectStats({ projects }: ProjectStatsProps) {
  const stats = [
    {
      label: "Total Projects",
      value: projects.length,
      icon: "📊",
    },
    {
      label: "Integrations",
      value: projects.filter(p => p.category === "integration").length,
      icon: "🔗",
    },
    {
      label: "LWC Components",
      value: projects.filter(p => p.category === "lwc").length,
      icon: "⚡",
    },
    {
      label: "Salesforce Features",
      value: projects.filter(p => p.category === "salesforce").length,
      icon: "☁️",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card rounded-xl p-6 text-center border border-border"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-primary">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}