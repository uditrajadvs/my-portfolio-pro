import { projectData } from './projects.data';
import { educationData } from './education.data';
import { experienceData } from './experience.data';
import { profileData } from './profile.data';
import { previewSkills } from './skills.data';

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
    summary: `${profileData.title} with ${profileData.experienceLabel} across enterprise backend engineering and freelance client delivery.`,
    detail: 'Java · financial services · responsive web',
    icon: '◎',
  },
  {
    id: 'education',
    title: 'Education',
    eyebrow: 'ACADEMIC BACKGROUND',
    summary: educationData[0].qualification,
    detail: `${educationData[0].institution}  |  ${educationData[0].period}  |  ${educationData[0].result}`,
    icon: '◇',
  },
  {
    id: 'experience',
    title: 'Experience',
    eyebrow: experienceData[0].organization,
    summary: profileData.role,
    detail: `${experienceData[0].period}  |  ${experienceData[0].organization}`,
    icon: '▤',
  },
  {
    id: 'skills',
    title: 'Top skills',
    eyebrow: 'BACKEND TOOLKIT',
    summary: previewSkills.join('  |  '),
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
