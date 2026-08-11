import React from 'react';
import { ArrowUp } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-12 px-6 md:px-12 border-t border-neutral-100 text-neutral-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-black text-xl tracking-tighter text-neutral-900">
            {designerInfo.name}<span className="text-blue-600">.</span>
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <p className="text-xs text-neutral-500 font-mono">
            © {currentYear} Julian Vance. All rights reserved.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs font-mono text-neutral-500">
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-neutral-900 transition-colors focus:outline-hidden"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="hover:text-neutral-900 transition-colors focus:outline-hidden"
          >
            Work
          </button>
          <button
            onClick={() => onNavigate('skills')}
            className="hover:text-neutral-900 transition-colors focus:outline-hidden"
          >
            Skills
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-neutral-900 transition-colors focus:outline-hidden"
          >
            Contact
          </button>
        </div>

        {/* Back to Top Button */}
        <button
          id="footer-back-to-top-btn"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-600 hover:text-blue-600 transition-colors focus:outline-hidden"
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  );
};
