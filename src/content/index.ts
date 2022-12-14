import { images } from 'assets';
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
  Technologies.Next,
];

export const jobs: Jobs = [
  {
    companyName: 'SoftServe',
    companyUrl: 'https://www.softserveinc.com/uk-ua',
    period: { start: 'MAR 2022', end: 'Present' },
    projectRole: 'WebUI Software Engineer',
    responsibilities:
      'Coding, code review, updating architecture and implementation of, proposing new functionality, demo work scope for clients, mentoring, supporting other members, tech interview, onboarding.',
    technologies: [
      Technologies.JavaScript,
      Technologies.React,
      Technologies.Unit,
      Technologies.Storybook,
    ],
    description:
      'Have a new stream of development for a big monorepo project. Realizing a few systems to one with the implementation of new features.',
  },
  {
    companyName: 'Yalantis',
    companyUrl: 'https://yalantis.com/',
    period: { start: 'APR 2021', end: 'FEB 2022' },
    projectRole: 'React Developer',
    responsibilities:
      'Coding, code review, update architecture and implementation of, help team members with new functionality, team leading.',
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
    description: 'Mobile banking account control panel.',
  },
  {
    companyName: 'Brocoders',
    companyUrl: 'https://brocoders.com/',
    period: { start: 'DEC 2019', end: 'APR 2021' },
    projectRole: 'Front-end developer',
    responsibilities:
      'Coding, Full development life cycle (Estimating, Application creation, architecture setup).',
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
      'Worked on many projects. Dependent on project has different task and responsibility.',
  },
  {
    companyName: 'Brocoders',
    companyUrl: 'https://brocoders.com/',
    period: { start: 'APR 2020', end: 'NOV 2020' },
    projectRole: 'React-Native developer',
    responsibilities:
      'React-native coding, creating architecture and implementation of new functionality.',
    technologies: [
      Technologies.JavaScript,
      Technologies.ReactNative,
      Technologies.ReactHooks,
      Technologies.ReactQuery,
      Technologies.TypeScript,
    ],
    projectTeamSize: '6 team members',
    description:
      'Mobile app for Android and IOS devices. Full development life cycle. The app is like Instagram with personal account, post feed, likes, etc.',
  },
  {
    companyName: 'Freelance',
    period: { start: 'SEP 2019', end: 'DEC 2019' },
    projectRole: 'Front-end developer',
    responsibilities: `I've created landing pages with a dynamic animation state will be load as the users scroll through the page via JS. In general, I worked for Ukrainian customers.`,
    technologies: [Technologies.HTML, Technologies.Css, Technologies.Webpack],
    projectTeamSize: '1 person',
  },
];

export const projects: Projects = [
  {
    title: 'Particles background',
    description: 'Training project on "Three.js" to implement the basic behavior of the library.',
    technologies: [Technologies.TreeJS, Technologies.JavaScript, Technologies.Css],
    sourceUrl: 'https://github.com/DimaMakarenko/particles-bg',
    url: 'https://dimamakarenko.github.io/particles-bg/',
    image: images.particlesBg,
    priority: 2,
  },
  {
    title: 'Canvas Pixels Physics',
    description: 'Training project on "Three.js" to implement the basic behavior of the library.',
    technologies: [Technologies.TreeJS, Technologies.JavaScript, Technologies.Css],
    sourceUrl: 'https://github.com/DimaMakarenko/Canvas-Pixels-Physics',
    url: 'https://dimamakarenko.github.io/Canvas-Pixels-Physics/',
    image: images.canvasPixelsPhysics,
    priority: 2,
  },
  {
    title: 'Angular Course',
    description: 'Training project on "Angular" to implement the basic behavior of the framework.',
    technologies: [Technologies.Angular, Technologies.TypeScript],
    sourceUrl: 'https://github.com/DimaMakarenko/angular-course',
    image: images.angularCourse,
    priority: 3,
  },
  {
    title: 'Task-tracker',
    description:
      'Application with accounts for creating tasks and tracking time statistics by day. Also have been implemented login and account settings pages. Firebase was used to store information.',
    technologies: [Technologies.TypeScript, Technologies.ReactNative, Technologies.Firebase],
    sourceUrl: 'https://github.com/DimaMakarenko/task-tracker',
    priority: 1,
  },
  {
    title: 'Next.js',
    description:
      'Training project on "Next.js" to implement and understand server-side rendering behavior. Post and contact pages with the ability to open an entity by id.',
    technologies: [Technologies.TypeScript, Technologies.React, Technologies.Next],
    sourceUrl: 'https://github.com/DimaMakarenko/next-js',
    url: 'https://next-kotxwsif2-dimamakarenko.vercel.app/',
    image: images.next,
    priority: 3,
  },
  {
    title: 'Luis Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://dimamakarenko.github.io/Luis-landing-page/',
    sourceUrl: 'https://github.com/DimaMakarenko/Luis-landing-page',
    image: images.luisOenrique,
  },
  {
    title: 'Go Surf',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://dimamakarenko.github.io/go-surf/',
    sourceUrl: 'https://github.com/DimaMakarenko/go-surf',
    image: images.goSurf,
  },
  {
    title: 'Element Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    sourceUrl: 'https://github.com/DimaMakarenko/Element-Landing-Page',
    url: 'https://dimamakarenko.github.io/Element-Landing-Page/',
    image: images.elements,
  },
  {
    title: 'Agnecy Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    sourceUrl: 'https://github.com/DimaMakarenko/Agnecy-landing-Page',
    url: 'https://dimamakarenko.github.io/Agnecy-landing-Page',
    image: images.agnecy,
  },
  {
    title: 'Geriana Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://dimamakarenko.github.io/Geriana-Landing-Gulp/',
    sourceUrl: 'https://github.com/DimaMakarenko/Geriana-Landing-Gulp',
    image: images.geriana,
  },
  {
    title: 'Lopper Landing Page',
    description: 'Layout training project',
    technologies: [Technologies.JavaScript, Technologies.Css, Technologies.React],
    url: 'https://dimamakarenko.github.io/Lopper/',
    sourceUrl: 'https://github.com/DimaMakarenko/Lopper',
    image: images.lopper,
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
    technologies: [Technologies.HTML, Technologies.Css, Technologies.JavaScript],
    url: 'https://dimamakarenko.github.io/design/',
    sourceUrl: 'https://github.com/DimaMakarenko/design',
    image: images.uncovered,
  },
];

export const socialLinks: SocialLink[] = [
  { url: config.socials.github, iconName: 'github' },
  { url: config.socials.telegram, iconName: 'telegram' },
  { url: config.socials.linkedIn, iconName: 'linkedin' },
  { url: config.socials.gmail, iconName: 'gmail' },
];

export const navLinks: NavLink[] = [
  { title: 'About', url: `/#${NavLinkNames.About}`, id: NavLinkNames.About },
  {
    title: 'Experience',
    url: `/#${NavLinkNames.Experience}`,
    id: NavLinkNames.Experience,
  },
  { title: 'Projects', url: `/#${NavLinkNames.Projects}`, id: NavLinkNames.Projects },
  { title: 'Contact', url: `/#${NavLinkNames.Contact}`, id: NavLinkNames.Contact },
];
