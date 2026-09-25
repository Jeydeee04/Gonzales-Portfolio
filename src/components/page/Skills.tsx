import { skills } from "@/data";
import SkillCard from "../skillCard";
import ScrollReveal from "../scrollReveal";

export default function SkillPage() {
  return (
    <section
      id="skills"
      className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 sm:py-24"
    >
      <ScrollReveal className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {skills.map((skill, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <SkillCard {...skill} />
          </ScrollReveal>
        ))}
      </ScrollReveal>
    </section>
  );
}