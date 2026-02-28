"use client";

import { motion, Variants } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { fadeInUp, staggerContainer } from "../../../utils/animations";
import SectionTitle from "../../ui/SectionTitle";
import { sectionBackgrounds } from "@/config/sectionBackgrounds";

// Fix: Add Variants type and as const
const testimonialCardVariants: Variants = {
  initial: { 
    y: 0,
    scale: 1,
    rotateZ: 0
    // boxShadow removed
  },
  hover: { 
    y: -15,
    scale: 1.03,
    rotateZ: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 15
    }
  }
};

// Fix: Add Variants type
const quoteVariants: Variants = {
  initial: { scale: 0.8, opacity: 0.3 },
  hover: { 
    scale: 1.2, 
    opacity: 1,
    rotateZ: 5,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
};

// Star rating animation - this one is fine as is
const starVariants = {
  initial: { scale: 1 },
  hover: (i: number) => ({
    scale: [1, 1.3, 1],
    rotateZ: [0, 10, -10, 0],
    transition: {
      delay: i * 0.05,
      duration: 0.5
    }
  })
};

// Use skills background from config
const sectionBg = sectionBackgrounds.home.testimonials;

export default function Testimonials() {
  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Recommendations" 
          subtitle="What colleagues and clients say about my work"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialCardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-card rounded-xl p-6 shadow-lg border border-border relative overflow-hidden group"
              style={{ 
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)",
                originY: 0 
              }}
            >
              {/* Background pattern on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10"
                initial={false}
                whileHover={{
                  background: "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
                  opacity: 0.1
                }}
              />

              {/* Quote mark */}
              <motion.div
                className="absolute top-4 right-4 text-6xl text-primary/20 font-serif"
                variants={quoteVariants}
                initial="initial"
                whileHover="hover"
              >
                "
              </motion.div>

              {/* Rating stars with hover animation */}
              <motion.div 
                className="flex gap-1 mb-4 relative z-10"
                whileHover="hover"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    custom={i}
                    variants={starVariants}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-muted'
                    } cursor-pointer`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </motion.div>

              {/* Testimonial content */}
              <motion.p 
                className="text-muted-foreground mb-6 italic relative z-10"
                whileHover={{ 
                  scale: 1.02,
                  color: "hsl(var(--foreground))" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                "{testimonial.content}"
              </motion.p>

              {/* Author info with hover effect */}
              <motion.div 
                className="flex items-center gap-3 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden"
                  whileHover={{ 
                    scale: 1.2,
                    backgroundColor: "hsl(var(--primary))",
                    color: "white"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <span className="text-primary font-bold group-hover:text-white transition-colors">
                    {testimonial.name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <motion.p 
                    className="font-semibold"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    {testimonial.name}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </motion.div>

              {/* Bottom highlight on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}