export const skillsData = [
        { title: 'Programming', skills: ['Java', 'C++', 'JavaScript'] },
        { title: 'Backend', skills: ['Spring Boot', 'Spring Framework', 'REST APIs', 'Microservices', 'MyBatis'] },
        { title: 'Integration and messaging', skills: ['Apache Camel', 'ActiveMQ', 'Apache Kafka'] },
        { title: 'Databases', skills: ['Oracle SQL', 'MySQL'] },
        { title: 'Testing and quality', skills: ['JUnit', 'SonarLint'] },
        { title: 'Build and DevOps', skills: ['Maven', 'Jenkins', 'Git', 'GitHub', 'Bitbucket', 'Docker'] },
        { title: 'Tools and platforms', skills: ['Postman', 'Swagger/OpenAPI', 'Linux', 'Tomcat', 'AWS', 'IntelliJ IDEA', 'Confluence', 'VS Code', 'STS'] },
        { title: 'AI tools', skills: ['Gemini', 'GitHub Copilot', 'ChatGPT', 'Cursor', 'Claude Code'] },
        { title: 'Engineering concepts', skills: ['OOP', 'JVM', 'SDLC', 'Data Structures and Algorithms', 'System Design'] },
      ];

export const previewSkills = ['Java', 'Spring Boot', 'REST APIs', 'Microservices'];

export const skillIcons: Record<string, string> = {
  Gemini: 'gemini', 'GitHub Copilot': 'githubcopilot', ChatGPT: 'chatgpt',
  Cursor: 'cursor', 'Claude Code': 'claudecode',
  Java: 'java', 'C++': 'cplusplus', JavaScript: 'javascript',
  'Spring Boot': 'spring', 'Spring Framework': 'spring',
  STS: 'spring', 'VS Code': 'vscode', Docker: 'docker',
  MySQL: 'mysql', 'Oracle SQL': 'oracle', Git: 'git', GitHub: 'github',
  Jenkins: 'jenkins', Linux: 'linux', Postman: 'postman',
  'Apache Kafka': 'apachekafka', Maven: 'maven', JUnit: 'junit',
  'IntelliJ IDEA': 'intellij', Bitbucket: 'bitbucket', Confluence: 'confluence',
  'Swagger/OpenAPI': 'swagger', Tomcat: 'tomcat', AWS: 'amazonwebservices',
};

// Concept symbols: object hierarchy, virtual machine, lifecycle, tree and architecture.
export const skillIconPaths: Record<string, string> = {
  OOP: 'M9 2h6v6H9V2ZM2 16h6v6H2v-6Zm14 0h6v6h-6v-6ZM12 8v4M5 16v-4h14v4',
  JVM: 'M3 3h18v14H3V3Zm5 18h8M12 17v4M9 7l-3 3 3 3m6-6 3 3-3 3',
  SDLC: 'M20 7a9 9 0 0 0-15-2L2 8m0-5v5h5M4 17a9 9 0 0 0 15 2l3-3m0 5v-5h-5',
  'Data Structures and Algorithms': 'M9 2h6v5H9V2ZM2 17h6v5H2v-5Zm14 0h6v5h-6v-5ZM9 17h6v5H9v-5ZM12 7v10M5 17v-6h14v6',
  'System Design': 'M8 2h8v6H8V2ZM2 16h8v6H2v-6Zm12 0h8v6h-8v-6ZM12 8v4M6 16v-4h12v4',
};

export const categoryIconPaths: Record<string, string> = {
  'AI tools': 'M9 3h6v3H9V3ZM4 8h16v12H4V8ZM8 12h.01M16 12h.01M8 16h8M12 6v2M1 12h3M20 12h3',
  Programming: 'm8 5-6 7 6 7m8-14 6 7-6 7M14 3l-4 18',
  Backend: 'M3 3h18v7H3V3Zm0 11h18v7H3v-7ZM7 6h.01M7 17h.01M11 6h6M11 17h6',
  'Integration and messaging': 'M3 4h7v6H3V4Zm11 10h7v6h-7v-6ZM10 7h7v7M7 10v7h7',
  Databases: 'M20 5c0 2-4 3-8 3s-8-1-8-3 4-3 8-3 8 1 8 3ZM4 5v14c0 2 4 3 8 3s8-1 8-3V5M4 12c0 2 4 3 8 3s8-1 8-3',
  'Testing and quality': 'm12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Zm-5 10 3 3 7-7',
  'Build and DevOps': 'M8 3 4 7l4 4M16 13l4 4-4 4M4 7h10a4 4 0 0 1 4 4M20 17H10a4 4 0 0 1-4-4',
  'Tools and platforms': 'M14 6a5 5 0 0 0-7-3l3 3-4 4-3-3a5 5 0 0 0 7 7l7 7 4-4-7-7a5 5 0 0 0 0-4Z',
  'Engineering concepts': 'M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4Z',
};

export const coreStrengths = ['Problem solving', 'Team collaboration', 'Continuous learning', 'Code quality'];
