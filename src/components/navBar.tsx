"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Prevent default jump for anchor tags
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMenuOpen(false);

      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Small delay ensures the mobile dropdown closes smoothly first
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 p-3 md:inset-x-auto md:h-screen md:p-3">
      <nav className="relative flex h-auto w-full flex-row items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm md:h-full md:w-auto md:flex-col md:justify-center md:gap-15 md:rounded-2xl md:rounded-r-2xl md:border-r-2 md:border-t-0 md:border-b-0 md:border-l-0 md:px-14 md:pb-40 md:shadow-none">
        <a
          href="/"
          className="group flex items-center gap-1 uppercase transition-transform duration-300 ease-out hover:-translate-y-0.5 font-rubik"
        >
          <h1 className="font-bold text-xl text-gray-600 transition-colors duration-300 group-hover:text-black">
            Jey
          </h1>
          <div className="relative">
            <h1 className="font-bold text-3xl text-gray-900">Dom</h1>
            <span className="absolute -bottom-1 left-0 h-0.75 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
          </div>
        </a>

        <div className="flex items-center gap-2 md:order-last md:flex-col">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="portfolio-navigation"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="rounded-full border border-gray-200 p-2 text-gray-700 transition-colors hover:border-black hover:text-black md:hidden"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-5 text-gray-700 md:flex md:flex-col">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative inline-flex items-center gap-2 py-1 text-base font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-black"
              >
                <span className="text-gray-600 opacity-0 transition-all duration-300 ease-out -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100">
                  &lt;
                </span>
                <span>{item.name}</span>
                <span className="text-gray-600 opacity-0 transition-all duration-300 ease-out translate-x-2 group-hover:translate-x-0 group-hover:opacity-100">
                  &gt;
                </span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              id="portfolio-navigation"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-2 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 text-gray-700 shadow-lg md:hidden"
            >
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group relative inline-flex w-full items-center rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-black sm:text-base"
                  >
                    <span>{item.name}</span>
                    <span className="absolute bottom-1 left-3 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-8" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}