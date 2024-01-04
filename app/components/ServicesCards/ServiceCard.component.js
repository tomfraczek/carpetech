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

  const getTitle = (str) => {
    const words = str.split(' ');
    const lastWord = words[words.length - 1];

    // Check if the last word is 'cleaning'
    if (lastWord.toLowerCase() !== 'cleaning') {
      // If not, add 'Cleaning' at the end
      words.push('\nCleaning');
    } else {
      words[words.length - 1] += '\n';
    }

    const modifiedString = words.join(' ');

    return modifiedString;
  };
  return (
    <ServiceCardContainer
      href={`service/${slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      $length={length}
      $height={thumbnail?.height ?? '150'}
    >
      <Card>
        <ImageContainer>
          {thumbnail && (
            <Image src={thumbnail.url} alt={thumbnail.title} width={thumbnail.width} height={thumbnail.height} />
          )}
        </ImageContainer>

        <CardBottom>
          <ContentContainer $hover={hover}>
            <Title>{getTitle(title)}</Title>
          </ContentContainer>
          <Circle>
            <Vertical />
            <Horizontal />
          </Circle>
        </CardBottom>
      </Card>
    </ServiceCardContainer>
  );
};
