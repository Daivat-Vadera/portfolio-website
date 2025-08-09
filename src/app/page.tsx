import AboutMe from "@/Components/AboutMe";
import ContactMe from "@/Components/ContactMe";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import HeroBanner from "@/Components/HeroBanner";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skils";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
