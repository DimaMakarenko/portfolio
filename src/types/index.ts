import { Icons } from 'assets/icons';

export enum Technologies {
  // Front-end skills
  React = 'React',
  JavaScript = 'JavaScript (ES6+)',
  TypeScript = 'TypeScript',
  ReactNative = 'React-Native',
  ApolloGraphql = 'Apollo Graphql',
  Redux = 'Redux',
  ReactQuery = 'React-query',
  ReduxSaga = 'Redux-saga',
  Storybook = 'Storybook',
  Cypress = 'Cypress',
  Unit = 'Unit/Integration tests',
  ReactHooks = 'React hooks',
  // Markup skills
  Css = 'CSS',
  HTML = 'HTML',
  StylesComponent = 'Styles-component',
  ResponsiveDesign = 'Responsive Design',
  // Other
  Unix = 'Unix-based OS (Ubuntu,MacOS)',
  Git = 'Git',
  Yarn = 'Yarn',
  Npm = 'NPM',
  Jira = 'Jira',
  Webpack = 'Webpack',
  AndroidStudio = 'Android Studio',
  Xcode = 'Xcode',
  Firebase = 'Firebase',
  Php = 'PHP',
  Yii2 = 'Yii 2',
}

export enum NavLinkNames {
  Hero = 'Hero',
  About = 'about',
  Experience = 'experience',
  Projects = 'projects',
  Contact = 'contact',
}

type Period = {
  start: string;
  end: string;
};

export type Job = {
  companyName: string;
  technologies: Technologies[];
  companyUrl?: string;
  period: Period;
  projectRole: string;
  responsibilities: string;
  projectTeamSize?: string;
  description?: string;
};

export type Jobs = Job[];

export type Project = {
  title: string;
  description?: string;
  url?: string;
  sourceUrl?: string;
  technologies: Technologies[];
  image?: string;
};

export type Projects = Project[];

export type SocialLink = {
  url: string;
  iconName: Icons;
};

export type NavLink = { title: string; url: string; id: NavLinkNames };
