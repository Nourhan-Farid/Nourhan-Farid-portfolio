import React from "react";
import {
  Sparkles,
  ShoppingCart,
  Smartphone,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BookOpen,
} from "lucide-react";
import { featuredProject } from "../data/portfolioData";

interface FeaturedProjectProps {
  onOpenCaseStudy: () => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  onOpenCaseStudy,
}) => {
  return (
    <section
      id="featured"
      className="py-20 border-t border-slate-900/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 // Primary Featured Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Case Study
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              An in-depth presentation of real-world front-end engineering:
              dynamic catalog handling, state persistence, API integration, and
              mobile responsiveness.
            </p>
          </div>

          <button
            onClick={onOpenCaseStudy}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 hover:text-white bg-slate-900/50 border border-emerald-500/30 hover:border-emerald-500 hover:bg-slate-800/50 transition-all duration-200 shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Open Interactive Breakdown</span>
          </button>
        </div>

        {/* Featured Case Study Hero Card */}
        <div className="rounded-3xl bg-white bg-gradient-to-b dark:from-background-800 dark:via-background-800 dark:to-background-700 border border-slate-700 shadow-2xl overflow-hidden">
          {/* Card Top Banner / Meta */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Featured Case Study
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredProject.period}
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-slate-400">
                  Route Academy Project
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {featuredProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                {featuredProject.overview}
              </p>
            </div>

            {/* Scale stats badge */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 shrink-0">
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-700/60 text-center lg:text-left">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  Catalog Scale
                </span>
                <span className="text-base font-bold text-emerald-400">
                  100+ Products
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-700/60 text-center lg:text-left">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  State Engine
                </span>
                <span className="text-base font-bold text-cyan-400">
                  Context API
                </span>
              </div>
            </div>
          </div>

          {/* Technologies Used Strip */}
          <div className="px-6 sm:px-8 py-4 bg-slate-950/50 border-b border-slate-800/60 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">
              Technologies Used:
            </span>
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-slate-700/70 text-background-900"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Deep-Dive Grid: Key Features & Technical Details */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-10">
            {/* Key Features Section */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <ShoppingCart className="w-5 h-5 text-emerald-400" />
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Key Features & Capabilities
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {featuredProject.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Split Architecture Section: UI/UX Considerations & Technical Implementation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-800/80">
              {/* UI/UX Considerations */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/50 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-base font-bold text-white">
                    UI/UX Considerations
                  </h4>
                </div>
                <ul className="space-y-3">
                  {featuredProject.uiUxConsiderations.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Implementation */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/50 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-base font-bold text-white">
                    Technical Implementation
                  </h4>
                </div>
                <ul className="space-y-3">
                  {featuredProject.technicalImplementation.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance Considerations */}
            <div className="pt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-amber-400" />
                <h4 className="text-base font-bold text-white">
                  Performance & Optimization Strategy
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuredProject.performanceConsiderations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-xs sm:text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Callout & Recruiter Transparency Note */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-100 via-emerald-50 to-white dark:from-emerald-950/20 dark:via-transparent dark:to-transparent border  border-emerald-400 dark:border-emerald-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white">
                    Recruiter Verification:
                  </strong>{" "}
                  Source code walk-through and component architecture review
                  available on interview request.
                </span>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                <button
                  onClick={onOpenCaseStudy}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-accent-500 hover:bg-accent-400 text-slate-950 transition-colors"
                >
                  Explore Modal Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
