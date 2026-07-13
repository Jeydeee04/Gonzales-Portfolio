"use client"
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const socials = [
  { href: "https://www.linkedin.com/in/john-dominique-gonzales-a81944406/", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://github.com/Jeydeee04", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.facebook.com/john.dominique.gonzales.2024", icon: <FaFacebookF />, label: "Facebook" },
];

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white noise-overlay">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
            <span className="font-bebas text-red-600 text-5xl text-hierarchy-high">06</span>
            <h2 className="font-bebas text-4xl text-white uppercase tracking-wider text-hierarchy-high">Contact</h2>
            <span className="flex-1 h-[1px] bg-red-600/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-in-left">
              <p className="text-gray-400 leading-relaxed text-sm text-hierarchy-medium">
                Feel free to reach out for collaborations, opportunities, or just a conversation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-gray-700 flex items-center justify-center text-red-600" style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
                    <FiMail className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest text-hierarchy-high">Email</p>
                    <p className="text-sm text-gray-400 text-hierarchy-medium">jd04gonzales@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-gray-700 flex items-center justify-center text-red-600" style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
                    <FiPhone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest text-hierarchy-high">Phone</p>
                    <p className="text-sm text-gray-400 text-hierarchy-medium">09703322707</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-gray-700 flex items-center justify-center text-red-600" style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
                    <FiMapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest text-hierarchy-high">Location</p>
                    <p className="text-sm text-gray-400 text-hierarchy-medium">Buliasnin, Boac, Marinduque</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors duration-200" style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h3 className="font-bebas text-base font-bold text-red-600 uppercase tracking-widest mb-6 text-hierarchy-high">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors" style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }} />
                <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors" style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }} />
                <textarea name="message" placeholder="Your Message" rows={5} required className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors resize-none" style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }} />
                <button type="submit" className="w-full px-8 py-3 bg-red-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2" style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}>
                  <FiSend className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
