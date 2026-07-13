"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  keyFeatures: string[];
  frameworks: string[];
  languages: string[];
  githubLink: string;
}

export default function ProjectCard({
  images, title, description, keyFeatures, frameworks, languages, githubLink,
}: ProjectCardProps) {
  const [active, setActive] = useState(0);
  const total = images.length;
  const prev = () => setActive((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setActive((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="glass-card overflow-hidden">
      <div className="relative w-full">
        <Image
          src={`/images/${images[active]}`}
          alt={`${title} screenshot ${active + 1}`}
          width={1920}
          height={1080}
          className="w-full h-full object-contain bg-black/50 p-10"
        />

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-white/70 hover:text-white bg-black/40 hover:bg-red-600 backdrop-blur-sm rounded-full transition-all duration-300"
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-white/70 hover:text-white bg-black/40 hover:bg-red-600 backdrop-blur-sm rounded-full transition-all duration-300"
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-red-600 w-5"
                      : "bg-white/40 w-1.5 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-bebas text-2xl text-white uppercase tracking-wider text-hierarchy-high">{title}</h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed text-hierarchy-medium">{description}</p>

        <div className="mt-4">
          <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-3 text-hierarchy-high">
            ── Key Features ──
          </h4>
          <ul className="space-y-1.5">
            {keyFeatures.map((feature, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-center gap-2 text-hierarchy-medium">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 space-y-2">
          {frameworks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] self-center mr-1">Frameworks</span>
              {frameworks.map((fw) => (
                <span key={fw} className="px-3 py-1.5 text-[10px] font-black text-white bg-red-600 rounded-full uppercase tracking-[0.2em]">
                  {fw}
                </span>
              ))}
            </div>
          )}
          {languages.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] self-center mr-1">Languages</span>
              {languages.map((lang) => (
                <span key={lang} className="px-3 py-1.5 text-[10px] font-black text-gray-400 border border-white/10 rounded-full uppercase tracking-[0.2em] text-hierarchy-low">
                  {lang}
                </span>
              ))}
            </div>
          )}
        </div>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-black text-gray-400 hover:text-red-600 transition-colors uppercase tracking-[0.2em] group"
        >
          <FaGithub className="w-4 h-4" />
          View on GitHub
          <span className="w-0 group-hover:w-4 h-[2px] bg-red-600 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}
