import Image from 'next/image';

import { Container } from '@/global/styles';
import { Heading, QuickQuoteContainer, Description, BackgroundOverlay } from './QuickQuote.styles';

import backgroundImg from '@/public/images/contacthome.jpeg';
import { QuoteForm } from '@/app/components/QuoteForm';

export const QuickQuote = () => {
  return (
    <QuickQuoteContainer>
      <Container>
        <Heading>Get a Quick Quote</Heading>
        <Description>Fill out the form below to get a price for your cleaning requirements</Description>
        <QuoteForm />
      </Container>
      <BackgroundOverlay />
      <Image src={backgroundImg} alt='background quote' />
    </QuickQuoteContainer>
  );
};
