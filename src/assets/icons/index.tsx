import { ReactComponent as External } from './external.svg';
import { ReactComponent as Folder } from './folder.svg';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Gmail } from './gmail.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LogoLoader } from './logoLoader.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as Telegram } from './telegram.svg';

export const icons = {
  folder: <Folder />,
  github: <Github />,
  gmail: <Gmail />,
  linkedin: <LinkedIn />,
  telegram: <Telegram />,
  external: <External />,
  logo: <Logo />,
  logoLoader: <LogoLoader />,
  star: <Star />,
};

export type Icons = keyof typeof icons;
