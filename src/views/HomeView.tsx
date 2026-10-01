import React from 'react';
import { PageView, Project } from '../types';
import { projectsData } from '../data/projects';
import { servicesData, processSteps, whyWorkWithUsData, placeholderTestimonials } from '../data/services';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Layout, 
  ShoppingBag, 
  PenTool, 
  Fingerprint, 
  RefreshCw, 
  Palette 
} from 'lucide-react';
// importing images
import heroImage from '/src/assets/images/hero_agency_showcase_1790739816700.jpg';

interface HomeViewProps {
  onNavigate: (page: PageView) => void;
  onOpenCaseStudy: (project: Project) => void;
  onSelectService: (serviceId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenCaseStudy,
  onSelectService,
}) => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'website-design':
        return <Layout className="w-5 h-5" />;
      case 'shopify-ecommerce':
        return <ShoppingBag className="w-5 h-5" />;
      case 'graphic-design':
        return <PenTool className="w-5 h-5" />;
      case 'brand-identity':
        return <Fingerprint className="w-5 h-5" />;
      case 'website-redesign':
        return <RefreshCw className="w-5 h-5" />;
      case 'digital-creative':
      default:
        return <Palette className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ======================================================== */}
      {/* STEP 04: HOMEPAGE HERO                                   */}
      {/* ======================================================== */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#E85D34] animate-pulse" />
            <span>Digital Creative Studio</span>
          </div>

          <h1
            style={{ fontSize: '62px', fontFamily: 'system-ui' }}
            className="font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
          >
            WE DESIGN DIGITAL EXPERIENCES <br className="hidden sm:inline" />THAT MAKE BRANDS STAND OUT.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
            We create bold websites, e-commerce experiences and visual identities designed to help modern businesses look better, communicate clearly and grow online.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#E85D34]/20 active:scale-95 whitespace-nowrap"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 hover:border-white text-neutral-200 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap"
            >
              <span>VIEW OUR WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Visual Showcase Area */}
        <div className="mt-14 sm:mt-20 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
          <img
            src={heroImage}
            alt="Heisemp Designs Creative Portfolio Showcase"
            className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
            <span
              style={{ fontWeight: 'normal' }}
              className="font-mono uppercase tracking-widest text-[#E85D34]"
            >
              HEISEMP DESIGNS · SELECTED SHOWCASE
            </span>
            <span className="hidden sm:inline text-neutral-400">
              Web Design · E-commerce · Brand Identity
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 05: INTRODUCTION SECTION                            */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="pt-12 pb-16 border-y border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              THE AGENCY
            </span>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
              DESIGN IS MORE THAN HOW SOMETHING LOOKS. IT’S HOW YOUR BUSINESS IS EXPERIENCED.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed">
              At Heisemp Designs, we combine strategic thinking, bespoke visual design, and clean digital execution to create memorable experiences for forward-looking brands. We believe that clarity, intention, and refined craft build durable trust.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 06: SERVICES SECTION (WHAT WE DO)                   */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Core Capabilities
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
          >
            <span>Explore All Service Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                onSelectService(service.id);
                onNavigate('services');
              }}
              className="group p-8 rounded-xl bg-[#0E1015] border border-white/10 hover:border-[#E85D34]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-[#E85D34]/5"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="font-mono text-sm text-[#E85D34] font-bold">
                    {service.number}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 text-neutral-300 group-hover:text-[#E85D34] group-hover:bg-[#E85D34]/10 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-[#E85D34] transition-colors">
                  {service.name}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-8 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                <span className="uppercase tracking-wider">Learn Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#E85D34]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 07: FEATURED WORK (SELECTED WORK)                   */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Asymmetrical Editorial Portfolio Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {featuredProjects.map((project, index) => {
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                className={`${colSpan} group cursor-pointer space-y-4`}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E85D34] font-medium">
                      {project.categoryDisplay}
                    </p>
                    <h3 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-[#E85D34] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-neutral-400 group-hover:text-white uppercase tracking-wider">
                    View Project
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 08: PROCESS SECTION (FROM IDEA TO LAUNCH)           */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0E1015] border border-white/10 space-y-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              FROM IDEA TO LAUNCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              A disciplined, transparent design process engineered to turn abstract concepts into high-performing digital flagships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-[#E85D34]">
                    {step.step}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block w-12 h-[1px] bg-white/10" />
                  )}
                </div>

                <h3 className="text-lg font-display font-bold text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-300 font-medium">
                  {step.description}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 09: ABOUT SECTION                                   */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              STUDIO PHILOSOPHY
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              CREATIVE THINKING. DIGITAL EXECUTION.
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Heisemp Designs operates at the intersection of design, e-commerce, and digital experiences. We believe that great digital products require both artistic sensibility and disciplined commercial logic.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E85D34] shrink-0" />
                <span>Creative thinking connected directly to business outcomes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E85D34] shrink-0" />
                <span>Obsessive attention to detail in typography, rhythm, and layout</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E85D34] shrink-0" />
                <span>User-focused design that removes friction from customer journeys</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E85D34] shrink-0" />
                <span>Specialized Shopify & modern e-commerce engineering pedigree</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Large Creative Visual Right */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl">
              <img
                src="/src/assets/images/about_studio_creative_1790739860648.jpg"
                alt="Heisemp Designs Creative Studio Workspace"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 10: WHY WORK WITH US                                */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              THE VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithUsData.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#0E1015] border border-white/10 hover:border-white/20 transition-all space-y-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#E85D34]" />
                <h3 className="text-base font-display font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 11: TESTIMONIALS (CLEARLY MARKED PLACEHOLDERS)       */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
                CLIENT FEEDBACK
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                What Clients Say
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono">
              [Sample Client Feedback Placeholders]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholderTestimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-xl bg-[#0E1015] border border-white/10 flex flex-col justify-between space-y-6"
              >
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-white/5 space-y-1">
                  <p className="text-sm font-bold text-white">{t.clientName}</p>
                  <p className="text-xs text-neutral-400">
                    {t.clientRole} · {t.company}
                  </p>
                  <p className="text-[11px] text-[#E85D34] font-mono mt-1">
                    {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* STEP 12: HOMEPAGE CTA                                    */}
      {/* ======================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#13161D] to-[#0A0B0E] border border-white/15 p-10 sm:p-16 lg:p-20 text-center space-y-8 overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-bold block">
              START A CONVERSATION
            </span>

            <h2
              style={{ fontFamily: 'system-ui' }}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              READY TO BUILD SOMETHING GREAT?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Tell us about your project and let’s create a digital experience that represents your business.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#E85D34]/25 active:scale-95 whitespace-nowrap"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 hover:border-white text-white text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap"
            >
              <span>BROWSE ALL WORK</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
