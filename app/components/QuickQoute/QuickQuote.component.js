import Image from 'next/image';

import { Container } from '@/global/styles';
import { Heading, QuickQuoteContainer, Description, BackgroundOverlay } from './QuickQuote.styles';

import { ContactForm } from '../ContactForm';

import background from '@/public/images/carpetcleaning.jpeg';

export const QuickQuote = () => {
  return (
    <QuickQuoteContainer>
      <Container>
        <Heading>Get a Quick Quote</Heading>
        <Description>Fill out the form below to get a price for your cleaning requirements</Description>
        <ContactForm />
      </Container>
      <BackgroundOverlay />
      <Image src={background} alt='background quote' fill />
    </QuickQuoteContainer>
  );
};
