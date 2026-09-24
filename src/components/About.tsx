import React from 'react';
import { Compass, Atom, Code, CheckCircle, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-900/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // Background & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            A developer who bridges analytical problem-solving with clean UI design to build intuitive, accessible web interfaces.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Physics Transition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-lg">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2.5 mb-3">
                <Code className="w-5 h-5 text-emerald-400" />
                <span>Front-End Engineering Focus</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.summary}
              </p>
            </div>

            {/* Transition from Physics */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-lg relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                  <Atom className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Analytical Foundation: From Physics to Code
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {personalInfo.transitionStory}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-200 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mobile-First Responsive Layouts</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-200 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Accessibility & Semantic HTML</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-200 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern React & Clean Components</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-200 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cross-Browser Compatibility</span>
              </div>
            </div>
          </div>

          {/* Recruiter At-A-Glance Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-white text-sm">Recruiter Quick Facts</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Verified CV Data
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Role Category
                  </span>
                  <p className="font-medium text-white">Junior Front-End Developer</p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Primary Tooling
                  </span>
                  <p className="text-slate-300">
                    React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Material UI, REST APIs
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    What I Build
                  </span>
                  <p className="text-slate-300">
                    Responsive e-commerce platforms, interactive dashboards, CRUD web apps, accessible landing pages.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Languages
                  </span>
                  <div className="flex flex-col gap-1 text-slate-200">
                    <span className="flex items-center justify-between">
                      <span>Arabic</span>
                      <span className="text-xs text-slate-400 font-mono">Native</span>
                    </span>
                    <span className="flex items-center justify-between">
                      <span>English</span>
                      <span className="text-xs text-slate-400 font-mono">Professional Working</span>
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                  >
                    <span>Reach Out Directly</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
