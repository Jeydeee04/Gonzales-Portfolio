"use client";

import { Skills } from "@/models/skills";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SkillCard({ title, desc }: Skills) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 25 });

  // Noticeable 3D tilt angles
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["22deg", "-22deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-22deg", "22deg"]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-distant p-4 flex items-center justify-center">
      {/* 1. Interactive 3D Tilt Wrapper */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* 2. Continuous Idle Floating Card */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="group relative flex h-60 w-80 flex-col justify-between border-2 border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-black hover:shadow-2xl"
        >
          {/* Top Accent Line (Expands on Hover) */}
          <div 
            className="absolute top-0 left-0 h-1.5 w-8 bg-zinc-300 transition-all duration-300 group-hover:w-full group-hover:bg-black" 
            style={{ transform: "translateZ(25px)" }}
          />

          {/* Dynamic Light Glare */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(0,0,0,0.06) 0%, transparent 65%)`,
              transform: "translateZ(1px)",
            }}
          />

          {/* Content Stack */}
          <div className="flex flex-col justify-between h-full pointer-events-none pt-2">
            <div style={{ transform: "translateZ(45px)" }}>
              <h3 className="font-bebas text-3xl sm:text-2xl font-bold tracking-wider uppercase text-zinc-800 group-hover:text-black transition-colors leading-tight pr-4">
                {title}
              </h3>
            </div>

            <p 
              className="text-sm sm:text-base leading-relaxed text-zinc-600 group-hover:text-zinc-900 transition-colors font-normal line-clamp-3"
              style={{ transform: "translateZ(30px)" }}
            >
              {desc}
            </p>
          </div>

          {/* Corner Indicator Accent */}
          <div 
            className="absolute top-5 right-5 h-2.5 w-2.5 border border-zinc-400 bg-zinc-100 group-hover:bg-black group-hover:border-black transition-all"
            style={{ transform: "translateZ(55px)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}