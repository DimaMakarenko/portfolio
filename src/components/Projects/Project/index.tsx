import defaultImage from 'assets/images/jobEmpty.jpg';
import { Link, Code } from 'components';
import { Project as ProjectType } from 'types';

import { Content, Description, ProjectW, Technologies, Title, Links, Image } from './styles';
type ProjectProps = ProjectType;

export const Project = ({
  title,
  description,
  technologies,
  url,
  sourceUrl,
  image,
}: ProjectProps) => {
  return (
    <ProjectW>
      <Content>
        <Title>
          <Link href={url || sourceUrl} target="_blank" rel="noreferrer">
            {title}
          </Link>
        </Title>
        <Description>{description}</Description>
        <Technologies>
          {technologies.map((technology, index) => (
            <Code key={index}>{technology}</Code>
          ))}
        </Technologies>
        <Links>
          {url && <Link iconName="external" href={url} target="_blank" />}
          {sourceUrl && <Link iconName="github" href={sourceUrl} target="_blank" />}
        </Links>
      </Content>
      <Image href={url || sourceUrl} target="_blank">
        <img src={image || defaultImage} alt={title} />
      </Image>
    </ProjectW>
  );
};
