import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "featured",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Featured Work", href: "#featured", id: "featured" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-background-900 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/20 py-3"
          : "bg-transparent py-5 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-lg p-1"
            aria-label="Nourhan Farid - Home"
          >
            <div className="h-9 w-9 rounded-xl bg-accent-400 p-[1px] shadow-sm">
              <div className="h-full w-full bg-accent-850 rounded-[11px] flex items-center justify-center group-hover:bg-white dark:group-hover:bg-background-900 transition-colors">
                <span className="font-mono text-sm font-bold text-white group-hover:text-accent-500 transition-colors">
                  NF
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-accent-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Front-End Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 dark:bg-background-800 p-1.5 rounded-full border border-slate-800/70"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                    isActive
                      ? "dark:bg-background-600 text-accent-400 font-semibold shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-accent-100 dark:hover:bg-background-700"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white dark:bg-background-800 dark:hover:bg-background-700 border border-slate-700/80 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
              aria-label="View Resume Summary"
            >
              <FileText className="w-3.5 h-3.5 text-accent-400" />
              <span>CV Summary</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-accent-400 hover:bg-accent-300 rounded-lg transition-all duration-200 shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={onOpenResume}
              className="lg:hidden inline-flex items-center gap-1 p-2 text-xs font-medium text-slate-300 dark:bg-background-800 border border-slate-800 rounded-lg"
              aria-label="Quick View CV"
            >
              <FileText className="w-4 h-4 text-accent-400" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-accent-500"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-850/95 border-b border-slate-800/80 backdrop-blur-xl animate-fade-in px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent-500/15 text-accent-500 dark:text-accent-300 font-semibold"
                      : "text-slate-300 hover:bg-accent-500/50 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800/70 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <FileText className="w-4 h-4 text-accent-400" />
                <span>View Full CV Summary</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-accent-500 hover:bg-accent-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <span>Contact Nourhan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
