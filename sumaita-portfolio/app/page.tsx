import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import { ResumeSection, ContactSection } from "@/components/ResumeContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Recognition />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
