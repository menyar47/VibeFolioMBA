import { Project, SkillCategory, StatItem } from '../types';
import brandImg from '../assets/images/brand_identity_case_study_1786466383051.jpg';
import editorialImg from '../assets/images/editorial_design_case_study_1786466398147.jpg';
import packagingImg from '../assets/images/packaging_design_case_study_1786466411476.jpg';

export const designerInfo = {
  name: 'JULIAN VANCE',
  role: 'Graphic & Visual Systems Designer',
  shortBio: 'Crafting memorable visual identities, Swiss typography, and timeless design systems for visionary brands.',
  aboutBio: 'With over eight years of experience operating at the intersection of brand strategy, publication layout, and digital design systems, I help ambitious companies translate complex ideas into clear, iconic visual identities. My methodology is rooted in structural grids, intentional typography, and bold minimal contrast.',
  stats: [
    {
      value: '8+',
      label: 'Years of Experience',
      description: 'Designing brand & visual identities across Europe and North America.'
    },
    {
      value: '140+',
      label: 'Projects Completed',
      description: 'Delivered brand guidelines, editorial monographs, and packaging systems.'
    },
    {
      value: '50+',
      label: 'Clients Worked With',
      description: 'Partnered with tech innovators, luxury brands, and cultural institutions.'
    }
  ] as StatItem[],
  socials: {
    linkedin: 'https://linkedin.com',
    behance: 'https://behance.net',
    email: 'hello@julianvance.design',
    location: 'Zurich & London'
  }
};

