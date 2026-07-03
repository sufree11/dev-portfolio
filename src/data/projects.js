/**
 * ── EDIT THIS FILE to populate your projects ──
 *
 * Fields:
 *  id          : unique string key
 *  title       : project display name
 *  description : short description (1-3 sentences)
 *  heroImage   : (optional) image URL for project hero banner
 *  heroAlt     : (optional) alt text for hero image
 *  tech        : array of technology strings shown as pills
 *  liveUrl     : (optional) deployed URL
 *  repoUrl     : (optional) GitHub repo URL
 *  status      : (optional) badge text, e.g. "WIP", "Complete", "Archived"
 */

import imvidiaHero  from '../assets/pic/imvidia.png'
import smarthomeHero from '../assets/pic/Smarthome.png'
import qiaoHero      from '../assets/pic/Qiao.png'
import vaccineHero   from '../assets/pic/Vaccine.png'

/** @type {import('./types').Project[]} */
const projects = [
  {
    id:          'project-1',
    title:       'Smart Home System',
    year:        '06/2025',
    description: 'Collaborative group project, utilising a full Java backend with Swing frontend to simulate a smart home environment, allowing users to add, remove, check on, and control various smart devices.',
    heroImage:   smarthomeHero,
    heroAlt:     'Dashboard for Smart Home System',
    tech:        ['Java', 'Swing'],
    liveUrl:     '',
    repoUrl:     'https://github.com/azideu/SmartHomeSystem',
    status:      'Complete',
  },
  {
    id:          'project-2',
    title:       'Vaccine Stock Management System',
    year:        '02/2026',
    description: 'Collaborative group project, utilising a full Java backend, implementing Maven alongside JavaFX as the frontend framework in order to manage and track vaccine stock levels efficiently, allowing for manual adjustments and real-time monitoring.',
    heroImage:   vaccineHero,
    heroAlt:     'Vaccine Stock Management Dashboard',
    tech:        ['Java', 'JavaFX', 'Maven'],
    liveUrl:     '',
    repoUrl:     'https://github.com/sufree11/VaccineProject',
    status:      'Complete',
  },
  {
    id:          'project-3',
    title:       'Imvidia Electronics',
    year:        '06/2026',
    description: 'Collaborative group project, utilising a full PHP and Javascript backend with a CSS3 frontend, alongside stylisation through Tailwind CSS, to create an app platform for Imvidia Electronics, allowing users to browse products, add items to their cart, and make purchases.',
    heroImage:   imvidiaHero,
    heroAlt:     'Imvidia Electronics Main Page',
    tech:        ['PHP', 'JavaScript', 'Tailwind CSS', 'MySQL', 'HTML5', 'CSS3'],
    liveUrl:     'https://imvidia.systems',
    repoUrl:     'https://github.com/sufree11/Imvidia-Electronics',
    status:      'WIP',
  },
  {
    id:          'project-4',
    title:       'QIAO',
    year:        '06/2026',
    description: 'A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.A brief description of what this project does and the problem it solves.',
    heroImage:   qiaoHero,
    heroAlt:     'QIAO Learning Screen',
    tech:        ['React', 'Node.js', 'PostgreSQL'],
    liveUrl:     '',
    repoUrl:     'https://github.com/',
    status:      'Complete',
  },
]

export default projects
