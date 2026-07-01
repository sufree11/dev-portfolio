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
    degree:      'Diploma',
    field:       'Computer Science',
    period:      '2024-2027 (Present)',
    gpa:         '',
    achievements: [
      'Hosted a successful app platform implementing HTML5, CSS3 and JS, linked to a database, implementing knowledge regarding usage of DigitalOcean.',
      'Successfully led a team of 4 members in researching and simulating investment scam attack, and researched real world case studies, thus suggesting countermeasures and increased awareness regarding investment scam on campus.',
    ],
  },
  {
    id:          'edu-2',
    institution: 'SMK Darul Ehsan',
    degree:      'SPM',
    field:       'Art/Multimedia Course',
    period:      '2019-2023',
    gpa:         '6A1B',
    achievements: [
      'Represented district in the state-level public speaking competition.'
    ],
  },
]

export default education
