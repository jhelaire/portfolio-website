import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Involvement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}