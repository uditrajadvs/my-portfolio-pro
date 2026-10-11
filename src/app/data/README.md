# Portfolio data

Edit portfolio facts here; components and routes consume these exports.

| File | Purpose |
| --- | --- |
| `common/contact.data.ts` | Email, phone, social URLs and contact-form endpoint |
| `common/documents.data.ts` | Resume and Java certificate; Drive IDs occur only here |
| `common/career-record.model.ts` | Shared career record shape |
| `common/navigation.data.ts` | Main navigation labels and destinations |
| `common/assets.data.ts` | Shared original profile photo, source link and dimensions |
| `profile.data.ts` | Profile, biography, professional interests and values |
| `education.data.ts` | Qualifications, schools, boards, dates, results, subjects and shared education thought |
| `experience.data.ts` | Employment history |
| `wealth360.data.ts` | Public platform overview, backend stack and knowledge areas shared by About, Experience and Projects |
| `projects.data.ts` | Project records |
| `achievements.data.ts` | Professional achievements |
| `certifications.data.ts` | Certification records referencing shared documents |
| `skills.data.ts` | Skill groups and overview skill selection |
| `overview.data.ts` | Dashboard presentation; shared facts come from category files |
| `career.data.ts` | Compatibility exports only; contains no record copies |

Use `contactData` and `documentsData` for shared links. `profileData` exposes
derived contact/document properties for existing views. Keep URLs and facts out
of templates. Coursework and education highlights reference education records.

## Wealth360 reference

The reference document is `../../Pre-requ/W360_Complete_Architecture-v2.md`
relative to the project root. It informs platform knowledge, not proof of personal
ownership or delivery. Keep personal contributions in `experience.data.ts` and
platform context in `wealth360.data.ts`. Do not publish the full architecture
document, tenant names, internal repository paths, SQL, or support procedures.
