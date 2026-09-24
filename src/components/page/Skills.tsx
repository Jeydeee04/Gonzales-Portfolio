import { skills } from "@/data";
import SkillCard from "../skillCard";

export default function SkillPage() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
}