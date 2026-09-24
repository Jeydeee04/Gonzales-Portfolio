"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Interactive3DProfile() {
  return (
    <div className="flex items-center justify-center p-8 perspective-[1000px]">
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          y: [0, -12, 0],
          rotateX: [0, 8, -6, 0],
          rotateY: [0, -10, 8, 0],
          rotateZ: [0, -2, 2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      >
        <div 
          style={{ transformStyle: "preserve-3d" }}
          className="relative rounded-2xl bg-gray-600 p-1 shadow-xl"
        >
          <div
            style={{ transform: "translateZ(30px)" }}
            className="relative overflow-hidden rounded-[14px] bg-slate-900"
          >
            <Image
              src="/images/profile_pic.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}