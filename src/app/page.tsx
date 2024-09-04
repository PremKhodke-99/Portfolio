import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-yellow-100 to-emerald-100 overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
