'use client';
import { Container } from '@/global/styles';
import { CardsContainer, Cards, Header } from './ServicesCards.styles';
import { ServicesCard } from './ServiceCard.component';

export const ServicesCards = ({ items }) => {
  return (
    <CardsContainer>
      <Container>
        <Header>Our Professional Cleaning Services:</Header>
        <Cards>
          {items.map((item, i) => (
            <ServicesCard key={`${item.title}-${i}`} {...item} length={items.length} />
          ))}
        </Cards>
      </Container>
    </CardsContainer>
  );
};
