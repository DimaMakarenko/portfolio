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
  projectTeamSize: string;
  description: string;
};

export type Jobs = Job[];
