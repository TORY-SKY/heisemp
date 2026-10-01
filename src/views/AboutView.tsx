import React from 'react';
import { PageView } from '../types';
import { ArrowUpRight, CheckCircle2, Award, Zap, Code, ShieldCheck, HeartHandshake } from 'lucide-react';
import heroImage from '/src/assets/images/about_studio_creative_1790739860648.jpg';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const toolsAndPlatforms = [
    { name: 'Figma', category: 'Interface & Spatial Prototyping' },
    { name: 'Shopify Plus', category: 'E-commerce Architecture' },
    { name: 'React / Next.js', category: 'Frontend Engineering' },
    { name: 'Tailwind CSS', category: 'Styling Systems' },
    { name: 'Adobe Creative Suite', category: 'Brand & Vector Asset Production' },
    { name: 'Webflow', category: 'Rapid Marketing CMS' },
    { name: 'TypeScript', category: 'Type-Safe Applications' },
    { name: 'Sanity / Strapi', category: 'Headless Content Modeling' },
  ];

  const corePillars = [
    {
      title: 'Intentional Restraint',
      description: 'We reject digital clutter. We strip away superficial decoration so that what remains—your products, your message, and your value proposition—commands absolute attention.'
    },
    {
      title: 'Commercial Velocity',
      description: 'Design must perform in the marketplace. Every layout is calibrated for swift navigation, intuitive information consumption, and effortless customer checkout.'
    },
    {
      title: 'Long-Term Partnership',
      description: 'We operate as an extension of your leadership team, offering continuous strategic design counsel from initial concept through scale.'
    }
  ];

  return (
    <div className="pt-36 sm:pt-44 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">
      {/* 1. Large Introduction Headline */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#E85D34]" />
          <span>About Heisemp Designs</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance">
          WE BUILD DIGITAL IDENTITIES FOR BRANDS THAT REFUSE TO BE IGNORED.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
          Heisemp Designs is an independent digital creative studio. We design high-converting e-commerce experiences, bespoke websites, and distinctive brand identities for modern founders and forward-thinking businesses.
        </p>
      </section>

      {/* 2. Agency Story & Split Visual */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
            OUR STORY
          </span>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Founded on the conviction that craft creates competitive advantage.
          </h2>

          <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
            <p>
              In an internet flooded with generic templates, automated builders, and cookie-cutter designs, businesses increasingly struggle to build authentic connection and pricing power.
            </p>
            <p>
              Heisemp Designs was established to bring editorial standards and architectural rigor back to commercial web design. We treat your digital flagship not as an IT checklist item, but as your most critical commercial touchpoint.
            </p>
            <p>
              From our studio, we collaborate with ambitious clients worldwide—from luxury cosmetics innovators and high-fashion labels to boutique architecture firms and digital creators.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
            <img
              src={heroImage}
              alt="Inside Heisemp Designs Creative Studio"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-xs text-neutral-400 font-mono">
              STUDIO ARCHIVE · CRAFT & DISCIPLINE
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & 4. Design Philosophy */}
      <section className="p-8 sm:p-14 rounded-2xl bg-[#0E1015] border border-white/10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              OUR MISSION
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              To empower ambitious businesses with digital flagships that command respect.
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We engineer web and e-commerce experiences that validate premium pricing, clarify complex value propositions, and turn casual visitors into loyal brand advocates.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
              DESIGN PHILOSOPHY
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Every detail is intentional. Nothing is ornamental filler.
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              True luxury is effortless clarity. We calibrate typography scales, whitespace proportions, responsive breakpoints, and tactile transitions until the experience feels intuitive and inevitable.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePillars.map((pillar, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-xs font-mono text-[#E85D34]">0{idx + 1}</span>
              <h4 className="text-base font-bold text-white tracking-wide">
                {pillar.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Capabilities Overview */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Integrated Studio Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl bg-[#0E1015] border border-white/10 space-y-4">
            <h3 className="text-lg font-display font-bold text-white">Digital Experiences</h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Responsive Web Design (Desktop & Mobile)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Custom Shopify & E-commerce Flagships</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Interactive Wireframing & Prototyping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Modern Website Redesigns & Migrations</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-[#0E1015] border border-white/10 space-y-4">
            <h3 className="text-lg font-display font-bold text-white">Brand Architecture</h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Full Brand Identity & Logo Systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Typography Pairings & Hierarchy Guides</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Packaging, Unboxing & Print Collateral</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Brand Voice & Positioning Guidelines</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-[#0E1015] border border-white/10 space-y-4">
            <h3 className="text-lg font-display font-bold text-white">Creative Execution</h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Social Media Kits & Campaign Graphics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Micro-Interactions & UI Motion States</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>Launch Lookbooks & Digital Lookbooks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D34]" />
                <span>SEO, Accessibility & Performance Audits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Tools & Platforms */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold block">
            TECHNOLOGY & TOOLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Platforms We Master
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">
            We work with industry-standard platforms to deliver scalable, maintainable solutions that your team can run with confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {toolsAndPlatforms.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0E1015] border border-white/5 space-y-1.5"
            >
              <p className="text-base font-bold text-white">{tool.name}</p>
              <p className="text-xs text-neutral-400">{tool.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="p-10 sm:p-16 rounded-2xl bg-gradient-to-b from-[#13161D] to-[#0A0B0E] border border-white/10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
          Let’s Discuss Your Next Move
        </h2>
        <p className="text-base text-neutral-300 max-w-xl mx-auto">
          Whether you need a brand-new e-commerce flagship or a complete visual overhaul, we are ready to bring clarity and craft to your business.
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
