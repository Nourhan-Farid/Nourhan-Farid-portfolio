import React, { useState } from "react";
import {
  Code,
  Layers,
  Palette,
  Smartphone,
  Database,
  Users,
  Sparkles,
  Terminal,
  Cpu,
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-5 h-5 text-emerald-400" />;
      case "layers":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "palette":
        return <Palette className="w-5 h-5 text-teal-400" />;
      case "smartphone":
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case "database":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "users":
        return <Users className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 border-t border-slate-900/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Organized by domain with verified hands-on proficiency,
              emphasizing modern front-end standards rather than arbitrary
              percentage meters.
            </p>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap gap-1 self-start md:self-auto dark:bg-background-800 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-emerald-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All (
              {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.category
                    ? "bg-emerald-400 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.category.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-950/10 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl dark:bg-background-800 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-[12px] text-slate-400 line-clamp-1">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium dark:bg-background-800 hover:bg-slate-800 text-slate-200 border border-slate-700/50 hover:border-emerald-500/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="pt-5 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{group.skills.length} skills listed</span>
                <span className="text-emerald-400/80 font-medium">
                  Applied in Projects
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality assurance banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-100 via-emerald-50 to-white dark:from-emerald-950/20 dark:via-transparent dark:to-transparent border border-emerald-400 dark:border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Modern Front-End Standards
              </h4>
              <p className="text-xs text-slate-400">
                All projects adhere to semantic HTML, accessibility (ARIA),
                responsive mobile-first views, and clean state flows.
              </p>
            </div>
          </div>
          <a
            href="#featured"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-950  bg-accent-500 hover:bg-accent-400 border border-accent-400/60 transition-colors shrink-0"
          >
            See Code in Action &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
