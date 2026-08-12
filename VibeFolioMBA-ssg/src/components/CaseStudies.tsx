import React, { useState } from 'react';
import { motion } from 'motion/react';
import { caseStudies } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, FolderKanban } from 'lucide-react';

interface CaseStudiesProps {
  onSelectProject: (project: Project) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Brand & Visual Identity', 'Editorial & Print', 'Packaging & Systems', 'Digital & UI Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-bold text-blue-600 tracking-widest uppercase px-2.5 py-1 bg-blue-50 rounded-sm">
            02 // CASE STUDIES
          </span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Selected <span className="text-blue-600">Design Works</span>.
            </h2>
            <p className="text-neutral-500 text-base mt-2 max-w-xl">
              In-depth case studies covering brand architectures, editorial monographs, packaging, and design systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3.5 py-2 rounded-full border transition-all duration-200 focus:outline-hidden ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-600 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden aspect-16/10 bg-neutral-100 border-b border-neutral-100">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Category & Year Overlay Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-mono font-bold text-white bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {project.year}
                  </span>
                </div>

                {/* Hover Quick View Trigger Overlay */}
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-blue-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      CLIENT: {project.client}
                    </span>
                    <h3 className="text-2xl font-black text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-neutral-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-neutral-600 transition-colors shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[11px] font-mono text-neutral-400 px-1 py-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state fallback if filter returns no items */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-200">
            <FolderKanban className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-800">No case studies found</h3>
            <p className="text-sm text-neutral-500 mt-1">Try selecting another category filter above.</p>
          </div>
        )}
      </div>
    </section>
  );
};
