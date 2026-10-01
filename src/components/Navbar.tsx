import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { HeisempLogo } from './HeisempLogo';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Work', page: 'work' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
            : 'bg-transparent py-5 sm:py-6 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Official Heisemp Designs Logo Brand Mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C28] rounded-lg transition-transform active:scale-98"
            aria-label="Heisemp Designs Home"
          >
            <HeisempLogo variant="full" size="md" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 text-sm tracking-wide transition-colors whitespace-nowrap focus:outline-none ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E85D34]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-[#E85D34]/20 active:scale-95 whitespace-nowrap"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E85D34]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090B]/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 sm:p-8 pt-24 overflow-y-auto animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E85D34] font-semibold">
              Navigation
            </span>
            {navItems.map((item, idx) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left text-2xl font-display font-bold tracking-tight transition-colors flex items-center justify-between py-2 border-b border-white/5 ${
                  currentPage === item.page ? 'text-[#E85D34]' : 'text-white hover:text-neutral-300'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
              </button>
            ))}
          </nav>

          <div className="space-y-5 pt-6 border-t border-white/10 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="uppercase tracking-wider text-neutral-500 mb-1">Direct Inquiries</p>
                <a href="mailto:hello@heisempdesigns.com" className="text-sm font-medium text-white hover:text-[#E85D34] transition-colors">
                  hello@heisempdesigns.com
                </a>
              </div>
              <div>
                <p className="uppercase tracking-wider text-neutral-500 mb-1">Phone / WhatsApp</p>
                <a href="tel:+2349139963106" className="text-sm font-medium text-white hover:text-[#E85D34] transition-colors block">
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
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-sm font-semibold tracking-wider uppercase transition-all shadow-md"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

