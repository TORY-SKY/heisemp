/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageView, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { WorkView } from './views/WorkView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCaseStudy = (project: Project) => {
    setActiveCaseStudy(project);
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudy(null);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#EDEDED] flex flex-col selection:bg-[#E85D34] selection:text-white antialiased">
      {/* Global Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenCaseStudy={handleOpenCaseStudy}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            selectedServiceId={selectedServiceId}
            onClearSelectedService={() => setSelectedServiceId(null)}
          />
        )}

        {currentPage === 'work' && (
          <WorkView
            onNavigate={handleNavigate}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
      />

      {/* Reusable Case Study Modal System */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={handleCloseCaseStudy}
        onStartProject={() => {
          handleCloseCaseStudy();
          handleNavigate('contact');
        }}
      />
    </div>
  );
}
