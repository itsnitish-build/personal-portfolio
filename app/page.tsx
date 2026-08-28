import Navbar from "@/components/layout/Navbar";
import MobileTabBar from "@/components/layout/MobileTabBar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <MobileTabBar />
      <main className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
