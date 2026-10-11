import type { CareerRecord } from './common/career-record.model';

export const experienceData: CareerRecord[] = [
  {
    title: 'Software Engineer',
    organization: 'CGI',
    period: 'August 2024 – September 2026',
    location: 'Bangalore / Chennai, India',
    description: 'Contributed to Wealth360, an enterprise wealth-management platform, supporting advisor and portfolio-management workflows.',
    highlights: [
      'Developed and enhanced backend APIs and integration flows across portfolio processing and management-fee capabilities.',
      'Worked with Java, Spring Boot, Apache Camel, MyBatis, Oracle SQL, and asynchronous messaging, reflecting the platform architecture.',
      'Delivered 20+ enhancements and supported financial validations for large account portfolios.',
      'Optimized SQL queries and MyBatis mappings, reducing execution time by up to 70%.',
      'Resolved 50+ production defects through root-cause analysis and authored JUnit tests to reduce regression risk.',
    ],
    technologies: ['Java', 'Spring Boot', 'Apache Camel', 'MyBatis', 'Oracle SQL', 'ActiveMQ', 'JUnit'],
  },
  {
    title: 'Software Development Engineer (Freelance)',
    organization: 'E-commerce and client projects',
    period: 'April 2023 – July 2024',
    location: 'Remote',
    description: 'Delivered backend stabilization and responsive frontend work for freelance client projects, including a Shopify e-commerce engagement.',
    highlights: [
      'Fixed and refactored 10+ Java/MySQL backend modules.',
      'Built and enhanced responsive web pages using HTML, CSS, JavaScript, and Angular.',
      'Implemented navigation, responsive layouts, and form validation; resolved 50+ reported bugs.',
      'Worked with clients to clarify requirements and deliver agreed work on schedule.',
    ],
    technologies: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Angular', 'Shopify'],
  },
];
