export interface CareerRecord {
  title: string;
  organization: string;
  period?: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  document?: { viewHref: string; downloadHref: string };
}
