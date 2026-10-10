import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Home } from './features/home/home';
import { SectionPage, SectionPageContent } from './features/section-page/section-page';
import {
  achievementData,
  certificationData,
  educationData,
  experienceData,
  projectData,
} from './data/career.data';
import { profileData } from './data/profile.data';

const section = (content: SectionPageContent) => ({ component: SectionPage, data: { content } });

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'overview', component: Home, title: 'Overview | Udit Raj' },
  { path: 'about', component: About, title: 'About Me | Udit Raj' },
  {
    path: 'experience',
    ...section({
      title: 'Experience',
      eyebrow: 'PROFESSIONAL EXPERIENCE',
      summary: 'Backend engineering and client delivery across wealth-management and e-commerce work.',
      records: experienceData,
    }),
    title: 'Experience | Udit Raj',
  },
  {
    path: 'skills',
    ...section({
      title: 'Technical skills',
      eyebrow: 'BACKEND TOOLKIT',
      summary: 'Technologies and engineering practices from the supplied professional profile.',
      groups: [
        { title: 'Programming', skills: ['Java', 'C++', 'JavaScript'] },
        { title: 'Backend', skills: ['Spring Boot', 'Spring Framework', 'REST APIs', 'Microservices', 'MyBatis'] },
        { title: 'Integration and messaging', skills: ['Apache Camel', 'ActiveMQ', 'Apache Kafka'] },
        { title: 'Databases', skills: ['Oracle SQL', 'MySQL'] },
        { title: 'Testing and quality', skills: ['JUnit', 'SonarLint'] },
        { title: 'Build and DevOps', skills: ['Maven', 'Jenkins', 'Git', 'GitHub', 'Bitbucket'] },
        { title: 'Tools and platforms', skills: ['Postman', 'Swagger/OpenAPI', 'Linux', 'Tomcat', 'AWS', 'IntelliJ IDEA', 'Confluence'] },
        { title: 'Engineering concepts', skills: ['OOP', 'JVM', 'SDLC', 'Data Structures and Algorithms', 'System Design'] },
      ],
    }),
    title: 'Skills | Udit Raj',
  },
  {
    path: 'projects',
    ...section({
      title: 'Professional work areas',
      eyebrow: 'PROJECTS AND SELECTED WORK',
      summary: 'Selected projects and public-safe descriptions of professional contributions. Financial institution names and internal implementation details are omitted.',
      records: projectData,
    }),
    title: 'Projects | Udit Raj',
  },
  {
    path: 'education',
    ...section({
      title: 'Education',
      eyebrow: 'ACADEMIC BACKGROUND',
      summary: 'Bachelor of Technology in Electronics and Communication Engineering.',
      records: educationData,
    }),
    title: 'Education | Udit Raj',
  },
  {
    path: 'achievements',
    ...section({
      title: 'Achievements',
      eyebrow: 'PROFESSIONAL HIGHLIGHTS',
      summary: 'Selected technical and team contributions from the supplied resume.',
      records: achievementData,
    }),
    title: 'Achievements | Udit Raj',
  },
  {
    path: 'certifications',
    ...section({
      title: 'Certifications',
      eyebrow: 'CREDENTIALS',
      summary: 'Certification currently listed in the supplied resume.',
      records: certificationData,
    }),
    title: 'Certifications | Udit Raj',
  },
  {
    path: 'contact',
    ...section({
      title: 'Contact',
      eyebrow: 'GET IN TOUCH',
      summary: 'Send a message with the form below, or reach out by email, phone, or a professional profile.',
      contact: {
        email: 'uditraj.se@gmail.com',
        phone: profileData.phone,
        linkedin: profileData.socialLinks.linkedin,
        github: profileData.socialLinks.github,
      },
    }),
    title: 'Contact | Udit Raj',
  },
  { path: '**', redirectTo: 'overview' },
];
