import Image from 'next/image';
import {
  ContentWithImageContainer,
  ContentLeft,
  ContentRight,
  LogoContainer,
  Header,
  Subheader,
  Paragraph,
  FactHeader,
  FactsList,
  FactItem,
  SectionHeader,
  List,
  ListItem,
} from './ContentWithImage.styles';
import { Fragment } from 'react';
import AnbgleDown from '@/public/images/icons/angleDown.svg';
import { ReviewCards } from '@/app/components/ReviewCards';

export const ContentWithImage = ({ data, revert, reviews }) => {
  const isReversed = revert || false;
  return (
    <Fragment>
      <ContentWithImageContainer $reverse={isReversed}>
        <ContentLeft>
          {data.map(({ icon, header, sectionHeader, subheader, paragraphs, facts, list }, index) => (
            <Fragment key={index}>
              {icon && (
                <LogoContainer>
                  <Image src={icon} alt='year logo' />
                </LogoContainer>
              )}
              {sectionHeader && <SectionHeader>{sectionHeader}</SectionHeader>}
              {header && <Header>{header}</Header>}
              {subheader && <Subheader>{subheader}</Subheader>}
              {paragraphs && paragraphs.map((paragraph, i) => <Paragraph key={i}>{paragraph}</Paragraph>)}
              {facts && (
                <>
                  <FactHeader>Key Facts:</FactHeader>
                  <FactsList>
                    {facts.map((fact, index) => (
                      <FactItem key={index}>
                        <Image src={AnbgleDown} width={20} alt='angle right icon' />
                        {fact}
                      </FactItem>
                    ))}
                  </FactsList>
                </>
              )}
              {list && (
                <List>
                  {list.map((element, i) => (
                    <ListItem key={i}>
                      <Image src={AnbgleDown} width={20} alt='angle right icon' />
                      {element}
                    </ListItem>
                  ))}
                </List>
              )}
            </Fragment>
          ))}
          {reviews && <ReviewCards />}
        </ContentLeft>
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
