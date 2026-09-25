import TopBar from "@/components/navBar";
import HomePage from "@/components/page/Home";
import AboutPage from "@/components/page/About";
import ProjectPage from "@/components/page/Project";
import SkillPage from "@/components/page/Skills";
import ContactPage from "@/components/page/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-poppins md:flex-row">
      <TopBar/>
      <main className="flex w-full flex-1 flex-col overflow-hidden pt-20 md:pl-68 md:pt-0">
        <HomePage/>
        <AboutPage/>
        <ProjectPage/>
        <SkillPage/>
        <ContactPage/>
      </main>
    </div>
  );
}
