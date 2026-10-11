import type { CareerRecord } from './common/career-record.model';
import { experienceData } from './experience.data';

export const projectData: CareerRecord[] = [
  {
    title: 'Wealth360 — wealth-management platform',
    organization: experienceData[0].organization,
    period: 'Professional experience',
    description: 'Public-safe overview of backend contributions to a multi-tenant platform for wealth-management workflows. Client institutions and confidential implementation details are intentionally excluded.',
    highlights: [
      'Implemented enhancements around management-fee and portfolio-processing capabilities.',
      'Contributed across API, integration, and Oracle data-access layers.',
      'Improved query execution time by up to 70% through SQL and mapper optimization.',
    ],
    technologies: ['Spring Boot', 'Apache Camel', 'MyBatis', 'Oracle SQL', 'ActiveMQ'],
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
    description: 'Responsive frontend and backend maintenance work for freelance projects, including a Shopify e-commerce engagement.',
    highlights: [
      'Enhanced responsive pages and navigation across desktop and mobile layouts.',
      'Stabilized Java/MySQL modules and resolved reported frontend and backend issues.',
    ],
    technologies: ['Shopify', 'Angular', 'JavaScript', 'Java', 'MySQL'],
  },
];
