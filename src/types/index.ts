export type PageView = 'home' | 'about' | 'services' | 'work' | 'contact';

export type ProjectCategory = 
  | 'ALL' 
  | 'WEB DESIGN' 
  | 'SHOPIFY' 
  | 'E-COMMERCE' 
  | 'BRANDING' 
  | 'GRAPHIC DESIGN';

export interface Project {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: ProjectCategory[];
  categoryDisplay: string;
  year: string;
  image: string;
  overview: string;
  challenge: string;
  approach: string;
  designProcess: string;
  finalResult: string;
  servicesProvided: string[];
  deliverables: string[];
  livePreviewUrl?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  whatIsIncluded: string[];
  timeline: string;
  suitableFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  project: string;
  rating: number;
}
