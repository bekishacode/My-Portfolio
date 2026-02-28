"use client";

import { motion } from "framer-motion";

interface ProjectFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilters({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedCategory === "all"
            ? "bg-primary text-primary-foreground"
            : "bg-muted hover:bg-muted/80 text-foreground"
        }`}
      >
        All Projects
      </motion.button>
      
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.button>
      ))}
    </div>
  );
}