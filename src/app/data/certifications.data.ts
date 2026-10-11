import type { CareerRecord } from './common/career-record.model';
import { documentsData } from './common/documents.data';

export const certificationData: CareerRecord[] = [{
  title: 'Oracle Java Certification',
  organization: 'Oracle',
  description: 'Java certification listed in my professional resume. View the original certificate below.',
  highlights: [],
  document: documentsData.javaCertification,
}];
