# Portfolio data

Edit portfolio facts here; components and routes consume these exports.

| File | Purpose |
| --- | --- |
| `common/contact.data.ts` | Email, phone, social URLs and contact-form endpoint |
| `common/documents.data.ts` | Resume and Java certificate; Drive IDs occur only here |
| `common/career-record.model.ts` | Shared career record shape |
| `common/navigation.data.ts` | Main navigation labels and destinations |
| `profile.data.ts` | Profile, biography, professional interests and values |
| `education.data.ts` | Qualifications, schools, boards, dates, results and subjects |
| `experience.data.ts` | Employment history |
| `projects.data.ts` | Project records |
| `achievements.data.ts` | Professional achievements |
| `certifications.data.ts` | Certification records referencing shared documents |
| `skills.data.ts` | Skill groups and overview skill selection |
| `overview.data.ts` | Dashboard presentation; shared facts come from category files |
| `career.data.ts` | Compatibility exports only; contains no record copies |

Use `contactData` and `documentsData` for shared links. `profileData` exposes
derived contact/document properties for existing views. Keep URLs and facts out
of templates. Coursework and education highlights reference education records.
