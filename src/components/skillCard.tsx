"use client";

import { Skills } from "@/models/skills";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SkillCard({ title, desc }: Skills) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-distant bg-white p-6 flex items-center justify-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="group relative w-full border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="absolute top-0 left-0 h-1.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />

        <div 
          className="absolute inset-0 bg-zinc-100 border border-zinc-300 pointer-events-none"
          style={{ transform: "translateZ(-20px)" }}
        />

        <div 
          className="mb-4 pointer-events-none"
          style={{ transform: "translateZ(50px)" }}
        >
          <h1 className="font-bebas text-3xl font-bold tracking-wider uppercase text-black">
            {title}
          </h1>
        </div>

        <p 
          className="text-sm leading-relaxed text-zinc-700 font-medium pointer-events-none"
          style={{ transform: "translateZ(30px)" }}
        >
          {desc}
        </p>
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(0,0,0,0.06) 0%, transparent 60%)`,
            transform: "translateZ(1px)",
          }}
        />

        <div 
          className="absolute top-4 right-4 h-3 w-3 border-2 border-black bg-white group-hover:bg-black transition-colors"
          style={{ transform: "translateZ(60px)" }}
        />
      </motion.div>
    </div>
  );
}