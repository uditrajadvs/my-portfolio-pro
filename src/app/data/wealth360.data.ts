// Public portfolio summary informed by W360_Complete_Architecture-v2.md.
// Platform knowledge is separate from personal delivery claims in experience.data.ts.
export const wealth360Data = {
  name: 'Wealth360',
  domain: 'Enterprise wealth management',
  summary: 'A wealth-management platform supporting financial advisors and portfolio managers through backend APIs, integration services and relational data workflows.',
  technologies: ['Java', 'Spring Boot', 'REST APIs', 'Apache Camel', 'MyBatis', 'Oracle SQL', 'ActiveMQ', 'JUnit'],
  knowledgeAreas: [
    { title: 'API and service layers', description: 'Request validation, business rules and transaction boundaries in Spring Boot services.' },
    { title: 'Enterprise integration', description: 'Apache Camel request routing and transformation between API layers; asynchronous workflows with ActiveMQ.' },
    { title: 'Data access and performance', description: 'Explicit Oracle SQL and MyBatis mappings, with attention to query performance and data correctness.' },
    { title: 'Production investigation', description: 'Tracing requests across integration, service and database layers to understand failures and resolve defects.' },
  ],
};
