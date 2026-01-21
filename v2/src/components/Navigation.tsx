import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: "hero", label: "Home" },
  { id: "story", label: "Story" },
  { id: "books", label: "Books" },
  { id: "ads", label: "Ads" },
  { id: "journalism", label: "Journalism" },
  { id: "strategy", label: "Career" },
];

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-slate-200/50"
    >
      <ul className="flex gap-8 items-center">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onNavigate(section.id)}
              className={`text-sm tracking-wide transition-colors relative ${
                activeSection === section.id
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
