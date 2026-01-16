export interface Project {
  slug: string
  title: string
  date: string
  techStack?: string[]
}

export const projects: Project[] = [
  {
    slug: 'environmental-impact-llms',
    title: 'Environmental Impact of LLMs',
    date: 'Nov 25',
    techStack: ['Figma'],
  },
  {
    slug: 'paper-environmental-ai',
    title: 'Paper on Environmental Considerations of AI',
    date: 'Nov 25',
  },
  {
    slug: 'october-regression',
    title: 'October Regression: MLB Postseason Analysis',
    date: 'Nov 25',
  },
  {
    slug: 'goodreads-wrapped',
    title: 'GoodReads Wrapped',
    date: 'June 25',
    techStack: ['React/Flask/Mongo'],
  },
  {
    slug: 'start-covid-mental-health',
    title: 'START Involvement & Mental Health Trends',
    date: 'Nov 2022',
    techStack: ['Python'],
  },
  {
    slug: 'terrorist-attacks-visualization',
    title: 'Terrorist Attacks Visualization',
    date: 'Nov 21',
    techStack: ['R'],
  },
  {
    slug: 'covid-mask-concern-visualization',
    title: 'COVID Concern vs Mask Usage',
    date: 'Oct 21',
    techStack: ['R'],
  },
]