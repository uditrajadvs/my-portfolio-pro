import type { CareerRecord } from './common/career-record.model';
import { wealth360Data } from './wealth360.data';

export const experienceData: CareerRecord[] = [
  {
    title: 'Software Engineer',
    organization: 'CGI',
    featured: true,
    period: 'August 2024 – September 2026',
    location: 'Bangalore / Chennai, India',
    description: `Java backend development on ${wealth360Data.name}, an enterprise wealth-management platform for financial advisors and portfolio managers. My work focused on backend APIs, management-fee and portfolio-processing workflows, database performance and production reliability.`,
    highlights: [
      'Developed and enhanced backend APIs and integration flows across portfolio processing and management-fee capabilities.',
      'Worked with Java, Spring Boot, Apache Camel, MyBatis, Oracle SQL, and asynchronous messaging, reflecting the platform architecture.',
      'Delivered 20+ enhancements and supported financial validations for large account portfolios.',
      'Optimized SQL queries and MyBatis mappings, reducing execution time by up to 70%.',
      'Resolved 50+ production defects through root-cause analysis and authored JUnit tests to reduce regression risk.',
      'Investigated request flows across Apache Camel integration routes, Spring Boot services and MyBatis/Oracle data access to isolate backend failures.',
      'Built domain knowledge of service-layer transaction handling, request validation and asynchronous processing in an enterprise financial platform.',
    ],
    technologies: [...wealth360Data.technologies, 'Microservices', 'Jenkins', 'Git', 'Bitbucket', 'Maven', 'Postman', 'Confluence'],
  },
  {
    title: 'Software Development Engineer (Freelance)',
    organization: 'E-commerce and client projects',
    period: 'June 2023 – July 2024',
    location: 'Remote',
    description: 'Supported freelance client applications with Java/MySQL backend maintenance, defect resolution and requirement analysis, alongside web integration work.',
    highlights: [
      'Fixed and refactored 10+ Java/MySQL backend modules.',
      'Investigated application defects and worked with clients to clarify requirements and deliver agreed fixes.',
    ],
    technologies: ['Java', 'MySQL', 'JavaScript', 'Angular'],
  },
];
