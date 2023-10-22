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
import { InfiniteLoopCarousel } from '@/app/components/InfiniteLoopCarousel';

export const ContentWithImage = ({ data, revert, reviews, grey, small }) => {
  const isReversed = revert || false;

  const getPropertyOrder = (item) => {
    const propertyOrder = Object.keys(item);
    return propertyOrder;
  };
  return (
    <Fragment>
      <ContentWithImageContainer $reverse={isReversed} $grey={grey}>
        <ContentLeft $small={small}>
          {data.map((item, index) => {
            const orderedKeys = getPropertyOrder(item);

            return (
              <Fragment key={index}>
                {orderedKeys.map((key) => {
                  if (item[key]) {
                    if (key === 'sectionHeader') {
                      return <SectionHeader key={key}>{item[key]}</SectionHeader>;
                    } else if (key === 'header') {
                      return <Header key={key}>{item[key]}</Header>;
                    } else if (key === 'subheader') {
                      return <Subheader key={key}>{item[key]}</Subheader>;
                    } else if (key === 'paragraphs') {
                      return item[key].map((paragraph, i) => <Paragraph key={i}>{paragraph}</Paragraph>);
                    } else if (key === 'facts') {
                      return (
                        <Fragment key={key}>
                          <FactHeader>Key Facts:</FactHeader>
                          <FactsList>
                            {item[key].map((fact, i) => (
                              <FactItem key={i}>
                                <Image src={AnbgleDown} width={20} alt='angle right icon' />
                                {fact}
                              </FactItem>
                            ))}
                          </FactsList>
                        </Fragment>
                      );
                    } else if (key === 'list') {
                      return (
                        <List key={key}>
                          {item[key].map((element, i) => (
                            <ListItem key={i}>
                              <Image src={AnbgleDown} width={20} alt='angle right icon' />
                              {element}
                            </ListItem>
                          ))}
                        </List>
                      );
                    } else if (key === 'icon') {
                      return (
                        <LogoContainer key={key}>
                          <Image src={item[key]} alt='year logo' />
                        </LogoContainer>
                      );
                    } else if (key === 'infiniteLoop') {
                      // eslint-disable-next-line react/jsx-key
                      return <InfiniteLoopCarousel data={item[key]} />;
                    }
                  }
                  return null;
                })}
              </Fragment>
            );
          })}
          {reviews && <ReviewCards />}
        </ContentLeft>
        {data.map(
          (item, index) =>
            item.image && (
              <ContentRight key={index} $small={small}>
                <Image src={item.image} alt='family logo' width={768} height={512} />
              </ContentRight>
            )
        )}
      </ContentWithImageContainer>
    </Fragment>
  );
};
