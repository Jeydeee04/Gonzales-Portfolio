import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const sections = [
  { title: "My Story", text: "It started with curiosity. As a student, I was drawn to science and technology but what really hooked me was coding. The moment I wrote my first program, I knew this was it. From that point on, every project, every bug, every late-night debug session just made me want to learn more." },
  { title: "How I Think", text: "Every skillset and experience is a game level to me. There's a process: understand the mechanics, learn the controls, practice the combo, then move on to the next challenge. I don't just collect skills, I figure out how they connect, how to integrate them, and how to make them work together." },
  { title: "Beyond Code", text: "When I'm not coding, I'm probably gaming, catching up on anime and manga, or playing sports. Gaming taught me strategy, anime taught me creativity, and sports taught me discipline, all of which I bring back to the keyboard." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white noise-overlay">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
            <span className="font-bebas text-red-600 text-5xl text-hierarchy-high">01</span>
            <h2 className="font-bebas text-4xl text-white uppercase tracking-wider text-hierarchy-high">About Me</h2>
            <span className="flex-1 h-[1px] bg-red-600/20" />
          </div>

          <p className="text-gray-400 max-w-2xl leading-relaxed text-sm mb-16 animate-fade-in-up delay-100 text-hierarchy-medium">
            Programmer and technologist at heart. I don&apos;t just write code, I study it,
            break it apart, and rebuild it better. Programming is my craft, and technology is
            the world I live in.
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={section.title} className="animate-fade-in-up" style={{ animationDelay: `${(i + 2) * 150}ms` }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[1px] bg-red-600" />
                  <h3 className="font-bebas text-xl text-white uppercase tracking-wider text-hierarchy-high">{section.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm max-w-2xl ml-11 text-hierarchy-medium">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-fade-in-up delay-600">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors duration-200"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              Let&apos;s Connect
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
