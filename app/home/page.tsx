import Image from "next/image";
import Link from "next/link";
import { FiUser, FiFileText, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const socials = [
  { href: "https://www.linkedin.com/in/john-dominique-gonzales-a81944406/", icon: <FaLinkedinIn className="w-4 h-4" />, label: "LinkedIn" },
  { href: "https://github.com/Jeydeee04", icon: <FaGithub className="w-4 h-4" />, label: "GitHub" },
  { href: "https://www.facebook.com/john.dominique.gonzales.2024", icon: <FaFacebookF className="w-4 h-4" />, label: "Facebook" },
  { href: "mailto:jd04gonzales@gmail.com", icon: <FiMail className="w-4 h-4" />, label: "Email" },
];

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-red-600/3 rounded-full blur-3xl animate-float-orb delay-1000" />
      </div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-red-600/10 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left relative z-10">
            <p className="text-red-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in-up text-hierarchy-high">
              &#47;&#47; Great Day, I&apos;m
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl text-white uppercase tracking-wider leading-none animate-fade-in-up delay-100 text-hierarchy-high">
              John Dominique
              <span className="block text-red-600 text-shadow-glow">L. Gonzales</span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4 animate-fade-in-up delay-200">
              <span className="w-12 h-[2px] bg-red-600" />
              <h1 className="font-bebas text-lg text-gray-400 uppercase tracking-widest text-hierarchy-medium">
                Software Engineer
              </h1>
            </div>
            <p className="mt-6 text-gray-400 max-w-md leading-relaxed text-sm animate-fade-in-up delay-300 text-hierarchy-medium">
              Programmer by craft, technologist by obsession. I break down problems
              like game mechanics, find the pattern, optimize the build, unlock the next skill.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-8 animate-fade-in-up delay-400">
              <Link
                href="/contact"
                className="group relative px-8 py-3 bg-red-600 text-white font-bold text-sm uppercase tracking-widest overflow-hidden animate-pulse-red"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  Hire Me
                </span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/docs/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative px-8 py-3 border border-gray-600 text-gray-300 font-bold text-sm uppercase tracking-widest hover:border-red-600 hover:text-white transition-colors duration-300"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
              >
                <span className="flex items-center gap-2">
                  <FiFileText className="w-4 h-4" />
                  Download CV
                </span>
              </Link>
            </div>
            <div className="flex justify-center md:justify-start gap-3 mt-8 animate-fade-in-up delay-500">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors duration-200"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 relative animate-fade-in-up delay-300">
            <div className="absolute -inset-3 border border-red-600/20 rotate-3" />
            <div className="absolute -inset-3 border border-red-600/10 -rotate-2" />
            <div
              className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden"
              style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}
            >
              <Image src="/images/profile_pic.jpg" alt="John Dominique Gonzales" width={320} height={320} className="object-cover w-full h-full" priority />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-red-600/20 rotate-12" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border border-red-600/15 -rotate-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
