export interface CareerRecord {
  title: string;
  organization: string;
  period?: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const educationData: CareerRecord[] = [
  {
    title: 'Bachelor of Technology — Electronics and Communication Engineering',
    organization: 'Indian Institute of Information Technology, Ranchi',
    period: '2019 – 2023',
    location: 'Ranchi, India',
    description: 'Graduated with a CGPA of 7.87.',
    highlights: ['Bachelor of Technology', 'CGPA: 7.87'],
  },
];

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

export const projectData: CareerRecord[] = [
  {
    title: 'Wealth360 — wealth-management platform',
    organization: 'CGI',
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
    period: 'April 2023 – July 2024',
    description: 'Responsive frontend and backend maintenance work for freelance projects, including a Shopify e-commerce engagement.',
    highlights: [
      'Enhanced responsive pages and navigation across desktop and mobile layouts.',
      'Stabilized Java/MySQL modules and resolved reported frontend and backend issues.',
    ],
    technologies: ['Shopify', 'Angular', 'JavaScript', 'Java', 'MySQL'],
  },
];

export const achievementData: CareerRecord[] = [
  {
    title: 'Solved 400+ data-structures and algorithms problems',
    organization: 'LeetCode',
    description: 'Practice across algorithmic problem-solving and data structures.',
    highlights: ['400+ problems solved, as stated in the supplied resume.'],
  },
  {
    title: 'Technical onboarding and architecture documentation',
    organization: 'Professional contribution',
    description: 'Authored onboarding guides, architecture runbooks, and domain documentation to help reduce developer setup and ramp-up friction.',
    highlights: ['Created developer-facing setup and domain knowledge materials.'],
  },
  {
    title: 'Mentoring and code reviews',
    organization: 'Team contribution',
    description: 'Supported junior developers and interns through code reviews and architecture walkthroughs.',
    highlights: ['Topics included Java, Spring Boot, REST APIs, and code quality.'],
  },
];

export const certificationData: CareerRecord[] = [
  {
    title: 'Oracle Java Certification',
    organization: 'Oracle',
    description: 'Certification is listed in the supplied resume. Issue date and certificate file/link were not provided.',
    highlights: [],
  },
];