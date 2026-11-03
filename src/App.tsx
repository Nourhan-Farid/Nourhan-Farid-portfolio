import React, { useEffect, useLayoutEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { FeaturedProject } from "./components/FeaturedProject";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { ProjectModal } from "./components/ProjectModal";
import { ResumeModal } from "./components/ResumeModal";
import { Toast } from "./components/Toast";
import type { ProjectItem } from "./data/portfolioData";
import ScrollingUpIcon from "./components/ScrollingUpIcon";

export function App() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".animate-section");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState<string>("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        setToastMessage(`${label} copied to clipboard!`);
        setIsToastVisible(true);
        setTimeout(() => setCopiedText(null), 3000);
      })
      .catch(() => {
        setToastMessage(`Selected text: ${text}`);
        setIsToastVisible(true);
      });
  };

  return (
    <div className="min-h-screen dark:bg-background-900 text-slate-100 flex flex-col relative isolate overflow-hidden selection:bg-emerald-500/20 selection:text-emerald-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
        <div className="grid-overlay" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Page Flow */}
        <main className="flex-1">
          <div className="animate-section">
            <Hero onCopyText={handleCopyText} copiedText={copiedText} />
          </div>

          <div className="animate-section">
            <About />
          </div>

          <div className="animate-section">
            <Skills />
          </div>

          <div className="animate-section">
            <Experience onSelectProject={() => {}} />
          </div>

          <div className="animate-section">
            <FeaturedProject onOpenCaseStudy={() => setIsCaseStudyOpen(true)} />
          </div>

          <div className="animate-section">
            <ProjectsGrid onSelectProject={(p) => setSelectedProject(p)} />
          </div>

          <div className="animate-section">
            <Education />
          </div>

          <div className="animate-section">
            <Certifications />
          </div>

          <div className="animate-section">
            <Contact onCopyText={handleCopyText} copiedText={copiedText} />
          </div>
        </main>
        <ScrollingUpIcon />

        {/* Footer */}
        <Footer />
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

      {/* Individual Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}

export default App;
