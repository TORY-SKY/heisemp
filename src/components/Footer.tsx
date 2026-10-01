import React from 'react';
import { PageView } from '../types';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { HeisempLogo } from './HeisempLogo';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceNav = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] text-neutral-300 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="group focus:outline-none text-left"
              aria-label="Heisemp Designs Home"
            >
              <HeisempLogo variant="full" size="md" />
            </button>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Creative digital experiences for ambitious businesses. We combine strategic design, e-commerce engineering, and brand identity to help brands stand out and grow online.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#E85D34] transition-colors group"
              >
                <span>Start a Project with Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleServiceNav('website-design')}
                  className="hover:text-white text-left transition-colors focus:outline-none"
                >
                  Website Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNav('shopify-ecommerce')}
                  className="hover:text-white text-left transition-colors focus:outline-none"
                >
                  Shopify & E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNav('graphic-design')}
                  className="hover:text-white text-left transition-colors focus:outline-none"
                >
                  Graphic Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNav('brand-identity')}
                  className="hover:text-white text-left transition-colors focus:outline-none"
                >
                  Brand Identity
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNav('website-redesign')}
                  className="hover:text-white text-left transition-colors focus:outline-none"
                >
                  Website Redesign
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-neutral-500 mb-0.5">Email</p>
                <a
                  href="mailto:hello@heisempdesigns.com"
                  className="hover:text-white transition-colors text-white font-medium"
                >
                  hello@heisempdesigns.com
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-0.5">Phone / WhatsApp</p>
                <a
                  href="tel:+2349139963106"
                  className="hover:text-white transition-colors text-neutral-200 font-medium block"
                >
                  +234 913 996 3106
                </a>
                <a
                  href="https://wa.me/2349139963106"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline mt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-neutral-500 mb-1.5">Social Channels</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#E85D34] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#E85D34] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#E85D34] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#E85D34] transition-colors"
                  >
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            © {currentYear} Heisemp Designs. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span>Modern Creative Agency</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Remote Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

