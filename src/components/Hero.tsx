import React from "react";
import { ArrowDown, Mail, Phone, Copy, Check, Globe2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface HeroProps {
  onCopyText: (text: string, label: string) => void;
  copiedText: string | null;
}

export const Hero: React.FC<HeroProps> = ({ onCopyText, copiedText }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-600/5 blur-[90px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-300/10 border border-emerald-500/30 text-accent-300 text-xs font-medium mb-6 animate-fade-in shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
          </span>
          <span>Available for Front-End Roles & Internships</span>
        </div>

        {/* Main Headings */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Hi, I’m <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
              {personalInfo.role}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-sm sm:text-base font-mono text-accent-400 bg-accent-300/10 px-3 py-1 rounded-md border border-emerald-800/40">
              React • Next.js • Tailwind CSS • TypeScript
            </span>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed pt-2">
            {personalInfo.summary}
          </p>
        </div>

        {/* Primary & Secondary CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <button
            onClick={() => handleScroll("featured")}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-accent-500 hover:bg-accent-400 text-slate-950 transition-all duration-200 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-950/90 hover:bg-slate-900 text-slate-100 border border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-400"
          >
            Contact Me
          </button>
        </div>

        {/* Quick Contact & Verified Info Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Email Quick Copy */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="p-2 rounded-lg bg-accent-400/10 text-accent-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left truncate">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-medium text-slate-200 hover:text-accent-300 truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => onCopyText(personalInfo.email, "Email address")}
              aria-label="Copy email address"
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors shrink-0"
              title="Copy to clipboard"
            >
              {copiedText === personalInfo.email ? (
                <Check className="w-4 h-4 text-accent-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Quick Copy */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-accent-400/10 text-accent-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Phone
                </p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs sm:text-sm font-medium text-slate-200 hover:text-accent-300 font-mono"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => onCopyText(personalInfo.phone, "Phone number")}
              aria-label="Copy phone number"
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors shrink-0"
              title="Copy to clipboard"
            >
              {copiedText === personalInfo.phone ? (
                <Check className="w-4 h-4 text-accent-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Languages */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 sm:col-span-2 md:col-span-1">
            <div className="p-2 rounded-lg bg-teal-500/10 text-accent-400 shrink-0">
              <Globe2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Languages
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-200">
                Arabic (Native) • English (Proficient)
              </p>
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => handleScroll("about")}
            className="group inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-accent-400 transition-colors focus:outline-none"
            aria-label="Scroll to About Me section"
          >
            <span>Learn more about my background</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-accent-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
