'use client';
import { useState } from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Card, ImageContainer, Title, ContentContainer } from './ServicesCards.styles';
import Image from 'next/image';

export const ServicesCard = ({ title, slug, thumbnail, length }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`service/${slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: `(100 / ${length})%` }}
    >
      <Card>
        <ImageContainer>
          <Image src={thumbnail.url} alt={thumbnail.title} width={thumbnail.width} height={thumbnail.height} />
        </ImageContainer>
        <ContentContainer $hover={hover}>
          <Title>{title}</Title>
        </ContentContainer>
      </Card>
    </Link>
  );
};
