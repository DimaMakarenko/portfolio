import { Icons } from 'assets/icons';
import { config } from 'config';
import { Jobs, Projects, Technologies } from 'types';

export const technologies = [
  'JavaScript (ES6+)',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Redux',
  'React-Native',
  'Apollo Graphql',
];

export const jobs: Jobs = [
  {
    companyName: 'Yalantis',
    companyUrl: 'https://yalantis.com/',
    period: { start: 'APR 2021', end: 'FEB 2022' },
    projectRole: 'React Developer',
    responsibilities:
      'Coding, code review, update architecture and implementation of, helped team members new functionality',
    technologies: [
      Technologies.JavaScript,
      Technologies.React,
      Technologies.ApolloGraphql,
      Technologies.TypeScript,
      Technologies.Storybook,
      Technologies.Cypress,
      Technologies.Unit,
      Technologies.StylesComponent,
    ],
    projectTeamSize: '20+ team members',
    description: 'Admin panel for managing accounts',
  },
  {
    companyName: 'Brocoders',
    companyUrl: 'https://brocoders.com/',
    period: { start: 'DEC 2019', end: 'APR 2021' },
    projectRole: 'Front-end developer',
    responsibilities: 'Application creation, architecture setup, choice of technology stack',
    technologies: [
      Technologies.HTML,
      Technologies.Css,
      Technologies.JavaScript,
      Technologies.TypeScript,
      Technologies.React,
      Technologies.Redux,
      Technologies.ReduxSaga,
    ],
    projectTeamSize: 'from 2 to 10 team members',
    description:
      'Worked on two projects from start to finish. On one project, I was engaged in support and implementation of new functionality',
  },
  {
    companyName: 'Brocoders (RN)',
    companyUrl: 'https://brocoders.com/',
    period: { start: 'APR 2020', end: 'NOV 2020' },
    projectRole: 'React-Native developer',
    responsibilities:
      'React-native coding, js coding, create architecture and implementation of new functionality',
    technologies: [
      Technologies.JavaScript,
      Technologies.ReactNative,
      Technologies.ReactHooks,
      Technologies.ReactQuery,
      Technologies.TypeScript,
    ],
    projectTeamSize: '6 team members',
    description: 'The app is similar to instagram with personal account, post feed',
  },
  {
    companyName: 'Freelance',
    period: { start: 'SEP 2019', end: 'DEC 2019' },
    projectRole: 'Front-end developer',
    responsibilities: 'Create landing page',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.Webpack],
    projectTeamSize: '1 person',
    description: 'Create landing pages with animation from layout',
  },
];

export const projects: Projects = [
  {
    title: 'Task-tracker',
    description:
      'Application with accounts for creating tasks and tracking time statistics by day. Also have been implemented login and account settings pages. Firebase was used to store information.',
    technologies: [Technologies.TypeScript, Technologies.ReactNative, Technologies.Firebase],
    sourceUrl: 'https://github.com/DimaMakarenko/task-tracker',
  },
  {
    title: 'Luis-landing-page',
    description: 'Layout training project',
    technologies: [Technologies.TypeScript, Technologies.TypeScript, Technologies.TypeScript],
    url: 'https://dimamakarenko.github.io/Luis-landing-page/',
    sourceUrl: 'https://github.com/DimaMakarenko/Luis-landing-page',
  },
];

export const socialLinks: { url: string; iconName: Icons }[] = [
  { url: config.socials.github, iconName: 'github' },
  { url: config.socials.telegram, iconName: 'telegram' },
  { url: config.socials.linkedIn, iconName: 'linkedin' },
  { url: config.socials.gmail, iconName: 'gmail' },
];
