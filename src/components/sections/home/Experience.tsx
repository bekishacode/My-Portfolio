"use client";

import { motion, Variants } from "framer-motion";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer, slideInFromLeft } from "../../../utils/animations";
import SectionTitle from "../../ui/SectionTitle";
import { sectionBackgrounds } from "@/config/sectionBackgrounds";

// Fix: Add Variants type and as const
const experienceCardVariants: Variants = {
  initial: { 
    scale: 1
    // boxShadow removed from variants
  },
  hover: { 
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
};

// Fix: Replace yoyo with repeat and repeatType
const dotPulseVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.5,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }
};

// Use experience background from about section
const sectionBg = sectionBackgrounds.about.experience;

export default function Experience() {
  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey in Salesforce development"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={slideInFromLeft}
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              {/* Timeline line with hover effect */}
              {index < experiences.length - 1 && (
                <motion.div 
                  className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border"
                  whileHover={{ 
                    backgroundColor: "hsl(var(--primary))",
                    width: "2px"
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Timeline dot with pulse animation on hover */}
              <motion.div
                className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-background cursor-pointer"
                variants={dotPulseVariants}
                initial="initial"
                whileHover="hover"
              />
              
              {/* Experience Card - boxShadow moved to style prop */}
              <motion.div
                variants={experienceCardVariants}
                initial="initial"
                whileHover="hover"
                className="bg-card rounded-xl p-6 shadow-lg border border-border relative overflow-hidden"
                style={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)" }}
              >
                {/* Animated corner effect on hover */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <motion.h3 
                      className="text-xl font-bold group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {exp.position}
                    </motion.h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <motion.span 
                    className="px-3 py-1 bg-muted rounded-full text-sm group-hover:bg-primary/10 group-hover:text-primary transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </motion.span>
                </div>

                <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0.8 }}
                      whileHover={{ 
                        opacity: 1,
                        x: 5,
                        color: "hsl(var(--foreground))"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded-md text-xs font-medium cursor-default"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "hsl(var(--primary))",
                        color: "white"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}