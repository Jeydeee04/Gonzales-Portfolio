import ScrollReveal from "../scrollReveal";

export default function AboutPage() {
  const contentItems = [
    {
      title: "My Story",
      content: `It started with curiosity. As a student, I was drawn to science and technology but what really hooked me was coding. The moment I wrote my first program, I knew this was it. From that point on, every project, every bug, every late-night debug session just made me want to learn more.`,
    },
    {
      title: "How I Think",
      content: `Every skillset and experience is a game level to me. There's a process: understand the mechanics, learn the controls, practice the combo, then move on to the next challenge. I don't just collect skills, I figure out how they connect, how to integrate them, and how to make them work together.`,
    },
    {
      title: "Beyond Code",
      content: `When I'm not coding, I'm probably gaming, catching up on anime and manga, or playing sports. Gaming taught me strategy, anime taught me creativity, and sports taught me discipline, all of which I bring back to the keyboard.`,
    },
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center px-6 py-24 md:pt-40"
    >
      <div className="flex w-full max-w-6xl flex-col gap-12">
        {contentItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className="group flex flex-col gap-3">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-0.5 w-8 bg-slate-300 transition-all duration-300 ease-out group-hover:w-14 group-hover:bg-gray-500" />
              <h2 className="font-bebas text-3xl sm:text-4xl font-bold uppercase tracking-wide text-gray-600 transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed pl-11">
              {item.content}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}