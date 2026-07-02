/**
 * Skills data — edit this file to customise your skills.
 *
 * Fields:
 *  category : section label (e.g. "Frontend")
 *  items    : array of { name, level }
 *             level: 0–100 (used for the progress bar); omit to hide the bar
 */

/** @type {{ category: string, items: { name: string, level?: number }[] }[]} */
const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'HTML / CSS',  level: 95 },
      { name: 'C++',  level: 87 },
      { name: 'Java',      level: 76 },
      { name: 'JavaScript',  level: 60 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Tailwind',    level: 92 },
      { name: 'React',       level: 80 },
      { name: 'Vite',        level: 75 },
      { name: 'Angular',     level: 62 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'MySQL',     level: 92 },
      { name: 'NoSQL',  level: 83 },
      { name: 'Node.js',     level: 72 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'VS Code',      level: 88 },
      { name: 'DigitalOcean',        level: 83 },
      { name: 'Git / GitHub', level: 82 },
      { name: 'Figma',        level: 72 },
      { name: 'Docker',       level: 67 },
    ],
  },
]

export default skills
