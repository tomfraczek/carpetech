import Image from 'next/image';
import {
  ContentWithImageContainer,
  ContentLeft,
  ContentRight,
  LogoContainer,
  Header,
  Subheader,
  Paragraph,
} from './ContentWithImage.styles';
import { Fragment } from 'react';

export const ContentWithImage = ({ data, revert }) => {
  const isReversed = revert || false;
  console.log(data);

  // const foo =

  return (
    <Fragment>
      <ContentWithImageContainer $reverse={isReversed}>
        <ContentLeft>
          {data.map(({ icon, header, subheader, paragraphs }, index) => (
            <Fragment key={index}>
              {icon && (
                <LogoContainer>
                  <Image src={icon} alt='year logo' />
                </LogoContainer>
              )}
              {header && <Header>{header}</Header>}
              {subheader && <Subheader>{subheader}</Subheader>}
              {paragraphs.map((paragraph, i) => (
                <Paragraph key={i}>{paragraph}</Paragraph>
              ))}
            </Fragment>
          ))}
        </ContentLeft>
        {/* Render ContentRight here if needed */}
        {data.map(
          ({ image }, index) =>
            image && (
              <ContentRight key={index}>
                <Image src={image} alt='family logo' width={768} height={512} />
              </ContentRight>
            )
        )}
      </ContentWithImageContainer>
    </Fragment>
  );
};
