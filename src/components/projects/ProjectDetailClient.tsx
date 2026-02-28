"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { 
  ArrowLeftIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  UserIcon,
  CodeBracketIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  LinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

interface ProjectDetailClientProps {
  project: Project;
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Use main image and any additional images
  const projectImages = [
    project.image,
    ...(project.images || []),
  ].filter(Boolean);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isAutoPlaying && projectImages.length > 1) {
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1; // 1% every 50ms = 5 seconds for full cycle
        });
      }, 50);

      // Image change interval (every 5 seconds)
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
        setProgress(0);
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, projectImages.length]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    setProgress(0);
    // Pause auto-play temporarily when manually navigating
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    setProgress(0);
    // Pause auto-play temporarily when manually navigating
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setProgress(0);
    // Pause auto-play temporarily when manually navigating
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setProgress(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.div
          variants={slideInFromLeft}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </motion.div>
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl"
            variants={fadeInUp}
          >
            {project.shortDescription}
          </motion.p>
        </motion.div>

        {/* Image Gallery with Auto-play */}
        {projectImages.length > 0 && (
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="mb-12"
          >
            <motion.div 
              className="relative h-[500px] rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={projectImages[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Gradient Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Auto-play Progress Bar */}
              {projectImages.length > 1 && isAutoPlaying && (
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-white/30 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div 
                    className="h-full bg-primary"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                  />
                </motion.div>
              )}

              {/* Navigation Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevious}
                  className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                {/* Image Counter */}
                {projectImages.length > 1 && (
                  <motion.div 
                    className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentImageIndex + 1} / {projectImages.length}
                  </motion.div>
                )}

                {/* Auto-play Toggle */}
                {projectImages.length > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleAutoPlay}
                    className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-primary transition-colors"
                  >
                    {isAutoPlaying ? (
                      <PauseIcon className="w-4 h-4" />
                    ) : (
                      <PlayIcon className="w-4 h-4" />
                    )}
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* Thumbnails */}
            {projectImages.length > 1 && (
              <motion.div 
                className="flex gap-2 mt-4 overflow-x-auto pb-2"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {projectImages.map((img, idx) => (
                  <motion.button
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                      currentImageIndex === idx ? 'ring-2 ring-primary shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    {currentImageIndex === idx && (
                      <motion.div 
                        className="absolute inset-0 bg-primary/20"
                        layoutId="thumbnailHighlight"
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Rest of your component remains exactly the same... */}
        {/* Project Info Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            { icon: BuildingOfficeIcon, label: "Client", value: project.client, delay: 0.2, color: "text-blue-500" },
            { icon: UserIcon, label: "My Role", value: project.role, delay: 0.3, color: "text-green-500" },
            { icon: CalendarIcon, label: "Completed", value: project.completionDate, delay: 0.4, color: "text-purple-500" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className={`w-6 h-6 ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
              </motion.div>
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-muted-foreground">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Description */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <motion.h2 
            className="text-2xl font-bold mb-4 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <DocumentTextIcon className="w-6 h-6 text-primary" />
            Project Overview
          </motion.h2>
          <motion.div 
            className="prose prose-lg dark:prose-invert max-w-none"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <motion.h2 
            className="text-2xl font-bold mb-4 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <CodeBracketIcon className="w-6 h-6 text-primary" />
            Technologies Used
          </motion.h2>
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Challenges, Solutions, Results Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Challenges */}
          <motion.div
            variants={slideInFromLeft}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-red-500/30 transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <LightBulbIcon className="w-6 h-6 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
            </motion.div>
            <h3 className="font-semibold mb-3">Challenges</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, i) => (
                <motion.li 
                  key={i} 
                  className="text-sm text-muted-foreground flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (i * 0.1) }}
                  whileHover={{ x: 5, color: "hsl(var(--foreground))" }}
                >
                  <span className="text-red-500 mt-1">•</span>
                  {challenge}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-green-500/30 transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircleIcon className="w-6 h-6 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
            </motion.div>
            <h3 className="font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2">
              {project.solutions.map((solution, i) => (
                <motion.li 
                  key={i} 
                  className="text-sm text-muted-foreground flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ x: 5, color: "hsl(var(--foreground))" }}
                >
                  <span className="text-green-500 mt-1">✓</span>
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            variants={slideInFromRight}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-blue-500/30 transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <ChartBarIcon className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
            </motion.div>
            <h3 className="font-semibold mb-3">Results</h3>
            <ul className="space-y-2">
              {project.results.map((result, i) => (
                <motion.li 
                  key={i} 
                  className="text-sm text-muted-foreground flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + (i * 0.1) }}
                  whileHover={{ x: 5, color: "hsl(var(--foreground))" }}
                >
                  <span className="text-blue-500 mt-1">★</span>
                  {result}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Live Demo Link */}
        {project.liveUrl && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="text-center"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              <LinkIcon className="w-4 h-4" />
              View Live Project
            </motion.a>
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          className="fixed -z-10 top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="fixed -z-10 bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </motion.div>
  );
}