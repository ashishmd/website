import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Approach />
      <Experience />
      <Skills />
      <Leadership />
      <Achievements />
      <Certifications />
      <Publications />
      <Projects />
      <Contact />
    </>
  );
}
