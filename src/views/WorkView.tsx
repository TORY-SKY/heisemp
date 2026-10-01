import React, { useState } from 'react';
import { PageView, Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects';
import { ArrowUpRight, Filter } from 'lucide-react';

interface WorkViewProps {
  onNavigate: (page: PageView) => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({
  onNavigate,
  onOpenCaseStudy,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const categories: ProjectCategory[] = [
    'ALL',
    'WEB DESIGN',
    'SHOPIFY',
    'E-COMMERCE',
    'BRANDING',
    'GRAPHIC DESIGN',
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter((project) =>
        project.category.includes(activeCategory)
      );

  return (
    <div className="pt-36 sm:pt-44 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#E85D34]" />
          <span>Selected Portfolio</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance">
          WORK THAT ELEVATES AMBITIOUS BRANDS.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
          Explore our collection of websites, e-commerce flagships, visual identities, and digital brand platforms. Click any project to inspect the case study.
        </p>
      </section>

      {/* Category Filter Controls */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          <Filter className="w-3.5 h-3.5 text-[#E85D34]" />
          <span>Filter by Discipline</span>
        </div>

        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0E1015] border border-white/10 w-fit">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E85D34] text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Visually Dominant Portfolio Grid */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenCaseStudy(project)}
              className="group cursor-pointer rounded-2xl bg-[#0E1015] border border-white/10 hover:border-[#E85D34]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta & Info */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="text-[#E85D34] font-medium tracking-wider uppercase">
                      {project.categoryDisplay}
                    </span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-[#E85D34] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white">
                  <span>Client: {project.client}</span>
                  <span className="inline-flex items-center gap-1 text-[#E85D34] group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#0E1015] border border-white/10 space-y-3">
            <p className="text-base text-white">No projects found in this category.</p>
            <p className="text-xs text-neutral-400">Try selecting "ALL" to view our complete archive.</p>
            <button
              onClick={() => setActiveCategory('ALL')}
              className="px-4 py-2 rounded-full bg-white/10 text-xs font-semibold text-white uppercase hover:bg-white/20 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="p-10 sm:p-16 rounded-2xl bg-gradient-to-b from-[#13161D] to-[#0A0B0E] border border-white/10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
          Have a Project in Mind?
        </h2>
        <p className="text-base text-neutral-300 max-w-xl mx-auto">
          We partner with a limited roster of clients each quarter to guarantee undivided creative focus and exceptional results.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#E85D34]/20 active:scale-95"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
