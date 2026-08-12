import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { caseStudies } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectById = (projectId: string) => {
    const found = caseStudies.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Navbar */}
      <Navbar onNavigate={handleNavigate} />

      <main>
        {/* 2. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 3. About Me Section (Below Hero) */}
        <About />

        {/* 4. Case Studies Section */}
        <CaseStudies onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Skills Section */}
        <Skills />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={handleSelectProjectById}
        allProjects={caseStudies}
      />
    </div>
  );
}
