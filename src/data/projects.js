/**
 * ── EDIT THIS FILE to populate your projects ──
 *
 * Fields:
 *  id          : unique string key
 *  title       : project display name
 *  description : short description (1-3 sentences)
 *  tech        : array of technology strings shown as pills
 *  liveUrl     : (optional) deployed URL
 *  repoUrl     : (optional) GitHub repo URL
 *  status      : (optional) badge text, e.g. "WIP", "Complete", "Archived"
 */

/** @type {import('./types').Project[]} */
const projects = [
  {
    id:          'project-1',
    title:       'Project One',
    description: 'A brief description of what this project does and the problem it solves.',
    tech:        ['React', 'Node.js', 'PostgreSQL'],
    liveUrl:     '',
    repoUrl:     'https://github.com/',
    status:      'Complete',
  },
  {
    id:          'project-2',
    title:       'Project Two',
    description: 'Describe the core functionality, architecture choices, or impact here.',
    tech:        ['Python', 'FastAPI', 'Docker'],
    liveUrl:     '',
    repoUrl:     'https://github.com/',
    status:      'WIP',
  },
  {
    id:          'project-3',
    title:       'Project Three',
    description: 'Replace this placeholder with a real project description.',
    tech:        ['TypeScript', 'Next.js'],
    liveUrl:     '',
    repoUrl:     '',
    status:      '',
  },
]

export default projects
