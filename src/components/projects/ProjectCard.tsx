"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { 
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  UserIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors = {
  salesforce: "from-blue-500 to-cyan-500",
  integration: "from-purple-500 to-pink-500",
  lwc: "from-green-500 to-emerald-500",
  api: "from-orange-500 to-red-500",
};

const categoryBadgeColors = {
  salesforce: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  integration: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  lwc: "bg-green-500/10 text-green-500 border-green-500/20",
  api: "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Subtle 3D tilt (reduced intensity)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [3, -3]); // Reduced from 10 to 3
  const rotateY = useTransform(x, [-100, 100], [-3, 3]); // Reduced from 10 to 3

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: mouseX, y: mouseY });
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animate(x, 0, { duration: 0.3 });
    animate(y, 0, { duration: 0.3 });
  };

  // Subtle floating animation (reduced movement)
  const floatingAnimation = {
    y: [0, -3, 0], // Reduced from -5 to -3
    transition: {
      duration: 4, // Slower animation
      repeat: Infinity,
      repeatDelay: 2 ,
      type: "tween" as const,  // Use "as const" for type
      ease: "linear" as const
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.01 }} // Reduced from 1.02 to 1.01
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
    >
      {/* Subtle gradient background (reduced opacity) */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, ${project.category === 'salesforce' ? 'rgba(59, 130, 246, 0.08)' : project.category === 'integration' ? 'rgba(168, 85, 247, 0.08)' : 'rgba(34, 197, 94, 0.08)'}, transparent 50%)`,
        }}
      />

      {/* Subtle glow (smaller, less intense) */}
      <motion.div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 blur-2xl"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          type: "tween" as const,  // Use "as const" for type
          ease: "linear" as const
        }}
        style={{
          background: `radial-gradient(circle, ${project.category === 'salesforce' ? '#3b82f6' : project.category === 'integration' ? '#a855f7' : '#22c55e'}, transparent 70%)`,
        }}
      />

      {/* Image Container - subtle zoom (reduced) */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.03 : 1, // Reduced from 1.1 to 1.03
          }}
          transition={{ duration: 0.5 }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority={index < 3}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${categoryColors[project.category]}`}>
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            </div>
          )}
        </motion.div>

        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-card/20 to-transparent" />

        {/* Category Badge - subtle entrance */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="absolute top-4 right-4 z-10"
        >
          <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${categoryBadgeColors[project.category]}`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </motion.div>

        {/* Featured Badge with subtle float */}
        {project.featured && (
          <motion.div
            animate={floatingAnimation}
            className="absolute top-4 left-4 z-10"
          >
            <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/20 backdrop-blur-sm">
              <SparklesIcon className="w-3 h-3" />
              Featured
            </span>
          </motion.div>
        )}

        {/* Project Stats - cleaner design */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs text-white/80"
        >
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
            <CalendarIcon className="w-3 h-3" />
            {project.completionDate}
          </span>
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
            <BuildingOfficeIcon className="w-3 h-3" />
            {project.client}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10">
        {/* Title with subtle gradient on hover */}
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies - clean chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-muted/50 rounded-md text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-muted/50 rounded-md text-xs text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Role */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <UserIcon className="w-3.5 h-3.5" />
          <span className="font-medium text-foreground/80">Role:</span>
          <span>{project.role}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/40">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View Details
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Subtle bottom accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
}