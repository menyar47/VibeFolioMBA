import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, ArrowRight, CheckCircle, Quote, Maximize2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Keyboard escape listener & scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, activeImage, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-6">
        {/* Click outside to close backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-0"
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl bg-white text-neutral-900 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-neutral-100 px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-sm uppercase">
                CASE STUDY
              </span>
              <span className="text-sm font-semibold text-neutral-400 hidden sm:inline">
                / {project.client}
              </span>
            </div>

            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors focus:outline-hidden"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto px-6 md:px-12 py-8 space-y-12">
            {/* Title & Metadata */}
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl font-medium leading-relaxed">
                {project.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Cover Image */}
            <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 group">
              <img
                src={project.coverImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[480px] object-cover"
              />
              <button
                onClick={() => setActiveImage(project.coverImage)}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-medium px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full Image</span>
              </button>
            </div>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200/80">
              <div>
                <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Client</span>
                <span className="text-sm font-bold text-neutral-900">{project.client}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Category</span>
                <span className="text-sm font-bold text-neutral-900">{project.category}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Year</span>
                <span className="text-sm font-bold text-neutral-900">{project.year}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Lead Designer</span>
                <span className="text-sm font-bold text-neutral-900">Julian Vance</span>
              </div>
            </div>

            {/* Section 1: The Problem */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 uppercase font-mono">
                  01 // THE PROBLEM STATEMENT
                </h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal bg-neutral-50/50 p-6 rounded-lg border-l-4 border-blue-600">
                {project.problem}
              </p>
            </div>

            {/* Section 2: Process & Methodology */}
            <div className="space-y-6 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 uppercase font-mono">
                  02 // DESIGN PROCESS & METHODOLOGY
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-blue-600/50 transition-colors"
                  >
                    <h3 className="text-base font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600 font-mono text-sm">{step.title}</span>
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Image Gallery */}
            <div className="space-y-6 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 uppercase font-mono">
                  03 // VISUAL IMAGE GALLERY
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(img.url)}
                    className="group cursor-pointer rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 space-y-2 hover:border-blue-600 transition-colors"
                  >
                    <div className="relative overflow-hidden aspect-4/3">
                      <img
                        src={img.url}
                        alt={img.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                          Enlarge Image
                        </span>
                      </div>
                    </div>
                    <p className="px-4 pb-4 text-xs font-medium text-neutral-600 italic">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Outcome & Impact */}
            <div className="space-y-6 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 uppercase font-mono">
                  04 // OUTCOME & IMPACT
                </h2>
              </div>

              <div className="p-8 bg-neutral-900 text-white rounded-xl space-y-6">
                <p className="text-lg font-medium text-neutral-200 leading-relaxed">
                  {project.outcome.summary}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400">
                    KEY RESULT METRICS
                  </h4>
                  <ul className="space-y-2">
                    {project.outcome.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.outcome.testimonial && (
                  <div className="mt-6 p-6 bg-neutral-800/80 rounded-lg border border-neutral-700/60 relative">
                    <Quote className="w-8 h-8 text-blue-500/30 absolute top-4 right-4" />
                    <p className="text-sm font-medium text-neutral-200 italic mb-3 relative z-10">
                      "{project.outcome.testimonial.quote}"
                    </p>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {project.outcome.testimonial.author}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {project.outcome.testimonial.role}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Bottom Project Navigator */}
            <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => onSelectProject(prevProject.id)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold text-neutral-700 hover:text-blue-600 px-4 py-2.5 rounded-md border border-neutral-200 hover:border-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev: {prevProject.title}</span>
              </button>

              <button
                onClick={() => onSelectProject(nextProject.id)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold text-neutral-700 hover:text-blue-600 px-4 py-2.5 rounded-md border border-neutral-200 hover:border-blue-600 transition-colors"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Lightbox for gallery image enlargement */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white p-2 hover:text-blue-400"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={activeImage}
              alt="Enlarged view"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
