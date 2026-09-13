import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Skills } from "./components/sections/Skills";
import { Background } from "./components/ui/Background";
import { CursorGlow } from "./components/ui/CursorGlow";
import { Grain } from "./components/ui/Grain";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { TechMarquee } from "./components/ui/TechMarquee";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="shell">
          <TechMarquee className="border-x-0" />
        </div>
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
      <Grain />
    </MotionConfig>
  );
}
