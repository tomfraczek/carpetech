'use client';
import Image from 'next/image';

import { Container } from '@/global/styles';
import { Heading, QuickQuoteContainer, Description, BackgroundOverlay, BackgroundContainer } from './QuickQuote.styles';

import { ContactForm } from '../ContactForm';

// import background from '@/public/images/carpetcleaning.jpeg';

export const QuickQuote = ({ header, description, fontColour, backgroundColour, backgroundImage }) => {
  console.log(backgroundImage);
  return (
    <QuickQuoteContainer style={{ backgroundColor: !backgroundImage && `${backgroundColour}` }}>
      <Container style={{ zIndex: '3' }}>
        <Heading style={{ color: `${fontColour}` }}>{header}</Heading>
        <Description style={{ color: `${fontColour}` }}>{description}</Description>
        <ContactForm />
      </Container>
      <BackgroundOverlay />
      {backgroundImage && (
        <BackgroundContainer>
          <Image
            src={backgroundImage.url}
            alt='background quote'
            width={backgroundImage.width}
            height={backgroundImage.height}
          />
        </BackgroundContainer>
      )}
    </QuickQuoteContainer>
  );
};
