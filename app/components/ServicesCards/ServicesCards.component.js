'use client';
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

export const ServicesCards = ({ data }) => (
  <CardsContainer>
    <Container>
      <Cards>
        {data.map(({ image, title, category, header, subheader }, i) => (
          <Fragment key={i}>
            {header && <Header>{header}</Header>}
            {subheader && <Subheader>{subheader}</Subheader>}
            {title && (
              <Link key={title} href={'/'}>
                <Card>
                  <ImageContainer>
                    <Image width={150} height={150} src={image} alt='service' />
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
