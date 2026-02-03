import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { FancyDivider } from "../components/FancyDivider";
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
        <FancyDivider />
        <Projects />
        <FancyDivider />
        <About />
        <CurrentlyFocused />
        <FancyDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
