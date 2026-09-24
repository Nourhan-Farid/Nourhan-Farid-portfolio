import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-t border-slate-900/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>07 // Verified Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-xl">
            External credentials validating responsive development standards and advanced React application architecture.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  {cert.title}
                </h3>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Validated Competencies:
                  </span>
                  {cert.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Certificate on File</span>
                <span className="text-emerald-400 font-medium">Available on Request</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
