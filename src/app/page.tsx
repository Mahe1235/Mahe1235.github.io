import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingIcons from "@/components/ui/FloatingIcons";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Now from "@/components/sections/Now";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Reads from "@/components/sections/Reads";
import Podcasts from "@/components/sections/Podcasts";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div className="relative">
        <FloatingIcons />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Journey />
          <Now />
          <Reads />
          <Podcasts />
          <Education />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
