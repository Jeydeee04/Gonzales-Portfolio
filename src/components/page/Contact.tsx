"use client";

import ChatCard from "../chatCard";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiFacebook } from "react-icons/fi";
import ScrollReveal from "../scrollReveal";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FiMail className="text-lg text-zinc-900" />,
      label: "Email",
      value: "jd04gonzales@gmail.com",
      href: "mailto:jd04gonzales@gmail.com",
    },
    {
      icon: <FiMapPin className="text-lg text-zinc-900" />,
      label: "Location",
      value: "Marinduque, Philippines",
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub className="text-lg" />,
      href: "https://github.com/Jeydeee04",
    },
    {
      name: "Facebook",
      icon: <FiFacebook className="text-lg" />,
      href: "https://www.facebook.com/john.dominique.gonzales.2024",
    },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-screen w-full items-center justify-center bg-zinc-50/50 p-5 sm:p-12 lg:p-16"
    >
      <ScrollReveal className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN: Contact Information & Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col gap-8"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider uppercase text-zinc-900 leading-none">
              LET'S BUILD <br /> SOMETHING TOGETHER.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-lg leading-relaxed mt-1">
              Have a project in mind, a software engineering opportunity, or just want to chat about web, mobile, or hardware integration? Send a message anytime!
            </p>
          </div>

          {/* Contact Details List */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-sm hover:border-zinc-900 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-zinc-100 shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-poppins text-sm font-semibold text-zinc-900 hover:text-black transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-poppins text-sm font-semibold text-zinc-900">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links Footer */}
          <div className="flex flex-col gap-3 pt-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
              Connect via Socials
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-zinc-200/80 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-800 hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-sm"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Chat Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 flex justify-center w-full"
        >
          <ChatCard />
        </motion.div>
      </ScrollReveal>
    </section>
  );
}