import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingIcons from "@/components/ui/FloatingIcons";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Reads from "@/components/sections/Reads";
import Podcasts from "@/components/sections/Podcasts";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

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
          <Journey />
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
