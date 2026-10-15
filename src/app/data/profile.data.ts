import { contactData, socialLinks } from './common/contact.data';
import { documentsData } from './common/documents.data';
import { experienceData } from './experience.data';
import { assetsData } from './common/assets.data';

const identity = {
  name: 'Udit Raj',
  title: experienceData[0].title,
  employer: experienceData[0].organization,
  experienceLabel: '3+ years',
  role: 'Java Backend Developer',
};

export interface PortfolioProfile {
	name: string;
	location: string;
	photo: typeof assetsData.profilePhoto;
	languages: string[];
	availability: { openToOpportunities: boolean; label: string };
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
	location: 'Bangalore, India',
	photo: assetsData.profilePhoto,
	languages: ['English', 'Hindi'],
	availability: { openToOpportunities: true, label: 'Open to opportunities' },
	title: identity.title,
	role: identity.role,
	employer: identity.employer,
	focus: 'JAVA BACKEND DEVELOPER · ENTERPRISE APPLICATIONS',
	experienceLabel: identity.experienceLabel,
	summary:
		`Software Engineer and Java Backend Developer with ${identity.experienceLabel} of experience building and supporting enterprise applications. Focused on Java, Spring Boot, REST APIs, SQL and reliable backend integration, with a strong foundation in financial-services systems and collaborative problem solving.`,
	resumeHref: documentsData.resume.downloadHref,
	phone: contactData.phone,
	heroTechnologies: ['Java', 'Spring Boot', 'REST APIs', 'Apache Camel'],
	quickFacts: [
		{ label: 'Experience', value: identity.experienceLabel, symbol: '◷' },
		{ label: 'Role', value: identity.role, symbol: '</>' },
		{ label: 'Domain', value: 'Wealth management', symbol: '◇' },
		{ label: 'Focus', value: 'Backend systems', symbol: '⌘' },
	],
	strengths: [
		'Java and Spring Boot API development for enterprise business workflows',
		'Apache Camel integration and MyBatis/Oracle data access',
		'SQL performance analysis, JUnit testing and production troubleshooting',
		'Domain understanding, requirement analysis and collaborative delivery',
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
		{ label: 'REST APIs and microservices', symbol: '⇄' },
		{ label: 'Enterprise integration', symbol: '⇄' },
		{ label: 'Financial services technology', symbol: '◇' },
	],
	socialLinks,
};
