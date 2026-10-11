import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Home } from './features/home/home';
import { Resume } from './features/resume/resume';
import { Education } from './features/education/education';
import { SectionPage, SectionPageContent } from './features/section-page/section-page';
import {
  achievementData,
  experienceData,
  projectData,
} from './data/career.data';
import { Contact } from './features/contact/contact';
import { Skills } from './features/skills/skills';
import { Certifications } from './features/certifications/certifications';

const section = (content: SectionPageContent) => ({ component: SectionPage, data: { content } });

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'overview', component: Home, title: 'Overview | Udit Raj' },
  { path: 'about', component: About, title: 'About Me | Udit Raj' },
  {
    path: 'resume',
    component: Resume,
    title: 'Resume | Udit Raj',
  },
  {
    path: 'experience',
    ...section({
      title: 'Experience',
      layout: 'experience',
      eyebrow: 'PROFESSIONAL EXPERIENCE',
      summary: 'Backend engineering and client delivery across wealth-management and e-commerce work.',
      records: experienceData,
    }),
    title: 'Experience | Udit Raj',
  },
  {
    path: 'skills',
    component: Skills,
    title: 'Skills | Udit Raj',
  },
  {
    path: 'projects',
    ...section({
      title: 'Projects',
      layout: 'projects',
      eyebrow: 'PROJECTS AND SELECTED WORK',
      summary: 'Explore my work in Java backend development, enterprise integration, and client applications.',
      records: projectData,
    }),
    title: 'Projects | Udit Raj',
  },
  {
    path: 'education',
    component: Education,
    title: 'Education | Udit Raj',
  },
  {
    path: 'achievements',
    // Keep the implementation for later; unavailable routes fall back to Overview.
    canMatch: [() => false],
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
    component: Certifications,
    title: 'Certifications | Udit Raj',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact | Udit Raj',
  },
  { path: '**', redirectTo: 'overview' },
];
