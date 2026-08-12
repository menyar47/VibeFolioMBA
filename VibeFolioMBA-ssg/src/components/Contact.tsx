import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Linkedin, ExternalLink, Mail, MapPin } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

// Custom Behance Icon Component
const BehanceIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 7h-7V5h7v2zm-1.708 3.844c-1.127 0-2.001.32-2.623.959-.623.639-.958 1.583-.958 2.833 0 1.255.32 2.21.958 2.863.639.653 1.527.98 2.663.98 1.547 0 2.7-.587 3.458-1.758l-1.39-1.015c-.443.68-.1092 1.02-.958 1.02-.533 0-.962-.162-1.285-.487-.323-.325-.497-.828-.522-1.508h5.819c.026-.14.039-.319.039-.538 0-1.08-.291-1.936-.873-2.568-.582-.632-1.388-.949-2.42-0.949zm-1.895 2.502c.038-.564.21-.994.516-1.289.306-.295.733-.443 1.281-.443.513 0 .927.142 1.242.427.315.285.491.716.528 1.292h-3.567zm-9.397-6.346h-6v14h6.208c1.627 0 2.871-.383 3.733-1.148.862-.765 1.293-1.815 1.293-3.15 0-.96-.239-1.748-.718-2.363-.479-.615-1.139-1.02-1.98-1.215.68-.22 1.222-.595 1.625-1.125.403-.53.604-1.215.604-2.055 0-1.16-.381-2.062-1.144-2.707-.763-.645-1.872-.967-3.328-.967zm-3.3 2.16h2.738c.84 0 1.488.167 1.943.501.455.334.683.842.683 1.524 0 .668-.239 1.173-.717 1.515-.478.342-1.16.513-2.046.513h-2.601v-4.053zm0 5.893h3.003c.96 0 1.693.205 2.199.615.506.41.759 1.018.759 1.823 0 .84-.265 1.482-.795 1.928-.53.446-1.305.669-2.325.669h-2.842v-5.035z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-blue-600 tracking-widest uppercase px-3 py-1 bg-blue-50 rounded-sm">
            04 // CONTACT & INQUIRIES
          </span>
        </div>

        {/* Headline */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 leading-tight">
            Let's build something <span className="text-blue-600">iconic</span>.
          </h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Have an upcoming brand identity, editorial monograph, or packaging system? Send a message to discuss availability.
          </p>
        </div>

        {/* Centered Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-12 shadow-lg text-left max-w-2xl mx-auto"
        >
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Message Received!</h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Thank you for reaching out. I'll review your project details and get back to you within 24 business hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 underline focus:outline-hidden"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider mb-2"
                >
                  Your Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-hidden transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider mb-2"
                >
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. sarah@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-hidden transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider mb-2"
                >
                  Project Details / Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Describe your project scope, timeline, and deliverables..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-hidden transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 focus:outline-hidden"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Media Links directly below the form (Requested by user: LinkedIn & Behance) */}
        <div className="pt-8 space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            DIRECT SOCIAL CHANNELS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* LinkedIn Link */}
            <a
              id="social-linkedin-link"
              href={designerInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-50 border border-neutral-200 hover:border-blue-600 hover:bg-blue-50 text-neutral-800 hover:text-blue-600 text-sm font-bold transition-all duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Behance Link */}
            <a
              id="social-behance-link"
              href={designerInfo.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-50 border border-neutral-200 hover:border-blue-600 hover:bg-blue-50 text-neutral-800 hover:text-blue-600 text-sm font-bold transition-all duration-200 group"
            >
              <BehanceIcon className="w-5 h-5 text-blue-600" />
              <span>Behance</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Email link */}
            <a
              id="social-email-link"
              href={`mailto:${designerInfo.socials.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-50 border border-neutral-200 hover:border-blue-600 hover:bg-blue-50 text-neutral-800 hover:text-blue-600 text-sm font-bold transition-all duration-200 group"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span>{designerInfo.socials.email}</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Zurich Studio & London Workspace</span>
          </div>
        </div>
      </div>
    </section>
  );
};
