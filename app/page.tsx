"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Splash() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center noise-overlay">

      <div className="absolute inset-0 animate-grid-fade" style={{
        backgroundImage: "linear-gradient(rgba(220,38,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.04)_0%,transparent_50%)]" />

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-red-600/15 to-transparent -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-linear-to-b from-transparent via-red-600/10 to-transparent -translate-x-1/2" />

      {phase >= 1 && (
        <>
          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-red-600/30 animate-corner-reveal" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-red-600/30 animate-corner-reveal delay-200" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-red-600/30 animate-corner-reveal delay-400" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-red-600/30 animate-corner-reveal delay-600" />
        </>
      )}

      {phase >= 1 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] border border-red-600/10 rotate-2 animate-corner-reveal" />
      )}
      {phase >= 1 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] border border-red-600/5 -rotate-1 animate-corner-reveal delay-200" />
      )}

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {phase >= 2 && (
          <div className="animate-vertical-slide delay-200">
            <span className="text-red-600/20 font-bebas text-[12rem] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
              00
            </span>
          </div>
        )}

        {phase >= 2 && (
          <div className="animate-vertical-slide delay-300">
            <h1 className="font-bebas text-7xl md:text-9xl uppercase tracking-wider leading-none">
              <span className="block text-white animate-text-glitch">Jey</span>
              <span className="block text-red-600 text-shadow-glow mt-1">Dom</span>
            </h1>
          </div>
        )}

        {phase >= 3 && (
          <div className="animate-vertical-slide delay-100">
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="w-16 h-[1px] bg-red-600 animate-line-expand" />
              <span className="font-bebas text-sm text-gray-400 uppercase tracking-[0.3em]">
                Software Engineer
              </span>
              <span className="w-16 h-[1px] bg-red-600 animate-line-expand delay-200" />
            </div>
          </div>
        )}

        {phase >= 3 && (
          <div className="animate-vertical-slide delay-300">
            <p className="mt-6 text-gray-500 text-sm max-w-md mx-auto leading-relaxed text-hierarchy-medium">
              Programmer by craft, technologist by obsession. Breaking down problems
              like game mechanics, optimizing the build, unlocking the next skill.
            </p>
          </div>
        )}

        {phase >= 4 && (
          <div className="flex flex-col items-center gap-6 mt-10 animate-fade-in-up delay-100">
            <Link
              href="/home"
              className="group relative px-10 py-4 bg-red-600 text-white font-bold text-sm uppercase tracking-[0.25em] overflow-hidden hover:bg-red-700 transition-colors duration-300 animate-pulse-red"
              style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
            >
              <span className="relative z-10">Enter Portfolio</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/john-dominique-gonzales-a81944406/" target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-500 hover:text-red-600 transition-all duration-200" style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))" }}>
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a href="https://github.com/Jeydeee04" target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-500 hover:text-red-600 transition-all duration-200" style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))" }}>
                <FaGithub className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/john.dominique.gonzales.2024" target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-500 hover:text-red-600 transition-all duration-200" style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))" }}>
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] animate-blink mt-2 text-hierarchy-low">
              &#47;&#47; click to enter
            </p>
          </div>
        )}
      </div>

      {phase >= 2 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 animate-fade-in-up delay-600">
          <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] text-hierarchy-low">
            gonzales.dev
          </span>
          <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse delay-400" />
        </div>
      )}
    </div>
  );
}
