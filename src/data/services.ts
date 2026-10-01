import { ServiceItem, Testimonial } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'website-design',
    number: '01',
    name: 'WEBSITE DESIGN',
    shortDescription: 'Professional responsive websites designed around brand identity and business goals.',
    fullDescription: 'We build digital flagship websites that elevate your business above competitors. Every layout is intentionally constructed with clear information hierarchy, lightning performance, and conversion-focused interaction design.',
    deliverables: [
      'Custom Responsive UI/UX Design',
      'Interactive Figma Prototypes',
      'Mobile & Tablet Responsive Layouts',
      'Design System & Component Library',
      'SEO & Metadata Architecture Guidelines',
      'Clean Production-Ready Handoff'
    ],
    whatIsIncluded: [
      'Comprehensive brand & audience discovery session',
      'Wireframing & user flow optimization',
      'High-fidelity visual design with bespoke typography',
      'Motion design & interactive micro-states',
      'Cross-browser and responsive testing'
    ],
    timeline: '2–4 Weeks',
    suitableFor: 'Modern businesses, creative agencies, consultants, and companies looking for a standout online presence.'
  },
  {
    id: 'shopify-ecommerce',
    number: '02',
    name: 'SHOPIFY & E-COMMERCE',
    shortDescription: 'High-quality Shopify stores and e-commerce experiences designed for modern online businesses.',
    fullDescription: 'From high-converting direct-to-consumer flagships to curated boutique collections, we design seamless e-commerce stores that look breathtaking and turn browsers into loyal customers.',
    deliverables: [
      'Bespoke Shopify Theme Design',
      'Custom Product Detail Page Layouts',
      'High-Conversion Cart & Drawer Checkout UX',
      'Collections & Filtering System Architecture',
      'Third-party App Integration Strategy',
      'Mobile-First E-commerce Optimization'
    ],
    whatIsIncluded: [
      'Customer journey & checkout funnel audit',
      'Custom Shopify 2.0 section architecture',
      'Merchandising layout & badge hierarchy',
      'Payment gateway & shipping setup guidance',
      'Post-launch staff training walkthrough'
    ],
    timeline: '3–6 Weeks',
    suitableFor: 'Fashion labels, beauty & wellness brands, consumer packaged goods, and artisanal creators.'
  },
  {
    id: 'graphic-design',
    number: '03',
    name: 'GRAPHIC DESIGN',
    shortDescription: 'Creative visual assets for campaigns, marketing and digital platforms.',
    fullDescription: 'Compelling visual narratives engineered for marketing impact. We craft sharp editorial graphics, campaign collateral, packaging concepts, and promotional materials that cut through digital noise.',
    deliverables: [
      'Digital Campaign & Social Media Kits',
      'Editorial Print & Packaging Assets',
      'Investor Pitch Decks & Keynotes',
      'Custom Vector Icons & Illustrations',
      'Marketing Landing Page Collateral',
      'Hi-Res Export Formats for Web & Print'
    ],
    whatIsIncluded: [
      'Visual moodboards & creative direction',
      'Concept sketches & typographic studies',
      'Multiple revision rounds for creative alignment',
      'Vector production files (AI, SVG, PDF, PNG)',
      'Usage rules & asset export guidelines'
    ],
    timeline: '1–2 Weeks',
    suitableFor: 'Marketing teams, product launch campaigns, physical brands, and digital publishers.'
  },
  {
    id: 'brand-identity',
    number: '04',
    name: 'BRAND IDENTITY',
    shortDescription: 'Distinctive visual identities that create consistency and recognition.',
    fullDescription: 'Your brand is the sum of every touchpoint. We craft timeless visual identities comprising logo suites, typography pairings, color systems, and comprehensive brand books that empower consistent growth.',
    deliverables: [
      'Primary, Secondary & Sub-Mark Logos',
      'Complete Brand Style Guide & Guidelines',
      'Curated Typography Pairings & Hierarchy',
      'Color Palette with Hex/RGB/CMYK/Pantone',
      'Stationery & Business Collateral Templates',
      'Brand Tone of Voice & Positioning Document'
    ],
    whatIsIncluded: [
      'In-depth competitor & market landscape audit',
      'Strategic brand positioning workshops',
      '3 distinct visual identity directions',
      'Complete vector asset library',
      'Digital brand handbook for internal teams'
    ],
    timeline: '3–5 Weeks',
    suitableFor: 'New ventures, funded startups, and established brands ready for a complete modern repositioning.'
  },
  {
    id: 'website-redesign',
    number: '05',
    name: 'WEBSITE REDESIGN',
    shortDescription: 'Modern redesigns that improve visual quality, usability and user experience.',
    fullDescription: 'Transform an outdated, cluttered, or underperforming website into a high-caliber digital experience. We preserve your hard-won SEO equity while completely overhauling the visual language and user journey.',
    deliverables: [
      'Full UX & Conversion Heuristic Audit',
      'Information Architecture Reconstruction',
      'Modernized Responsive Visual Interface',
      'SEO-Safe URL & Content Transition Plan',
      'Speed & Performance Optimization Plan',
      'Interactive Before/After Design Prototypes'
    ],
    whatIsIncluded: [
      'Data-driven audit of existing drop-off points',
      'Restructuring navigation and content hierarchy',
      'Contemporary typographic and aesthetic overhaul',
      'Mobile UX overhaul for higher touch conversion',
      'Zero-downtime migration coordination'
    ],
    timeline: '2–4 Weeks',
    suitableFor: 'Businesses with legacy websites that no longer match their current quality of service.'
  },
  {
    id: 'digital-creative',
    number: '06',
    name: 'DIGITAL CREATIVE',
    shortDescription: 'Creative digital assets and visual solutions designed to strengthen online presence.',
    fullDescription: 'Specialized digital solutions tailored to modern marketing channels: interactive micro-sites, high-retention launch graphics, custom animations, and immersive digital brand touchpoints.',
    deliverables: [
      'Interactive Campaign Landing Pages',
      'Custom Micro-Interactions & Motion Assets',
      'Email Newsletter Template Systems',
      'High-Impact Digital Billboard & Display Graphics',
      'Creative Direction for Photo & Video Production',
      'Modular Multi-Platform Content Templates'
    ],
    whatIsIncluded: [
      'Creative ideation & creative treatment briefs',
      'Platform-specific dimension and asset compliance',
      'Motion previews and responsive stress-testing',
      'Deliverable package organized for quick team distribution',
      'Ongoing creative direction support'
    ],
    timeline: '1–3 Weeks',
    suitableFor: 'Brands preparing for high-profile launches, seasonal campaigns, and multi-channel creative rollouts.'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand the business, audience and goals.',
    details: 'We begin with an in-depth creative briefing session to analyze your market, study target customer behavior, and define clear measurable project goals.'
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    description: 'Develop the visual and digital direction.',
    details: 'We define the narrative framework, site architecture, and visual moodboards, ensuring every design decision directly supports business objectives.'
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Create the website, brand or creative assets.',
    details: 'We bring concepts to life with meticulous attention to typography, spatial rhythm, interactive micro-states, and high-conversion UX flows.'
  },
  {
    step: '04',
    title: 'LAUNCH',
    description: 'Refine, optimize and deliver the final experience.',
    details: 'Rigorous cross-device testing, speed audits, SEO checkups, and seamless deployment handoff to ensure a confident, flawless public debut.'
  }
];

