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
      { name: 'JavaScript',  level: 80 },
      { name: 'TypeScript',  level: 65 },
      { name: 'Python',      level: 70 },
      { name: 'HTML / CSS',  level: 85 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React',       level: 80 },
      { name: 'Next.js',     level: 62 },
      { name: 'Vite',        level: 75 },
      { name: 'Tailwind',    level: 68 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js',     level: 72 },
      { name: 'FastAPI',     level: 60 },
      { name: 'PostgreSQL',  level: 65 },
      { name: 'REST APIs',   level: 74 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git / GitHub', level: 82 },
      { name: 'Docker',       level: 55 },
      { name: 'Linux',        level: 60 },
      { name: 'VS Code',      level: 88 },
    ],
  },
]

export default skills
