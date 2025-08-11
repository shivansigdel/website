// src/App.jsx
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Reveal from "./components/Reveal";
import Education from "./sections/Education";

export default function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <main>
        <Reveal>
          <About />
        </Reveal>

        <Reveal delay={100}>
          <Education />
        </Reveal>

        <Reveal delay={100}>
          <Experience />
        </Reveal>

        <Reveal delay={200}>
          <Projects />
        </Reveal>

        <Reveal delay={300}>
          <Contact />
        </Reveal>
      </main>
    </div>
  );
}
