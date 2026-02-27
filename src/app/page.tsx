"use client";

import Hero from "@/components/sections/home/Hero";
import Skills from "@/components/sections/home/Skills";
import Experience from "@/components/sections/home/Experience";
import Testimonials from "@/components/sections/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Testimonials />
    </main>
  );
}