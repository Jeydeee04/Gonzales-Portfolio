"use client";

import { useState, useEffect } from "react";
import ProjectCard from "../projectCard";
import { projects } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import ScrollReveal from "../scrollReveal";

export default function ProjectPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalProjects = projects.length;

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Optional: Enable left/right keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:py-24"
    >
      {/* Animated Container for Smooth Page Transitions */}
      <ScrollReveal className="flex w-full max-w-5xl flex-col items-center gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ProjectCard {...projects[currentPage]} />
          </motion.div>
        </AnimatePresence>

        {/* Pagination Bar */}
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-zinc-200/80 shadow-sm">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="p-1.5 rounded-full text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors disabled:opacity-40"
          >
            <MdOutlineNavigateBefore className="text-2xl" />
          </button>

          {/* Page Indicators (Dots) */}
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-6 bg-zinc-900"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="p-1.5 rounded-full text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
          >
            <MdOutlineNavigateNext className="text-2xl" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}