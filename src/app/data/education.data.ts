export interface EducationRecord {
  id: string;
  level: string;
  qualification: string;
  field?: string;
  institution: string;
  board?: string;
  period: string;
  result: string;
  subjects: string[];
}

export const educationData: EducationRecord[] = [
  {
    id: 'graduation', level: 'Graduation',
    qualification: 'B.Tech. in Electronics and Communication Engineering',
    field: 'Electronics & Communication',
    institution: 'Indian Institute of Information Technology (IIIT) Ranchi',
    period: '2019 – 2023', result: '7.87 CGPA',
    subjects: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'C and C++', 'Database Management Systems', 'Operating Systems', 'Computer Networks'],
  },
  {
    id: 'intermediate', level: 'Intermediate (12th)', qualification: 'Science',
    institution: 'SPSBPRH SS HOLPUR RASTI AZAMGARH',
    board: 'Board of High School and Intermediate Education, Uttar Pradesh',
    period: '2016 – 2018', result: '73.2%',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Hindi'],
  },
  {
    id: 'secondary', level: 'Secondary (10th)', qualification: 'Secondary education',
    institution: 'CENTRAL HINDU BOYS SsS BHU KAMACHHA VARANASI UP', board: 'CBSE',
    period: '2014 – 2016', result: '8.2/10 CGPA',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Sanskrit'],
  },
];

export const educationHighlights = [
  { label: 'Highest qualification', value: 'B.Tech.', tone: 'blue' },
  { label: 'Undergraduate session', value: educationData[0].period, tone: 'green' },
  { label: 'Graduation result', value: educationData[0].result, tone: 'purple' },
  { label: 'Field of study', value: educationData[0].field!, tone: 'orange' },
];

export const educationThought = 'Education gave me the knowledge, but practical experience taught me how to apply it in the real world.';
export const educationHeadingThought = 'Education is not just about degrees, it’s about building the right foundation for the future.';
