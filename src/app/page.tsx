import TopBar from "@/components/navBar";
import HomePage from "@/components/page/Home";
import AboutPage from "@/components/page/About";
import ProjectPage from "@/components/page/Project";
import SkillPage from "@/components/page/Skills";
import ContactPage from "@/components/page/Contact";

export default function Home() {
  return (
    <div className="flex font-poppins">
      <TopBar/>
      <main className="flex flex-col flex-1 pl-68">
        <HomePage/>
        <AboutPage/>
        <ProjectPage/>
        <SkillPage/>
        <ContactPage/>
      </main>
    </div>
  );
}
