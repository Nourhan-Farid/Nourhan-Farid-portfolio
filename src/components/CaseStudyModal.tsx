import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Zap, Info } from "lucide-react";
import { featuredProject } from "../data/portfolioData";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "features" | "architecture" | "performance"
  >("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-4xl bg-slate-950/50 border border-slate-800 rounded-2xl shadow-2xl shadow-black/80 max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Primary Case Study
              </span>
              <span className="text-xs font-mono text-slate-400">
                {featuredProject.period}
              </span>
            </div>
            <h2
              id="case-study-title"
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              {featuredProject.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {featuredProject.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-900/80 gap-2 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === "overview"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Project Overview
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === "features"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Key Features ({featuredProject.features.length})
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === "architecture"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            UI/UX & Architecture
          </button>
          <button
            onClick={() => setActiveTab("performance")}
            className={`py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === "performance"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Performance & State
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Executive Summary
                </h3>
                <p className="leading-relaxed text-slate-300">
                  {featuredProject.overview}
                </p>
              </div>

              {/* Highlights Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {featuredProject.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60"
                  >
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      {h.label}
                    </span>
                    <span className="text-xs font-semibold text-emerald-300">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-base font-semibold text-white mb-3">
                  Technologies & Tooling
                </h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800 border border-slate-700 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic & Recruiter Link Notice */}
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 flex items-start gap-3">
                <Info className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white block mb-0.5">
                    Academic & Evaluation Notice:
                  </span>
                  This project was built under Route Academy’s front-end
                  program. Code reviews, source code repository inspection, and
                  live architecture demonstrations are available upon request
                  during technical interview evaluations.
                </div>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-base font-semibold text-white">
                Full Feature Implementation
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuredProject.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-base font-semibold text-white mb-3">
                  UI / UX Design Decisions
                </h3>
                <div className="space-y-2.5">
                  {featuredProject.uiUxConsiderations.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h3 className="text-base font-semibold text-white mb-3">
                  Technical Implementation Details
                </h3>
                <div className="space-y-2.5">
                  {featuredProject.technicalImplementation.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-base font-semibold text-white">
                Performance & Optimization Strategy
              </h3>
              <div className="space-y-3">
                {featuredProject.performanceConsiderations.map((perf, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/70 flex items-start gap-3"
                  >
                    <Zap className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-300">{perf}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-400">
            Tech: React.js • Tailwind CSS • REST APIs
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => onClose()}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-400 transition-colors"
            >
              Inquire About Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
