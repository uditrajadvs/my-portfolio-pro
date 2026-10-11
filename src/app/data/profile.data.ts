export interface PortfolioProfile {
	name: string;
	title: string;
	role: string;
	employer: string;
	focus: string;
	experienceLabel: string;
	summary: string;
	resumeHref: string;
	phone: string;
	heroTechnologies: string[];
	quickFacts: { label: string; value: string; symbol: string }[];
	strengths: string[];
	principles: { title: string; description: string; symbol: string }[];
	thought: string;
	thoughtAttribution: string;
	professionalInterests: { label: string; symbol: string }[];
	socialLinks: {
		linkedin: string;
		github: string;
		email: string;
	};
}

export const profileData: PortfolioProfile = {
	name: 'Udit Raj',
	title: 'Software Engineer',
	role: 'Software Engineer · Java Backend Developer',
	employer: 'CGI',
	focus: 'JAVA BACKEND DEVELOPER · ENTERPRISE APPLICATIONS',
	experienceLabel: '3+ years',
	summary:
		'Software Engineer with 3+ years of experience building and supporting enterprise backend applications and responsive client experiences. Focused on Java, Spring Boot, REST APIs, microservices, SQL, and enterprise integration across wealth-management and freelance projects.',
	resumeHref: 'https://drive.google.com/uc?export=download&id=1mDMbSgoB4wwszeKrgRfO75nsk08fl-8g',
	phone: '7061609300',
	heroTechnologies: ['Java', 'Spring Boot', 'REST APIs', 'Apache Camel'],
	quickFacts: [
		{ label: 'Experience', value: '3+ years', symbol: '◷' },
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
	thought: 'I believe in learning, growing and creating meaningful user experiences that make a difference.',
	thoughtAttribution: 'Udit Raj',
	professionalInterests: [
		{ label: 'Backend engineering', symbol: '⌘' },
		{ label: 'REST APIs and microservices', symbol: '↗' },
		{ label: 'Enterprise integration', symbol: '⇄' },
		{ label: 'Financial services technology', symbol: '◇' },
	],
	socialLinks: {
		linkedin: 'https://www.linkedin.com/in/raj-udit',
		github: 'https://github.com/uditrajadvs',
		email: 'mailto:uditraj.se@gmail.com',
	},
};
