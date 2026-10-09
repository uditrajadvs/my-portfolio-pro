import { projectData } from './career.data';

export interface OverviewCard {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  icon: string;
}

export const overviewCards: OverviewCard[] = [
  {
    id: 'about',
    title: 'About me',
    eyebrow: 'PROFILE',
    summary: 'Software Engineer with 3+ years across enterprise backend engineering and freelance client delivery.',
    detail: 'Java · financial services · responsive web',
    icon: '◎',
  },
  {
    id: 'education',
    title: 'Education',
    eyebrow: 'ACADEMIC BACKGROUND',
    summary: 'B.Tech in Electronics and Communication Engineering.',
    detail: 'IIIT Ranchi · 2019–2023 · CGPA 7.87',
    icon: '◇',
  },
  {
    id: 'experience',
    title: 'Experience',
    eyebrow: 'CGI',
    summary: 'Software Engineer / Java Backend Developer',
    detail: 'Aug 2024–Sep 2026 · CGI',
    icon: '▤',
  },
  {
    id: 'skills',
    title: 'Top skills',
    eyebrow: 'BACKEND TOOLKIT',
    summary: 'Java · Spring Boot · REST APIs · Microservices',
    detail: 'SQL · Apache Camel · ActiveMQ · AWS',
    icon: '</>',
  },
];

export const backendStrengths = [
  'Backend API development',
  'Enterprise integration',
  'Database performance optimization',
  'Production troubleshooting and root-cause analysis',
];

export const professionalWork = [
  ...projectData.map((project) => project.title),
];
