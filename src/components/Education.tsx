import React from 'react';
import { GraduationCap, CheckCircle2, Atom, Code } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-900/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // Academic & Practical Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-xl">
            A background combining mathematical analysis with rigorous front-end engineering training.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50">
                    {edu.period}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800 text-emerald-400">
                    {edu.degree.includes('Physics') ? (
                      <Atom className="w-5 h-5 text-teal-400" />
                    ) : (
                      <Code className="w-5 h-5 text-emerald-400" />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-emerald-300 mb-4">
                  {edu.institution}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {edu.highlights && (
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-800">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Curriculum Areas:
                    </span>
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {edu.relevanceNote && (
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs text-slate-300">
                    <strong className="text-emerald-300 font-semibold block mb-0.5">Engineering Transfer:</strong>
                    {edu.relevanceNote}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
