"use client";

import { useState } from "react";
import ProjectCard from "@/components/Project-Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    images: ["thesis-2.jpg", "thesis-1.jpg"],
    title: "AI-Powered Smart Bin",
    description: "An AI-powered garbage bin that uses image classification to automatically classify and segregate waste in real-time. Built to make proper waste disposal effortless and accurate.",
    keyFeatures: [
      "Automatically classifies waste (paper, plastic, plastic bottles, others) using a trained YOLOv8 model",
      "Segregates waste and opens the lid automatically via servo motors",
      "Provides real-time fill level monitoring and alerts via a React Native mobile app and LED light indicators",
      "Compresses waste (paper, plastic) automatically using air compression",
    ],
    frameworks: ["React Native", "YOLOv8", "Arduino"],
    languages: ["Python", "TypeScript", "C++"],
    githubLink: "",
  },
  {
    images: ["web1-1.jpg", "web1-2.jpg", "web1-3.jpg", "web1-4.jpg"],
    title: "Property, Plant, Equipment (PPE) Management System",
    description: "A web-based Property, Plant & Equipment (PPE) inventory management system built for the Department of Agrarian Reform (DAR). Manages the full lifecycle of government-owned assets across two fund clusters, providing real-time dashboard analytics, CRUD operations, status tracking, and CSV export.",
    keyFeatures: [
      "Dashboard with real-time statistics and Chart.js pie charts for asset distribution",
      "Fund cluster management — separate views for Regular and Split clusters with search, filtering, and pagination",
      "Full CRUD operations with transactional database writes and personnel linking",
      "OTP-based password recovery with time-limited codes sent via Gmail SMTP",
      "CSV export for asset inventory reports per fund cluster",
    ],
    frameworks: ["PHPMailer", "Tailwind CSS", "Chart.js", "Docker"],
    languages: ["PHP", "SQL", "JavaScript"],
    githubLink: "https://github.com/Jeydeee04/Student-Assistant-SPES-Project",
  },
  {
    images: ["kanban_2.jpg", "kanban_3.jpg", "kanban_1.jpg"],
    title: "Kanban Board",
    description: "This Kanban board is a modern task manager designed to help you easily organize workflows, track progress, and filter tasks. It includes smart filters, column pagination, and persistent dark and light modes for a smooth and productive experience.",
    keyFeatures: [
      "Organizes tasks across To Do, Doing, and Done columns with quick status transition capabilities.",
      "Supports project metadata, interactive subtask checklists, and an inline editing modal for flexible task updates.",
      "Provides instant keyword searching alongside dynamic dropdowns for priority, month, and day filters.",
      "Limits columns to five items per page with responsive navigation controls to prevent long vertical scrolling.",
      "Allows seamless switching between dark and light modes across the entire application with automatic saving via local storage.",
    ],
    frameworks: ["NextJs", "Flask"],
    languages: ["Typescript", "Python"],
    githubLink: "https://github.com/Jeydeee04/Kanban-Board",
  }
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const total = projects.length;

  const goTo = (i: number) => {
    setDirection(i > active ? "next" : "prev");
    setActive(i);
  };

  const prev = () => {
    setDirection("prev");
    setActive((c) => (c === 0 ? total - 1 : c - 1));
  };

  const next = () => {
    setDirection("next");
    setActive((c) => (c === total - 1 ? 0 : c + 1));
  };

  return (
    <section className="py-16 md:py-24 noise-overlay">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <span className="font-bebas text-red-600 text-4xl md:text-5xl text-hierarchy-high">02</span>
          <h2 className="font-bebas text-3xl md:text-4xl text-white uppercase tracking-wider text-hierarchy-high">Projects</h2>
          <span className="flex-1 h-[1px] bg-red-600/20" />
        </div>

        <div className="space-y-6 md:space-y-0">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === active
                  ? "opacity-100 translate-y-0 block"
                  : direction === "next"
                  ? "opacity-0 translate-y-6 hidden"
                  : "opacity-0 -translate-y-6 hidden"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {total > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-red-600 transition-all duration-300 bg-white/[0.05] border border-white/10 hover:border-red-600/30 rounded-full"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active
                      ? "bg-red-600 w-10"
                      : "bg-white/25 w-3 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-red-600 transition-all duration-300 bg-white/[0.05] border border-white/10 hover:border-red-600/30 rounded-full"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="text-center mt-6">
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase text-hierarchy-low">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
