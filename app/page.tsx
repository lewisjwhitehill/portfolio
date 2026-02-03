import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { CurrentlyFocused } from "../components/CurrentlyFocused";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CurrentlyFocused />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
