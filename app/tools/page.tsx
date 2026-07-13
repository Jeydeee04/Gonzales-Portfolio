import { SiCplusplus, SiC, SiPython, SiPhp, SiHtml5, SiCss, SiReact, SiNextdotjs, SiPytorch, SiTensorflow, SiMongodb, SiMysql, SiSqlite, SiFirebase, SiGit, SiDocker, SiVercel, SiXampp, SiJavascript, SiTypescript, SiYolo, SiArduino } from "react-icons/si";
import ToolCard from "@/components/Tool-Card";
import { FaJava } from "react-icons/fa6";

const categories = [
  {
    label: "Languages",
    tools: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
      { name: "Python", icon: <SiPython /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    label: "Web",
    tools: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "React", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    label: "AI / ML",
    tools: [
      { name: "YOLOv8", icon: <SiYolo /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
    ],
  },
  {
    label: "Databases",
    tools: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    label: "DevOps",
    tools: [
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "XAMPP", icon: <SiXampp /> },
      { name: "Arduino", icon: <SiArduino /> },
    ],
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-black text-white noise-overlay">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
            <span className="font-bebas text-red-600 text-5xl text-hierarchy-high">03</span>
            <h2 className="font-bebas text-4xl text-white uppercase tracking-wider text-hierarchy-high">Tools and Frameworks</h2>
            <span className="flex-1 h-[1px] bg-red-600/20" />
          </div>

          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <div key={cat.label} className="animate-fade-in-up" style={{ animationDelay: `${ci * 120}ms` }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 bg-red-600 rotate-45" />
                  <h3 className="font-bebas text-lg text-red-600 uppercase tracking-[0.2em] text-hierarchy-high">
                    {cat.label}
                  </h3>
                  <span className="flex-1 h-[1px] bg-red-600/15" />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {cat.tools.map((tool, i) => (
                    <div
                      key={tool.name}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${(ci * cat.tools.length + i) * 50}ms` }}
                    >
                      <ToolCard icon={tool.icon} title={tool.name} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
