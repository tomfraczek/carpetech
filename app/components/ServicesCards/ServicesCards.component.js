import { Fragment } from 'react';
import { Container } from '@/global/styles';
import {
  CardsContainer,
  Header,
  Subheader,
  Cards,
  Card,
  ImageContainer,
  Content,
  Title,
  Category,
} from './ServicesCards.styles';
import Link from 'next/link';
import Image from 'next/image';

export const ServicesCards = ({ data }) => {
  return (
    <CardsContainer>
      <Container>
        <Cards>
          {data.map(({ image, title, category, url, header, subheader }, i) => (
            <Fragment key={i}>
              {header && <Header>{header}</Header>}
              {subheader && <Subheader>{subheader}</Subheader>}
              {url && (
                <Link key={title} href={url}>
                  <Card>
                    <ImageContainer>
                      <Image width={150} height={150} src={image} alt='service icon' />
                    </ImageContainer>
                    <Content>
                      <Title>{title}</Title>
                      <Category>{category}</Category>
                    </Content>
                  </Card>
                </Link>
              )}
            </Fragment>
          ))}
        </Cards>
      </Container>
    </CardsContainer>
  );
};
