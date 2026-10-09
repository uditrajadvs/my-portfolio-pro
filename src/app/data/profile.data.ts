export interface PortfolioProfile {
	name: string;
	title: string;
	role: string;
	employer: string;
	focus: string;
	experienceLabel: string;
	summary: string;
	resumeHref: string;
	heroTechnologies: string[];
	quickFacts: { label: string; value: string; symbol: string }[];
	strengths: string[];
	principles: { title: string; description: string; symbol: string }[];
}

export const profileData: PortfolioProfile = {
	name: 'Udit Raj',
	title: 'Java Backend Developer',
	role: 'Software Engineer / Java Backend Developer',
	employer: 'CGI',
	focus: 'JAVA BACKEND DEVELOPER · ENTERPRISE APPLICATIONS',
	experienceLabel: '2+ years',
	summary:
		'Developing and supporting enterprise backend applications with Java, Spring Boot, REST APIs, microservices, SQL, and enterprise integration technologies. Experienced in requirement analysis, unit testing, production troubleshooting, root-cause analysis, performance optimization, and cross-functional collaboration.',
	resumeHref: '/documents/resume/Udit_Raj.pdf',
	heroTechnologies: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
	quickFacts: [
		{ label: 'Experience', value: '2+ years', symbol: '◷' },
		{ label: 'Role', value: 'Software Engineer', symbol: '</>' },
		{ label: 'Domain', value: 'Wealth management', symbol: '↗' },
		{ label: 'Focus', value: 'Backend systems', symbol: '⌘' },
	],
	strengths: [
		'Requirement analysis and backend development',
		'Unit testing and production troubleshooting',
		'Root-cause analysis and performance optimization',
		'Cross-functional collaboration',
	],
	principles: [
		{ title: 'Reliable services', description: 'Build backend systems designed for dependable operation.', symbol: '</>' },
		{ title: 'Clear integration', description: 'Develop REST APIs and enterprise integrations.', symbol: '↔' },
		{ title: 'Quality minded', description: 'Use testing and analysis to support maintainable code.', symbol: '✓' },
		{ title: 'Team collaboration', description: 'Work across teams from requirements through support.', symbol: '◎' },
	],
};
