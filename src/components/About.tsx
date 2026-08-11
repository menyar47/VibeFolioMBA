import React from 'react';
import { motion } from 'motion/react';
import { designerInfo } from '../data/portfolioData';
import { CheckCircle2, MapPin, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs font-bold text-blue-600 tracking-widest uppercase px-2.5 py-1 bg-blue-50 rounded-sm">
            01 // ABOUT ME
          </span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Short Bio Paragraph & Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Design is the art of eliminating <span className="text-blue-600 underline decoration-2 underline-offset-4">unnecessary noise</span>.
            </h2>

            {/* Short Bio Paragraph (Requested by user) */}
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              {designerInfo.aboutBio}
            </p>

            <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Based in Zurich & London (Remote Worldwide)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Focus: Brand Systems, Editorial, Packaging</span>
              </div>
            </div>

            {/* Principles summary tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Swiss Grid Systems', 'Mathematical Type Scaling', 'Tactile Print Craft', 'Minimalist Aesthetics'].map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 px-3 py-1.5 rounded-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Three Highlight Stats (Requested by user) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-1 bg-neutral-100 rounded-xl">
              <div className="bg-white rounded-lg p-6 sm:p-8 space-y-6 border border-neutral-200/80 shadow-xs">
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 border-b border-neutral-100 pb-3">
                  CAREER HIGHLIGHTS
                </h3>

                {designerInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative pl-5 border-l-2 border-neutral-200 hover:border-blue-600 transition-colors py-1"
                  >
                    <div className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight flex items-baseline gap-1 group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-base font-bold text-neutral-800 mt-1">
                      {stat.label}
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-normal">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
