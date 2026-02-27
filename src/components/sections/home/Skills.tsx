"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/data/skills";
import { fadeInUp, staggerContainer } from "../../../utils/animations";
import SectionTitle from "../../ui/SectionTitle";

const categoryTitles = {
  salesforce: "Salesforce Expertise",
  frontend: "Frontend Development",
  tools: "Tools & Technologies"
};

// Fix 1: Properly typed skill card variants
const skillCardVariants: Variants = {
  initial: { 
    y: 0,
    scale: 1
    // boxShadow is handled via className, not animation
  },
  hover: { 
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring" as const,  // Use const assertion
      stiffness: 300,
      damping: 20
    }
  }
};

// Fix 2: Properly typed skill item variants
const skillItemVariants: Variants = {
  initial: { x: 0 },
  hover: { 
    x: 5,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  }
};

export default function Skills() {
  const salesforceSkills = skills.filter(s => s.category === 'salesforce');
  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const toolsSkills = skills.filter(s => s.category === 'tools');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Salesforce Skills Card */}
          <motion.div
            variants={skillCardVariants}
            initial="initial"
            whileHover="hover"
            className="bg-card rounded-xl p-6 shadow-lg border border-border relative overflow-hidden group"
            style={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)" }} // Move boxShadow to style
          >
            {/* Animated background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <h3 className="text-2xl font-bold mb-6 text-primary relative z-10">
              {categoryTitles.salesforce}
            </h3>
            <div className="space-y-4 relative z-10">
              {salesforceSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillItemVariants}
                  whileHover="hover"
                  className="cursor-default"
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-primary h-2.5 rounded-full relative"
                    >
                      {/* Shine effect on hover - simplified */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ 
                          x: ['-100%', '200%']
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatDelay: 1,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frontend Skills Card */}
          <motion.div
            variants={skillCardVariants}
            initial="initial"
            whileHover="hover"
            className="bg-card rounded-xl p-6 shadow-lg border border-border relative overflow-hidden group"
            style={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <h3 className="text-2xl font-bold mb-6 text-accent relative z-10">
              {categoryTitles.frontend}
            </h3>
            <div className="space-y-4 relative z-10">
              {frontendSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillItemVariants}
                  whileHover="hover"
                  className="cursor-default"
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground group-hover:text-accent/80 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-accent h-2.5 rounded-full relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ 
                          x: ['-100%', '200%']
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatDelay: 1,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Skills Card */}
          <motion.div
            variants={skillCardVariants}
            initial="initial"
            whileHover="hover"
            className="bg-card rounded-xl p-6 shadow-lg border border-border relative overflow-hidden group"
            style={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <h3 className="text-2xl font-bold mb-6 text-purple-500 relative z-10">
              {categoryTitles.tools}
            </h3>
            <div className="space-y-4 relative z-10">
              {toolsSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillItemVariants}
                  whileHover="hover"
                  className="cursor-default"
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium group-hover:text-purple-500 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground group-hover:text-purple-500/80 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-purple-500 h-2.5 rounded-full relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ 
                          x: ['-100%', '200%']
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatDelay: 1,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}