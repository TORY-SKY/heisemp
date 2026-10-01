import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send,
  Sparkles
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Website Design',
    budget: '$1,000–$2,500',
    timeline: 'Within 1–2 months',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const budgetOptions = [
    'Under $500',
    '$500–$1,000',
    '$1,000–$2,500',
    '$2,500+',
  ];

  const serviceOptions = [
    'Website Design',
    'Shopify & E-commerce',
    'Graphic Design',
    'Brand Identity',
    'Website Redesign',
    'Digital Creative Services',
    'Full Brand & Web Package',
  ];

  const timelineOptions = [
    'Immediately (Rush)',
    'Within 2–4 weeks',
    'Within 1–2 months',
    'Flexible / Planning Phase',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className="pt-36 sm:pt-44 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E85D34] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#E85D34]" />
          <span>Start a Project</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance">
          LET’S CREATE SOMETHING GREAT.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
          Tell us about your project and let’s create a digital experience that represents your business.
        </p>
      </section>

      {/* Main Grid: Form Left, Studio Info Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Form Container */}
        <div className="lg:col-span-8">
          {submitted ? (
            <div className="p-8 sm:p-14 rounded-2xl bg-[#0E1015] border border-[#E85D34]/30 space-y-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#E85D34]/20 border border-[#E85D34] flex items-center justify-center text-[#E85D34]">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Project Inquiry Received
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We have registered your request for <strong className="text-[#E85D34]">{formData.service}</strong>. Our creative director will review your project scope and respond to <strong className="text-white">{formData.email}</strong> within 24 business hours.
                </p>
              </div>

              {/* Inquiry Summary Review */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 text-xs text-neutral-400">
                <p className="font-mono text-white uppercase tracking-wider">Inquiry Summary</p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <span className="text-neutral-500 block">Service Selected:</span>
                    <span className="text-neutral-200 font-medium">{formData.service}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Estimated Budget:</span>
                    <span className="text-neutral-200 font-medium">{formData.budget}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Target Timeline:</span>
                    <span className="text-neutral-200 font-medium">{formData.timeline}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Company:</span>
                    <span className="text-neutral-200 font-medium">{formData.company || 'Not Specified'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: 'Website Design',
                      budget: '$1,000–$2,500',
                      timeline: 'Within 1–2 months',
                      description: '',
                    });
                  }}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                >
                  Submit Another Inquiry
                </button>

                <button
                  onClick={() => onNavigate('work')}
                  className="px-6 py-3 rounded-full border border-white/20 hover:border-white text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                >
                  Browse Portfolio
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 rounded-2xl bg-[#0E1015] border border-white/10 space-y-8 shadow-xl"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-neutral-400">
                  Please provide details about your timeline, scope, and objectives.
                </p>
              </div>

              {/* 2-Column Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                    Your Name <span className="text-[#E85D34]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexandra Smith"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#E85D34] focus:ring-1 focus:ring-[#E85D34] text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                    Email Address <span className="text-[#E85D34]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alexandra@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#E85D34] focus:ring-1 focus:ring-[#E85D34] text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none"
                  />
                </div>
              </div>

              {/* Company & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Atelier Studio"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#E85D34] focus:ring-1 focus:ring-[#E85D34] text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                    Primary Service Needed <span className="text-[#E85D34]">*</span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08090B] border border-white/10 focus:border-[#E85D34] focus:ring-1 focus:ring-[#E85D34] text-sm text-white transition-colors focus:outline-none"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Options */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                  Anticipated Budget Range <span className="text-[#E85D34]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`p-3 rounded-xl text-xs font-semibold tracking-wider transition-all border text-center ${
                        formData.budget === b
                          ? 'border-[#E85D34] bg-[#E85D34]/10 text-white'
                          : 'border-white/10 bg-black/30 text-neutral-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Options */}
              <div className="space-y-2">
                <label htmlFor="timeline" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#08090B] border border-white/10 focus:border-[#E85D34] focus:ring-1 focus:ring-[#E85D34] text-sm text-white transition-colors focus:outline-none"
                >
                  {timelineOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                  Project Description & Goals <span className="text-[#E85D34]">*</span>
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your brand, current challenges, inspiration links, and what a successful launch looks like for your business..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#E85D34] focus:ring-1 focus:ring-[#E85D34] text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#E85D34] hover:bg-[#d64e26] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#E85D34]/20 active:scale-98 disabled:opacity-50"
              >
                {submitting ? (
                  <span>SENDING INQUIRY...</span>
                ) : (
                  <>
                    <span>SEND PROJECT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Studio Direct Info Right */}
        <div className="lg:col-span-4 space-y-8">
          {/* Direct Details Card */}
          <div className="p-8 rounded-2xl bg-[#0E1015] border border-white/10 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E85D34] font-semibold block">
              DIRECT INQUIRIES
            </span>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#E85D34] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-neutral-400">Email Inquiries</p>
                  <a
                    href="mailto:hello@heisempdesigns.com"
                    className="font-medium text-white hover:text-[#E85D34] transition-colors"
                  >
                    hello@heisempdesigns.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E85D34] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-neutral-400">Phone</p>
                  <a
                    href="tel:+2349139963106"
                    className="font-medium text-white hover:text-[#E85D34] transition-colors block"
                  >
                    +234 913 996 3106
                  </a>
                  <a
                    href="https://wa.me/2349139963106"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline mt-1"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E85D34] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-neutral-400">Studio Hours</p>
                  <p className="font-medium text-white">
                    Monday — Friday, 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-neutral-400">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E85D34] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-neutral-400">Studio Reach</p>
                  <p className="font-medium text-white">
                    Global Remote Collaboration
                  </p>
                  <p className="text-xs text-neutral-400">Partnering with clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="p-8 rounded-2xl bg-[#0E1015] border border-white/10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect Across Channels
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E85D34]" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E85D34]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E85D34]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E85D34]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
