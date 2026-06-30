/**
 * ── EDIT THIS FILE to populate your education history ──
 *
 * Fields:
 *  id           : unique string key
 *  institution  : university / school / certification body
 *  degree       : e.g. "Bachelor of Science", "Certificate"
 *  field        : (optional) major / specialisation
 *  period       : e.g. "2020 – 2024"
 *  gpa          : (optional) GPA string, e.g. "3.9 / 4.0"
 *  achievements : (optional) list of awards, honours, activities
 */

/** @type {import('./types').Education[]} */
const education = [
  {
    id:          'edu-1',
    institution: 'Universiti Teknologi MARA',
    degree:      'Bachelor of Science',
    field:       'Computer Science',
    period:      '2024-2027',
    gpa:         '',
    achievements: [
      'Award or achievement one',
      'Relevant coursework or activity',
    ],
  },
  {
    id:          'edu-2',
    institution: 'Certification Body',
    degree:      'Professional Certificate',
    field:       'Area of Study',
    period:      '20XX',
    gpa:         '',
    achievements: [],
  },
]

export default education
