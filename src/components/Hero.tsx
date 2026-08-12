import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, Eye, Sparkles } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { designerInfo } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 bg-white overflow-hidden border-b border-neutral-100"
    >
      {/* Subtle Animated Canvas Background */}
      <HeroCanvas />

      {/* Decorative Grid Markers (Swiss Typographic Grid aesthetics) */}
      <div className="absolute top-8 left-8 hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase pointer-events-none">
        <span>BRAND STRATEGY // 01</span>
        <span>•</span>
        <span>MONTREAL / QUEBEC</span>
      </div>

      <div className="absolute top-8 right-8 hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase pointer-events-none">
        <span>LAYOUT DESIGN</span>
        <span>•</span>
        <span>PRINT</span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Designer Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200 text-xs font-semibold text-neutral-700 mb-6 tracking-wide uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{designerInfo.role}</span>
        </motion.div>

        {/* Bold Headline with Designer's Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-neutral-900 uppercase leading-[0.9] mb-6"
        >
          {designerInfo.name}
          <span className="text-blue-600">.</span>
        </motion.h1>

        {/* Short One-Line Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl font-medium leading-relaxed mb-10 tracking-tight"
        >
          {designerInfo.shortBio}
        </motion.p>

        {/* Two CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Button 1: Contact for Work */}
          <button
            id="hero-contact-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-md shadow-lg shadow-blue-600/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Contact for Work</span>
          </button>

          {/* Button 2: View Selected Work */}
          <button
            id="hero-work-btn"
            onClick={() => onNavigate('work')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white font-bold text-base px-8 py-4 rounded-md border-2 border-neutral-900 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4" />
            <span>View Selected Work</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <button
            id="hero-scroll-down-btn"
            onClick={() => onNavigate('about')}
            className="group flex flex-col items-center text-xs font-mono tracking-widest text-neutral-400 hover:text-neutral-900 uppercase transition-colors focus:outline-hidden"
          >
            <span className="mb-1">SCROLL DOWN</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-blue-600" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
