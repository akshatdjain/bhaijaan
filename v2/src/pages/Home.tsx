import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Story } from "../components/Story";
import Bookshelf from "../components/Bookshelf";
import { Ads } from "../components/Ads";
import { Journalism } from "../components/Journalism";
import { Strategy } from "../components/Strategy";
import Contact from "../components/Contact";

const navItems = [
  { id: "hero", label: "Intro" },
  { id: "story", label: "Story" },
  { id: "books", label: "Books" },
  { id: "ads", label: "Work" },
  { id: "journalism", label: "Press" },
  { id: "strategy", label: "Strategy" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll spy logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen selection:bg-accent-gold selection:text-bg-primary">
      {/* Fixed Navigation (Minimal) */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8 mix-blend-difference">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="group flex items-center justify-end gap-4 cursor-pointer relative py-2"
            onClick={() => scrollToSection(item.id)}
          >
            {/* Text Label */}
            <span className={`text-xs uppercase tracking-widest transition-all duration-500 absolute right-8 whitespace-nowrap ${activeSection === item.id ? 'opacity-100 translate-x-0 text-white font-bold' : 'opacity-0 translate-x-2 text-white/50 group-hover:opacity-100 group-hover:translate-x-0'}`}>
              {item.label}
            </span>

            {/* Indicator */}
            <div className={`relative transition-all duration-500 flex items-center justify-center ${activeSection === item.id ? 'w-4 h-4' : 'w-2 h-2 group-hover:w-3 group-hover:h-3'}`}>
              <div className={`rounded-full transition-all duration-500 ${activeSection === item.id ? 'w-3 h-3 bg-white' : 'w-1.5 h-1.5 bg-white/50 group-hover:bg-white'}`} />
            </div>
          </div>
        ))}
      </nav>

      <main>
        <Hero />
        <Story />
        <Bookshelf />
        <Ads />
        <Journalism />
        <Strategy />
        <Contact />
      </main>

      <footer className="py-8 text-center text-white/20 text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Aman Jain. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