export const caseStudies: Project[] = [
  {
    id: 'kinetix-mobility',
    title: 'Kinetix Identity System',
    category: 'Brand & Visual Identity',
    client: 'Kinetix Autonomous Lab',
    year: '2025',
    summary: 'A complete dynamic brand architecture and visual language for a high-tech EV mobility research lab.',
    coverImage: brandImg,
    tags: ['Brand Identity', 'Grid System', 'Type Specimen', 'Logo System'],
    problem: 'Kinetix suffered from fragmented brand touchpoints across their hardware prototyping, investor pitch decks, and digital products. They required an overarching visual system that felt mathematically precise yet human-centric and forward-looking.',
    process: [
      {
        title: '01. Strategic Audit & Discovery',
        description: 'Analyzed competitor landscape in zero-emission mobility and established key visual attributes: precision, kinetic motion, and reduced aesthetic clutter.'
      },
      {
        title: '02. Modular Grid Architecture',
        description: 'Designed a strict 12-column dynamic grid system for logo lockups and typographic hierarchy, permitting fluid adaptation from printed collateral to digital HUD screens.'
      },
      {
        title: '03. Custom Typography & Palette',
        description: 'Selected a high-contrast grotesque typeface paired with an electric cobalt accent color to embody signal clarity and futuristic energy.'
      },
      {
        title: '04. Asset Guidelines & Design Tokens',
        description: 'Compiled a comprehensive 120-page physical brand book and interactive token library for international engineering teams.'
      }
    ],
    galleryImages: [
      {
        url: brandImg,
        caption: 'Primary brand collateral & stationary set embossed on premium cotton paper.'
      },
      {
        url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Modular logo lockups on architectural signage and glass partitions.'
      },
      {
        url: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80',
        caption: 'Custom poster design exploring kinetic typographic motion grids.'
      }
    ],
    outcome: {
      summary: 'The rebranded identity unified Kinetix across 4 international offices, significantly enhancing brand recall and investor confidence.',
      metrics: [
        '100% brand consistency across physical and digital touchpoints',
        'Featured in Mindsparkle Mag and Brand New Review 2025',
        '$45M Series B funding secured following the rebrand'
      ],
      testimonial: {
        quote: 'Julian transformed our technical vision into a striking visual identity that commands immediate respect in our industry.',
        author: 'Elena Rostova',
        role: 'Chief Brand Officer, Kinetix Lab'
      }
    }
  },
  {
    id: 'minimalia-monograph',
    title: 'Minimalia Architectural Journal',
    category: 'Editorial & Print',
    client: 'Minimalia Press',
    year: '2024',
    summary: 'Sleek editorial monograph and publication layout celebrating minimalist brutalist architecture across Europe.',
    coverImage: editorialImg,
    tags: ['Editorial', 'Swiss Typography', 'Print Production', 'Monograph'],
    problem: 'Minimalia needed a biannual publication layout that honored brutalist and minimalist architectural masterpieces without letting graphic elements overpower the photography.',
    process: [
      {
        title: '01. Editorial Grid Blueprint',
        description: 'Engineered an asymmetrical 6-column baseline grid providing generous white margins and tactile breathing room for architectural photography.'
      },
      {
        title: '02. Typographic Pairings',
        description: 'Paired a sharp serif heading typeface with a neutral Swiss sans for caption metadata, balancing classic elegance with archival clarity.'
      },
      {
        title: '03. Tactile Print Specification',
        description: 'Curated uncoated Japanese Fedrigoni paper, blind embossing for the hardcover title, and exposed thread binding.'
      }
    ],
    galleryImages: [
      {
        url: editorialImg,
        caption: 'Hardcover monograph layout featuring Swiss typography and duotone imagery.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Interior double-page spread with generous negative space and baseline alignment.'
      },
      {
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
        caption: 'Detail of blind embossed hardcover lettering and Smyth-sewn binding.'
      }
    ],
    outcome: {
      summary: 'Minimalia Issue 04 sold out its limited run of 5,000 copies in under 48 hours and won the European Editorial Design Gold Award.',
      metrics: [
        '5,000 physical copies sold in 48 hours',
        'Awarded Gold at European Design Awards 2024',
        'Stocked in MoMA and Tate Modern design bookshops'
      ],
      testimonial: {
        quote: 'Julian’s eye for typographic hierarchy and spatial rhythm turned our editorial vision into a true collector’s item.',
        author: 'Marcus Lindqvist',
        role: 'Editor-in-Chief, Minimalia Press'
      }
    }
  },
  {
    id: 'aetheria-packaging',
    title: 'Aetheria Botanical Packaging',
    category: 'Packaging & Systems',
    client: 'Aetheria Skincare',
    year: '2024',
    summary: 'Sustainable luxury cosmetics packaging system crafted with recycled stone paper and minimalist debossed typography.',
    coverImage: packagingImg,
    tags: ['Packaging', 'Unboxing Experience', 'Sustainability', '3D Layout'],
    problem: 'Aetheria sought to eliminate plastic packaging while maintaining a ultra-premium, high-end feel in luxury department stores.',
    process: [
      {
        title: '01. Material Research & Prototyping',
        description: 'Tested compostable stone fibers and water-based soy inks to establish a zero-plastic luxury packaging standard.'
      },
      {
        title: '02. Minimalist Unboxing Geometry',
        description: 'Crafted a seamless origami fold box requiring zero chemical glues, creating a memorable opening gesture.'
      },
      {
        title: '03. Monochromatic Label Hierarchy',
        description: 'Used single-color soy print with silver foil accents to achieve extreme elegance with minimal chemical footprint.'
      }
    ],
    galleryImages: [
      {
        url: packagingImg,
        caption: 'Complete sustainable packaging lineup on raw stone display blocks.'
      },
      {
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Glass bottle label system with tactile debossed serif typography.'
      },
      {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
        caption: 'Unboxing unfold view showing zero-glue structural origami design.'
      }
    ],
    outcome: {
      summary: 'The new packaging expanded Aetheria’s retail footprint to 120+ luxury boutiques worldwide and reduced packaging carbon footprint by 68%.',
      metrics: [
        '68% reduction in packaging carbon footprint',
        'Expanded to 120+ high-end retail stores globally',
        'Dieline Innovation Packaging Winner 2024'
      ],
      testimonial: {
        quote: 'Julian proved that sustainable packaging can feel even more luxurious than conventional plastic alternatives.',
        author: 'Sophie Laurent',
        role: 'Founder, Aetheria Botanicals'
      }
    }
  },
  {
    id: 'nexus-design-system',
    title: 'Nexus Visual Framework',
    category: 'Digital & UI Systems',
    client: 'Nexus Cloud Infrastructure',
    year: '2023',
    summary: 'A unified digital design system and graphic guideline for enterprise developer documentation and web portals.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['UI System', 'Design Tokens', 'Iconography', 'Grid System'],
    problem: 'Nexus needed a cohesive visual language connecting their marketing website, developer documentation, and complex SaaS dashboard.',
    process: [
      {
        title: '01. Visual Language Unification',
        description: 'Established consistent grid structures, color functional roles, and typography scales across both marketing and web application contexts.'
      },
      {
        title: '02. Custom Vector Icon Library',
        description: 'Hand-crafted a bespoke set of 240+ vector line icons based on a strict 24px square matrix with consistent stroke weights.'
      },
      {
        title: '03. Design System Documentation',
        description: 'Published an open-source visual guideline hub for global product teams and third-party developers.'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        caption: 'Design token overview board displaying color ramps, typography, and iconography.'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        caption: 'System implementation across responsive desktop interfaces.'
      }
    ],
    outcome: {
      summary: 'Cut product feature launch visual iteration times by 40% while raising developer documentation NPS from +28 to +64.',
      metrics: [
        '40% faster visual design iteration cycles',
        '+36 point increase in documentation user satisfaction',
        '240+ custom vector icon assets deployed'
      ]
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'brand-identity',
    categoryName: 'Brand & Identity Strategy',
    description: 'Constructing robust brand architectures, distinctive logo systems, and visual guidelines.',
    skills: [
      {
        name: 'Brand Systems & Strategy',
        description: 'Positioning, brand architecture, and visual identity toolkits.',
        icon: 'Palette'
      },
      {
        name: 'Logo System Design',
        description: 'Vector geometry, dynamic mark lockups, and scalable iconography.',
        icon: 'PenTool'
      },
      {
        name: 'Brand Guidelines',
        description: 'Comprehensive design tokens, usage rules, and collateral templates.',
        icon: 'BookOpen'
      },
      {
        name: 'Visual Architecture',
        description: 'Color science, moodboard curation, and strategic visual direction.',
        icon: 'Layers'
      }
    ]
  },
  {
    id: 'editorial-print',
    categoryName: 'Editorial & Print Design',
    description: 'Mastering Swiss grid systems, high-end publications, typography, and sustainable packaging.',
    skills: [
      {
        name: 'Swiss Typography',
        description: 'Precision baseline alignment, hierarchy, and custom type specimens.',
        icon: 'Type'
      },
      {
        name: 'Publication & Layout',
        description: 'Magazine grids, art books, catalogues, and monograph design.',
        icon: 'Layout'
      },
      {
        name: 'Packaging Design',
        description: 'Structural dielines, tactile unboxing, and material selection.',
        icon: 'Box'
      },
      {
        name: 'Print Production',
        description: 'Pre-press optimization, spot colors, foil stamping, and paper craft.',
        icon: 'Printer'
      }
    ]
  },
  {
    id: 'digital-ui',
    categoryName: 'Digital & Graphic Systems',
    description: 'Translating print precision into digital interfaces, graphic design tokens, and motion.',
    skills: [
      {
        name: 'UI Design Systems',
        description: 'Grid systems, component design tokens, and visual layout specs.',
        icon: 'Grid'
      },
      {
        name: 'Custom Iconography',
        description: 'Pixel-perfect vector icon sets crafted on uniform pixel grids.',
        icon: 'Sparkles'
      },
      {
        name: 'Motion & Kinetic Graphics',
        description: 'Subtle micro-animations, poster motion, and layout transitions.',
        icon: 'Compass'
      },
      {
        name: 'Art Direction',
        description: 'Curating photography style, illustration guidelines, and visual assets.',
        icon: 'Image'
      }
    ]
  }
];
