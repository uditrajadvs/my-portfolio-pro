import { contactData, socialLinks } from './common/contact.data';
import { documentsData } from './common/documents.data';
import { experienceData } from './experience.data';

const identity = {
  name: 'Udit Raj',
  title: experienceData[0].title,
  employer: experienceData[0].organization,
  experienceLabel: '3+ years',
};

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
	name: identity.name,
	title: identity.title,
	role: 'Software Engineer · Java Backend Developer',
	employer: identity.employer,
	focus: 'JAVA BACKEND DEVELOPER · ENTERPRISE APPLICATIONS',
	experienceLabel: identity.experienceLabel,
	summary:
		'Software Engineer with 3+ years of experience building and supporting enterprise backend applications and responsive client experiences. Focused on Java, Spring Boot, REST APIs, microservices, SQL, and enterprise integration across wealth-management and freelance projects.',
	resumeHref: documentsData.resume.downloadHref,
	phone: contactData.phone,
	heroTechnologies: ['Java', 'Spring Boot', 'REST APIs', 'Apache Camel'],
	quickFacts: [
		{ label: 'Experience', value: identity.experienceLabel, symbol: '◷' },
		{ label: 'Role', value: identity.title, symbol: '</>' },
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
	thoughtAttribution: identity.name,
	professionalInterests: [
		{ label: 'Backend engineering', symbol: '⌘' },
		{ label: 'REST APIs and microservices', symbol: '↗' },
		{ label: 'Enterprise integration', symbol: '⇄' },
		{ label: 'Financial services technology', symbol: '◇' },
	],
	socialLinks,
};
