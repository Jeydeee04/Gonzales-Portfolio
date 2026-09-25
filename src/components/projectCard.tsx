"use client";

import { useState, useEffect } from "react";
import { Project } from "@/models/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
  MdClose,
  MdZoomIn,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  images,
  title,
  features,
  frameworks,
  languages,
  link,
}: Project) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const totalImages = images ? images.length : 0;

  const goToNextPage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const goToPrevPage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") goToPrevPage();
      if (e.key === "ArrowRight") goToNextPage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, totalImages]);

  return (
    <div className="p-4 flex items-center justify-center w-full">
      {/* Continuous Idle Floating Outer Container */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-5xl border border-zinc-200/80 bg-white p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:border-zinc-900 hover:shadow-xl"
      >
        {/* LEFT COLUMN: Title, Media Showcase, Frameworks & Languages */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-5">
            {/* Header Block */}
            <header className="border-b border-zinc-100 pb-3">
              <h3 className="font-bebas text-4xl sm:text-5xl font-extrabold tracking-wider uppercase text-zinc-900 group-hover:text-black transition-colors leading-none">
                {title}
              </h3>
            </header>

            {/* Media Showcase */}
            {totalImages > 0 && (
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative w-full aspect-video bg-zinc-950 overflow-hidden border border-zinc-100 rounded-xl shrink-0 cursor-pointer group/img"
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={`/images/${images[currentIndex]}`}
                      alt={`${title} preview ${currentIndex + 1}`}
                      fill
                      priority
                      className="object-cover select-none transition-transform duration-300 group-hover/img:scale-105"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                {totalImages > 1 && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-3 right-3 z-10 flex items-center gap-3 bg-black/80 px-3 py-1 backdrop-blur-md rounded-full border border-white/10"
                  >
                    <button
                      onClick={goToPrevPage}
                      aria-label="Previous image"
                      className="text-xl text-white hover:text-zinc-400 transition-colors"
                    >
                      <MdOutlineNavigateBefore />
                    </button>
                    <span className="font-mono text-xs text-white">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
                    </span>
                    <button
                      onClick={goToNextPage}
                      aria-label="Next image"
                      className="text-xl text-white hover:text-zinc-400 transition-colors"
                    >
                      <MdOutlineNavigateNext />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Technical Stack Footer */}
          <footer className="pt-4 border-t border-zinc-100 flex flex-col gap-4">
            {/* Frameworks List */}
            {frameworks && frameworks.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <span className="font-poppins text-xs font-bold uppercase tracking-wider text-zinc-800">
                  FRAMEWORKS
                </span>
                <ul className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                  {frameworks.map((fw, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-900 font-poppins text-xs font-semibold hover:border-zinc-300 hover:bg-zinc-100 transition-colors cursor-default"
                    >
                      <span className="font-mono text-[10px] text-zinc-400 font-bold">&gt;</span>
                      <span>{fw}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Languages List */}
            {languages && languages.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <span className="font-poppins text-xs font-bold uppercase tracking-wider text-zinc-800">
                  LANGUAGES
                </span>
                <ul className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                  {languages.map((lang, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-900 font-poppins text-xs font-semibold hover:border-zinc-300 hover:bg-zinc-100 transition-colors cursor-default"
                    >
                      <span className="font-mono text-[10px] text-zinc-400 font-bold">&gt;</span>
                      <span>{lang}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </footer>
        </div>

        {/* RIGHT COLUMN: Key Features & Live Link Footer */}
        <div className="lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-100 pt-6 lg:pt-0 lg:pl-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-3">
              <h4 className="font-bebas text-3xl tracking-wider uppercase text-zinc-800">
                KEY FEATURES
              </h4>
            </div>

            <div className="max-h-[380px] lg:max-h-[420px] overflow-y-auto pr-2 space-y-2.5 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
              {features?.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-start gap-3 text-sm text-zinc-800 leading-snug font-medium bg-zinc-50/80 p-3 rounded-xl border border-zinc-100 hover:border-black hover:bg-zinc-100/80 transition-colors cursor-default"
                >
                  <span className="font-mono text-xs text-zinc-400 font-bold select-none pt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-zinc-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Right Live Link Section */}
          {link && (
            <div className="pt-6 mt-4 border-t border-zinc-100 flex justify-end">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-black bg-zinc-100 hover:bg-black hover:text-white border border-zinc-200/80 hover:border-black transition-all py-2 px-4 rounded-full shadow-sm flex items-center gap-2 group/btn shrink-0"
              >
                <FaGithub />
                <span>View on Github</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && totalImages > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Modal Content Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video max-h-[85vh] flex items-center justify-center"
            >
              <Image
                src={`/images/${images[currentIndex]}`}
                alt={`${title} enlarged view ${currentIndex + 1}`}
                fill
                priority
                className="object-contain select-none"
                sizes="100vw"
              />

              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close enlarged view"
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-600 backdrop-blur-xl shadow-xl transition-all duration-200 hover:bg-black group"
              >
                <MdClose className="text-lg group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Navigation Arrows for Lightbox */}
              {totalImages > 1 && (
                <>
                  <button
                    onClick={goToPrevPage}
                    aria-label="Previous image"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/60 hover:bg-black/90 p-2 sm:p-3 rounded-full border border-white/10 transition-colors"
                  >
                    <MdOutlineNavigateBefore className="text-2xl sm:text-3xl" />
                  </button>
                  <button
                    onClick={goToNextPage}
                    aria-label="Next image"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/60 hover:bg-black/90 p-2 sm:p-3 rounded-full border border-white/10 transition-colors"
                  >
                    <MdOutlineNavigateNext className="text-2xl sm:text-3xl" />
                  </button>

                  {/* Image Counter Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/75 px-4 py-1.5 rounded-full border border-white/10 text-white font-mono text-xs">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}