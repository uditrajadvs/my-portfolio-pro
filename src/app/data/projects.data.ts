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
    title: 'Shopify - Almarai India and freelance client projects',
    organization: 'Freelance',
    period: experienceData[1].period,
    description: 'Contributed to the Almarai India Shopify engagement and other freelance client projects, with a focus on Java/MySQL backend reliability and responsive web experiences.',
    highlights: [
      'Stabilized 10+ Java/MySQL backend modules through bug fixes and refactoring, improving API reliability across client projects.',
      'Developed and enhanced 10+ responsive web pages using HTML, CSS, media queries, JavaScript, and Angular for desktop and mobile devices.',
      'Delivered frontend navigation, responsive layouts, and form validation, reducing UI issues by 30% during client UAT.',
      'Worked with clients to define requirements and deliver on time, resolving 50+ bugs across frontend and backend.',
    ],
    technologies: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Angular'],
  },
];
