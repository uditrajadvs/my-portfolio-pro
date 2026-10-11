export interface CareerRecord {
  title: string;
  organization: string;
  period?: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  featured?: boolean;
  knowledgeAreas?: { title: string; description: string }[];
  document?: { viewHref: string; downloadHref: string };
}
