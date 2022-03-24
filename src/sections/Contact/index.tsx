import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { CounterHeading, Typography, Link } from 'components';
import { config } from 'config';
import { theme } from 'styles';
import { NavLinkNames } from 'types';

const ContactW = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionW = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 30px 0 40px;
`;

export function Contact(): ReactElement {
  return (
    <ContactW id={NavLinkNames.Contact}>
      <CounterHeading count={4}>Contact</CounterHeading>
      <Typography variant="h2" color={theme.colors.lightestSlate}>
        Keep in touch
      </Typography>
      <DescriptionW>
        <Typography>
          Although I&apos;m not currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll try my best to get
          back to you!
        </Typography>
      </DescriptionW>
      <Link href={config.socials.gmail} variant="button">
        Say Hello
      </Link>
    </ContactW>
  );
}
