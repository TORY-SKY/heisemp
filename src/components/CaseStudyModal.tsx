import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-5xl my-auto bg-[#0E1015] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#0E1015]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center space-x-3 text-xs text-neutral-400">
            <span className="font-mono text-[#E85D34]">CASE STUDY</span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#E85D34]"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
          {/* Main Title & Client */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E85D34] font-semibold">
              {project.client}
            </span>
            <h2
              id="case-study-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white"
            >
              {project.title}
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Hero Media Container */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* 3-Column Quick Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5 text-sm">
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Role & Services</p>
              <ul className="space-y-1 text-neutral-300">
                {project.servicesProvided.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E85D34]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Key Deliverables</p>
              <ul className="space-y-1 text-neutral-300">
                {project.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34] shrink-0" />
                    <span className="truncate">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Timeline & Delivery</p>
              <p className="text-neutral-300 font-medium">{project.year} Production Release</p>
              <p className="text-xs text-neutral-400 mt-1">Full responsive desktop & mobile deployment</p>
            </div>
          </div>

          {/* Editorial Case Study Content */}
          <div className="space-y-10 text-neutral-300 leading-relaxed max-w-4xl">
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#E85D34] font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>01. Project Overview</span>
              </h3>
              <p className="text-base text-neutral-200">
                {project.overview}
              </p>
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  The Challenge
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Strategic Approach
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Design Process */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Design & Engineering Process
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.designProcess}
              </p>
            </div>

            {/* Final Result */}
            <div className="p-6 rounded-xl bg-[#E85D34]/10 border border-[#E85D34]/20 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#E85D34]">
                The Result
              </h4>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {project.finalResult}
              </p>
            </div>
          </div>

          {/* Modal Bottom CTA */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-white">Interested in a similar digital experience?</p>
              <p className="text-xs text-neutral-400">Let's discuss your project scope, timeline, and goals.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md active:scale-95 whitespace-nowrap"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