export const whyWorkWithUsData = [
  {
    title: 'STRATEGIC DESIGN',
    description: 'Design decisions are connected to business goals. We don’t just make things look sleek; we engineer layouts that communicate clearly and drive measurable action.'
  },
  {
    title: 'BUILT FOR PEOPLE',
    description: 'Interfaces are designed around real users and customers. Intuitive navigation, effortless tap targets, and frictionless checkout pathways come standard.'
  },
  {
    title: 'DETAIL-DRIVEN',
    description: 'Every visual element is intentionally considered. From typographic scale and line lengths to hairline borders and subtle hover feedback, nothing is left to chance.'
  },
  {
    title: 'BUSINESS-FOCUSED',
    description: 'The goal is not just beautiful design, but useful digital experiences that build trust, elevate brand perception, and help modern businesses grow online.'
  }
];

export const placeholderTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Working with Heisemp Designs transformed how our brand is perceived online. The attention to typography, spacing, and mobile clarity made an immediate impression on our clients.',
    clientName: 'Elena Vance',
    clientRole: 'Founder & Creative Director',
    company: 'Vance Botanical Lab',
    project: 'E-commerce & Brand Identity',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'The team delivered an exceptional Shopify experience on a demanding schedule. Our checkout experience is now seamless, and our mobile conversion rate saw a measurable uptick.',
    clientName: 'Marcus Thorne',
    clientRole: 'Head of Growth',
    company: 'Atelier Streetwear',
    project: 'Shopify Store Redesign',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Rarely do you find a design partner that understands both high-end aesthetic rigor and real commercial realities. Heisemp Designs executed our vision with total precision.',
    clientName: 'Sophia Lin',
    clientRole: 'Managing Partner',
    company: 'Apex Architecture Group',
    project: 'Corporate Website & Digital Assets',
    rating: 5
  }
];
