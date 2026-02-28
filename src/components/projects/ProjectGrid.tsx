"use client";

import { useState } from "react";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectStats from "./ProjectStats";
import { motion } from "framer-motion";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = Array.from(new Set(projects.map(p => p.category)));
  
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          A collection of Salesforce implementations, integrations, and custom 
          developments for Bank of Abyssinia and other clients.
        </p>
      </div>

      {/* Stats */}
      <ProjectStats projects={projects} />

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <ProjectFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-lg text-muted-foreground">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}