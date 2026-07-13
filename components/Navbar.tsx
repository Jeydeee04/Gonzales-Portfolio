"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Tools" },
  { href: "/services", label: "Services" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div className="relative bg-black/95 backdrop-blur-md noise-overlay">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 relative z-10">
          <Link href="/" className="group relative flex items-center gap-1">
            <span className="font-bebas text-2xl text-white tracking-wider uppercase">
              Jey
            </span>
            <span className="font-bebas text-2xl text-red-600 tracking-wider uppercase">
              Dom
            </span>
            <span className="ml-1 text-red-600 font-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              /
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300" />
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-white transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <span className="absolute inset-0 bg-red-600/10 -skew-x-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-red-600 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[5px] bg-white" : ""
              }`}
            />
            <span
              className={`block w-4 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-red-600 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[5px] bg-white" : ""
              }`}
            />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-red-600/0 via-red-600/30 to-red-600/0" />
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/98 backdrop-blur-md border-t border-red-600/20 noise-overlay">
          <ul className="flex flex-col py-4 relative z-10">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`transform transition-all duration-300 ${
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${navLinks.indexOf(link) * 60}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-white hover:bg-red-600/10 transition-all duration-200 group"
                >
                  <span className="w-3 h-[1px] bg-red-600/30 group-hover:bg-red-600 group-hover:w-5 transition-all duration-200" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
