import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Building2, 
  Calendar, 
  Code, 
  Layers, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { otherProjects, type ProjectItem } from '../data/portfolioData';

interface ProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'React', 'JavaScript', 'Responsive Web'];

  const filteredProjects = activeFilter === 'All'
    ? otherProjects
    : otherProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>05 // Additional Project Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Other Projects & Practical Applications
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Projects developed across Route Academy, CodeAlpha, and CognoRise InfoTech covering state management, algorithms, and responsive interfaces.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group hover:-translate-y-1"
            >
              <div>
                {/* Header with association & category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                    <Building2 className="w-3 h-3 text-slate-500" />
                    <span>{project.association}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/60">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-800/60 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Inspect Action */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <span>Inspect Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
