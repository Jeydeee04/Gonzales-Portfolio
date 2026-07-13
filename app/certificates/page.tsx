"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import CertificateCard from "@/components/Certificate-Card";

const categories = [
  {
    label: "Academic",
    items: [
      { title: "Best Thesis Rank 2", image: "cert/3.png" },
    ],
  },
  {
    label: "Seminars and Workshops",
    items: [
      { title: "Blockchain is not just Crypto", image: "cert/1.png" },
      { title: "Formulating Competitive Marketing Strategies in the Digital Age", image: "cert/2.png" },
      { title: "Fundamentals of Image Processing using MATLAB and OpenCV", image: "cert/4.png" },
      { title: "Engineering Minds: Challenging the Sigma, Reach out, Build Bridges", image: "cert/8.png" },
    ],
  },
  {
    label: "Competition",
    items: [
      { title: "Regional Programming Competition - C++ Category: 1st Place", image: "cert/5.png" },
      { title: "National Programming Competition - C++ Category: Participant", image: "cert/6.png" },
      { title: "Regional Programming Competition - C++ Category: 2nd Place", image: "cert/7.png" },
    ],
  },
];

const allCerts = categories.flatMap((cat) => cat.items);

function flatIndex(catIdx: number, itemIdx: number): number {
  let idx = 0;
  for (let i = 0; i < catIdx; i++) idx += categories[i].items.length;
  return idx + itemIdx;
}

export default function Certificates() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (active === null) return;
      if (e.key === "ArrowRight") setActive((c) => (c === allCerts.length - 1 ? 0 : c! + 1));
      if (e.key === "ArrowLeft") setActive((c) => (c === 0 ? allCerts.length - 1 : c! - 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  return (
    <div className="min-h-screen bg-black text-white noise-overlay">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
            <span className="font-bebas text-red-600 text-5xl text-hierarchy-high">05</span>
            <h2 className="font-bebas text-4xl text-white uppercase tracking-wider text-hierarchy-high">Certificates</h2>
            <span className="flex-1 h-[1px] bg-red-600/20" />
          </div>

          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <div key={cat.label} className="animate-fade-in-up" style={{ animationDelay: `${ci * 150}ms` }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 bg-red-600 rotate-45" />
                  <h3 className="font-bebas text-lg text-red-600 uppercase tracking-[0.2em] text-hierarchy-high">
                    {cat.label}
                  </h3>
                  <span className="flex-1 h-[1px] bg-red-600/15" />
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-hierarchy-low">
                    {cat.items.length} {cat.items.length === 1 ? "certificate" : "certificates"}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                  {cat.items.map((cert, ii) => (
                    <div
                      key={ii}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${(ci * cat.items.length + ii) * 60}ms` }}
                    >
                      <CertificateCard
                        title={cert.title}
                        image={cert.image}
                        onClick={() => setActive(flatIndex(ci, ii))}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-red-600 rounded-full transition-all duration-200 z-10"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[85vh] bg-black/80 border border-white/10 overflow-hidden"
            style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ minHeight: "60vh" }}>
              <Image
                src={`/images/${allCerts[active].image}`}
                alt={allCerts[active].title}
                fill
                className="object-contain p-4"
                sizes="100vw"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="font-bebas text-lg text-white uppercase tracking-wider">
                {allCerts[active].title}
              </p>
              <p className="text-xs text-gray-400 text-hierarchy-medium">
                {active + 1} / {allCerts.length}
              </p>
            </div>
          </div>

          {allCerts.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((c) => (c === 0 ? allCerts.length - 1 : c! - 1));
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-red-600 rounded-full transition-all duration-200"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((c) => (c === allCerts.length - 1 ? 0 : c! + 1));
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-red-600 rounded-full transition-all duration-200"
              >
                &#8250;
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
