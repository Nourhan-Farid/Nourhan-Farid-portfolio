import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { 
  personalInfo, 
  skillCategories, 
  experienceData, 
  featuredProject, 
  educationData, 
  certificationsData 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-4xl bg-slate-950/50 border border-slate-800 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Top Actions */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-800/50">
              Verified CV Profile
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Ready for Recruiter Review & Printing
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 text-sm">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1
              id="resume-title"
              className="text-2xl sm:text-3xl font-extrabold text-white"
            >
              {personalInfo.name}
            </h1>
            <p className="text-emerald-400 font-semibold text-base mt-1">
              {personalInfo.role}
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-6 mt-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <span className="font-semibold text-white block mb-1">
                    {cat.category}:
                  </span>
                  <span className="text-slate-300">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Experience & Internships
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-bold text-white text-sm">
                      {exp.role} —{" "}
                      <span className="text-emerald-400">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Featured Project
            </h2>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-white text-sm">
                  {featuredProject.title}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredProject.period}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {featuredProject.overview}
              </p>
              <div className="text-xs font-mono text-slate-400">
                Technologies: {featuredProject.technologies.join(", ")}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
                Education
              </h2>
              <div className="space-y-3">
                {educationData.map((edu, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-slate-900 border border-slate-800"
                  >
                    <span className="font-semibold text-white text-xs block">
                      {edu.degree}
                    </span>
                    <span className="text-emerald-400 text-xs block">
                      {edu.institution} ({edu.period})
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
                Certifications & Languages
              </h2>
              <div className="space-y-3">
                {certificationsData.map((cert, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-slate-900 border border-slate-800"
                  >
                    <span className="font-semibold text-white text-xs block">
                      {cert.title}
                    </span>
                    <span className="text-cyan-400 text-xs block">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Topics: {cert.topics.join(", ")}
                    </span>
                  </div>
                ))}

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                  <span className="font-semibold text-white block mb-1">
                    Languages:
                  </span>
                  <span className="text-slate-300">
                    Arabic (Native), English (Professional Working Proficiency)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90 flex justify-between items-center">
          <span className="text-xs text-slate-500 font-mono">
            Contact: nourhanfarid883@gmail.com
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
