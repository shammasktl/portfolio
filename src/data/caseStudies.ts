import projectsData from "./projects.json";

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
  description?: string;
}

export interface TechStackItem {
  name: string;
  role: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'design' | 'infrastructure';
}

export interface SolutionFeature {
  title: string;
  description: string;
  tag?: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: 'ux' | 'dev' | 'branding';
  categoryLabel: string;
  client: string;
  timeline: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  heroImage: string;
  heroImageAlt: string;
  summary: string;
  metrics: MetricItem[];
  challenge: {
    headline: string;
    description: string;
    keyPoints: string[];
  };
  architecture: {
    headline: string;
    description: string;
    techStack: TechStackItem[];
  };
  solution: {
    headline: string;
    description: string;
    features: SolutionFeature[];
    gallery: GalleryItem[];
  };
  impact: {
    headline: string;
    description: string;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
      company: string;
      avatar?: string;
    };
  };
}

export const caseStudies = projectsData as CaseStudy[];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): { prev?: CaseStudy; next?: CaseStudy } {
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  if (index === -1) return {};

  const prev = index > 0 ? caseStudies[index - 1] : caseStudies[caseStudies.length - 1];
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : caseStudies[0];

  return { prev, next };
}
