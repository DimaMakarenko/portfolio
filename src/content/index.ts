import { config } from 'config';
import { Jobs, NavLink, NavLinkNames, Projects, SocialLink, Technologies } from 'types';

export const technologies = [
  Technologies.JavaScript,
  Technologies.TypeScript,
  Technologies.HTML,
  Technologies.Css,
  Technologies.React,
  Technologies.Redux,
  Technologies.ReactNative,
  Technologies.ReactHooks,
  Technologies.Unit,
  Technologies.ReactQuery,
];

export const jobs: Jobs = [
  {
    companyName: 'SoftServe',
    companyUrl: 'https://www.softserveinc.com/uk-ua',
    period: { start: 'MAR 2022', end: 'Present' },
    projectRole: 'WebUI Engineer',
    responsibilities:
      'Coding, code review, update architecture and implementation of, helped team members new functionality',
    technologies: [Technologies.JavaScript, Technologies.React, Technologies.Unit],
  },
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
    companyName: 'Brocoders',
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
    title: 'Luis Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://dimamakarenko.github.io/Luis-landing-page/',
    sourceUrl: 'https://github.com/DimaMakarenko/Luis-landing-page',
  },
  {
    title: 'Go Surf',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://dimamakarenko.github.io/go-surf/',
    sourceUrl: 'https://github.com/DimaMakarenko/go-surf',
  },
  {
    title: 'Element Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://github.com/DimaMakarenko/Element-Landing-Page',
    sourceUrl: 'https://dimamakarenko.github.io/Element-Landing-Page/',
  },
  {
    title: 'Agnecy Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://github.com/DimaMakarenko/Agnecy-landing-Page',
    sourceUrl: 'https://dimamakarenko.github.io/Agnecy-landing-Page',
  },
  {
    title: 'Geriana Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://dimamakarenko.github.io/Geriana-Landing-Gulp/',
    sourceUrl: 'https://github.com/DimaMakarenko/Geriana-Landing-Gulp',
  },
  {
    title: 'Lopper Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.JavaScript, Technologies.Css],
    url: 'https://dimamakarenko.github.io/Lopper/',
    sourceUrl: 'https://github.com/DimaMakarenko/Lopper',
  },
  {
    title: 'Top Gear',
    description:
      'Blog about cars and everything related to them. W the ability to create, delete, edit articles. It also implemented the creation of an account for visitors, the ability to like and write comments. Written in a framework Yii 2 for PHP.',
    technologies: [
      Technologies.JavaScript,
      Technologies.HTML,
      Technologies.Php,
      Technologies.Yii2,
      Technologies.Css,
    ],
    sourceUrl: 'https://github.com/DimaMakarenko/topgear',
  },
  {
    title: 'Undercover Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css],
    url: 'https://dimamakarenko.github.io/design/',
    sourceUrl: 'https://github.com/DimaMakarenko/design',
  },
];

export const socialLinks: SocialLink[] = [
  { url: config.socials.github, iconName: 'github' },
  { url: config.socials.telegram, iconName: 'telegram' },
  { url: config.socials.linkedIn, iconName: 'linkedin' },
  { url: config.socials.gmail, iconName: 'gmail' },
];

export const navLinks: NavLink[] = [
  { title: 'About', url: `/portfolio/#${NavLinkNames.About}`, id: NavLinkNames.About },
  {
    title: 'Experience',
    url: `/portfolio/#${NavLinkNames.Experience}`,
    id: NavLinkNames.Experience,
  },
  { title: 'Projects', url: `/portfolio/#${NavLinkNames.Projects}`, id: NavLinkNames.Projects },
  { title: 'Contact', url: `/portfolio/#${NavLinkNames.Contact}`, id: NavLinkNames.Contact },
];
