import { JobExperience } from 'components';
import { Jobs } from 'types';

export const jobsAdapter = (jobs: Jobs) =>
  jobs.map((job) => ({
    title: job.companyName,
    value: <JobExperience {...job} />,
  }));
