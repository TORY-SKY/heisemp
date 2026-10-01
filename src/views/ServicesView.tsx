import React, { useEffect, useRef } from 'react';
import { PageView } from '../types';
import { servicesData } from '../data/services';
import { ArrowUpRight, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: PageView) => void;
  selectedServiceId?: string | null;
  onClearSelectedService?: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  selectedServiceId,
  onClearSelectedService,
}) => {
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (selectedServiceId && serviceRefs.current[selectedServiceId]) {
      setTimeout(() => {
        serviceRefs.current[selectedServiceId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
    }
  }, [selectedServiceId]);

  return (
    <div className="pt-36 sm:pt-44 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-20 sm:space-y-28">
      {/* Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#E85D34]" />
          <span>Our Services</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance">
          DESIGN & DIGITAL EXPERIENCES FOR MODERN BUSINESSES.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
          We combine visual identity, modern e-commerce engineering, and editorial web design to deliver measurable outcomes. Explore our six core service specializations below.
        </p>
      </section>

      {/* Quick Nav Anchor Pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-white/10 pb-6">
        {servicesData.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              serviceRefs.current[s.id]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }}
            className="px-4 py-2 rounded-full bg-[#0E1015] hover:bg-[#1A1D24] border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Services List - Editorial Breakdown */}
      <div className="space-y-16">
        {servicesData.map((service) => {
          const isHighlighted = selectedServiceId === service.id;

          return (
            <div
              key={service.id}
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              className={`p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#0E1015] border transition-all duration-300 space-y-10 ${
                isHighlighted
                  ? 'border-[#E85D34] shadow-2xl shadow-[#E85D34]/10 ring-1 ring-[#E85D34]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[#E85D34] font-bold">
                      {service.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-neutral-400">
                      SERVICE SPECIFICATION
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                    {service.name}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5">
                    <Clock className="w-3.5 h-3.5 text-[#E85D34]" />
                    <span>Typical Timeline: {service.timeline}</span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 max-w-3xl">
                <p className="text-lg text-neutral-200 leading-relaxed font-medium">
                  {service.shortDescription}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Grid: What is included & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* What is included */}
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#E85D34]">
                    What’s Included
                  </h3>
                  <ul className="space-y-3 text-sm text-neutral-300">
                    {service.whatIsIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#E85D34] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                    Typical Deliverables
                  </h3>
                  <ul className="space-y-3 text-sm text-neutral-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D34] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Suitable For Footer Bar */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span>
                    <strong className="text-neutral-300">Ideal For:</strong> {service.suitableFor}
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 text-[#E85D34] hover:text-white font-medium transition-colors"
                >
                  <span>Start inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Services CTA */}
      <section className="p-10 sm:p-16 rounded-2xl bg-gradient-to-b from-[#13161D] to-[#0A0B0E] border border-white/10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
          Need a Custom Combination of Services?
        </h2>
        <p className="text-base text-neutral-300 max-w-xl mx-auto">
          Many of our client partnerships blend brand identity, bespoke web design, and full Shopify e-commerce buildouts. Let’s create a tailored scope for your goals.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#E85D34]/20 active:scale-95"
          >
            <span>REQUEST A CUSTOM SCOPE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
