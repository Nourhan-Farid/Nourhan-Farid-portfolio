import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Layers, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

interface ExperienceProps {
  onSelectProject?: (projectId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectProject }) => {
  return (
    <section id="experience" className="py-20 border-t border-slate-900/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 // Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience & Internships
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Practical hands-on training and software internships focused on building production-ready components, state management, and responsive interfaces.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors shadow-sm" />

              {/* Date Column on Desktop (placed on the left of timeline) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right mb-2 sm:mb-0">
                <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 font-medium">
                  <Calendar className="w-3 h-3 sm:hidden" />
                  {exp.period.split('–')[0].trim()}
                </span>
                <span className="block text-[11px] font-mono text-slate-500">
                  {exp.period.includes('–') ? exp.period.split('–')[1].trim() : ''}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 shadow-lg group-hover:shadow-emerald-950/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-slate-300 text-sm">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold text-emerald-300">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400 font-mono">{exp.type}</span>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
                    {exp.period}
                  </span>
                </div>

                {/* Key Deliverables & Responsibilities */}
                <div className="space-y-3 mt-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Projects & Deliverables:
                  </p>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-1">Skills:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/50 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
