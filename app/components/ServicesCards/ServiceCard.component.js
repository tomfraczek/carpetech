'use client';
import { useState } from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  Card,
  Circle,
  Vertical,
  Horizontal,
  ImageContainer,
  Title,
  Cta,
  ContentContainer,
  ServiceCardContainer,
  CardBottom,
} from './ServicesCards.styles';
import Image from 'next/image';

export const ServicesCard = ({ title, slug, thumbnail, length }) => {
  const [hover, setHover] = useState(false);
  console.log(slug);
  return (
    <ServiceCardContainer
      href={`service/${slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      $length={length}
      $height={thumbnail.height}
    >
      <Card>
        <ImageContainer>
          <Image src={thumbnail.url} alt={thumbnail.title} width={thumbnail.width} height={thumbnail.height} />
        </ImageContainer>

        <CardBottom>
          <ContentContainer $hover={hover}>
            <Title>{title}</Title>
          </ContentContainer>
          <Cta href={`services/${slug}`}>Read more</Cta>
          <Circle>
            <Vertical />
            <Horizontal />
          </Circle>
        </CardBottom>
      </Card>
    </ServiceCardContainer>
  );
};
