export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  coverImage: string;
  tags: string[];
  problem: string;
  process: {
    title: string;
    description: string;
  }[];
  galleryImages: {
    url: string;
    caption: string;
  }[];
  outcome: {
    summary: string;
    metrics: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export interface SkillItem {
  name: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: SkillItem[];
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
