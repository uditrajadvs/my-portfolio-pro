import type { CareerRecord } from './common/career-record.model';
import { experienceData } from './experience.data';
import { wealth360Data } from './wealth360.data';

export const projectData: CareerRecord[] = [
  {
    title: `${wealth360Data.name} — wealth-management platform`,
    featured: true,
    organization: experienceData[0].organization,
    period: 'Professional experience',
    description: wealth360Data.summary,
    knowledgeAreas: wealth360Data.knowledgeAreas,
    highlights: [
      'Implemented enhancements around management-fee and portfolio-processing capabilities.',
      'Contributed across API, integration, and Oracle data-access layers.',
      'Improved query execution time by up to 70% through SQL and mapper optimization.',
    ],
    technologies: wealth360Data.technologies,
  },
  {
    title: 'Ride Sharing Application',
    organization: 'Personal project',
    description: 'Designed a Java ride-sharing system applying object-oriented design and common design patterns.',
    highlights: [
      'Implemented nearest-driver allocation, multiple vehicle types, fare strategies, ride lifecycle, and notifications.',
      'Used Strategy and Observer patterns with SOLID principles.',
      'Validated business logic with JUnit 5 and reported 90%+ code coverage.',
    ],
    technologies: ['Java', 'OOP', 'SOLID', 'Strategy', 'Observer', 'JUnit 5'],
  },
  {
    title: 'Shopify e-commerce and freelance client work',
    organization: 'Freelance',
    period: experienceData[1].period,
    description: 'Java/MySQL backend stabilization and application maintenance for freelance client projects, including a Shopify e-commerce engagement.',
    highlights: [
      'Stabilized Java/MySQL modules and resolved reported frontend and backend issues.',
    ],
    technologies: ['Java', 'MySQL', 'Shopify'],
  },
];
