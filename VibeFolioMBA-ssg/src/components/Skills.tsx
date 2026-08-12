import React from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import {
  Palette,
  PenTool,
  BookOpen,
  Layers,
  Type,
  Layout,
  Box,
  Printer,
  Grid,
  Sparkles,
  Compass,
  Image as ImageIcon,
  Check
} from 'lucide-react';

export const Skills: React.FC = () => {
  // Helper function to map string icon names to Lucide icon components
  const renderIcon = (iconName: string) => {
    const iconProps = { className: 'w-6 h-6 text-blue-600' };
    switch (iconName) {
      case 'Palette': return <Palette {...iconProps} />;
      case 'PenTool': return <PenTool {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'Type': return <Type {...iconProps} />;
      case 'Layout': return <Layout {...iconProps} />;
      case 'Box': return <Box {...iconProps} />;
      case 'Printer': return <Printer {...iconProps} />;
      case 'Grid': return <Grid {...iconProps} />;
      case 'Sparkles': return <Sparkles {...iconProps} />;
      case 'Compass': return <Compass {...iconProps} />;
      case 'Image': return <ImageIcon {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-bold text-blue-600 tracking-widest uppercase px-2.5 py-1 bg-blue-50 rounded-sm">
            03 // SKILLS & CAPABILITIES
          </span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Design <span className="text-blue-600">Competencies</span>.
          </h2>
          <p className="text-neutral-500 text-base mt-2 max-w-2xl">
            A structured breakdown of core disciplines, technical capabilities, and creative toolkits.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.id} className="space-y-6">
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-200 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    0{catIndex + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                    {category.categoryName}
                  </h3>
                </div>
                <p className="text-xs text-neutral-500 font-mono">
                  {category.description}
                </p>
              </div>

              {/* Icon Grid for Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.08 }}
                    className="p-6 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-blue-600 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors mb-4">
                        <div className="group-hover:text-white transition-colors">
                          {renderIcon(skill.icon)}
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h4>

                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 group-hover:text-blue-600">
                      <Check className="w-3.5 h-3.5" />
                      <span>Verified Expertise</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
