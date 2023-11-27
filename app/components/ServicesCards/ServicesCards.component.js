'use client';
import { Container } from '@/global/styles';
import { CardsContainer, Cards, Header, Card, Title } from './ServicesCards.styles';
import { ServicesCard } from './ServiceCard.component';
import vacuum from '@/public/images/services/icons/vacuum.png';
import upholstery from '@/public/images/services/icons/5.png';
import rug from '@/public/images/services/icons/carpet.png';
import carpet from '@/public/images/services/icons/carpet.png';
import sofa from '@/public/images/services/icons/sofa.png';
import soundproof from '@/public/images/services/icons/soundproof.png';
import company from '@/public/images/services/icons/company.png';
import furcoat from '@/public/images/services/icons/fur-coat.png';

import Image from 'next/image';

export const ServicesCards = ({ items }) => {
  return (
    <CardsContainer>
      <Container>
        <Header>Our Professional Cleaning Services:</Header>
        {/* <Cards>
          {items.map((item, i) => (
            <ServicesCard key={`${item.title}-${i}`} {...item} length={items.length} />
          ))}
        </Cards> */}
        <Cards>
          <Card href='google.com'>
            <Image src={vacuum} alt='icon' />
            <Title>Carpet Cleaning</Title>
          </Card>
          <Card href='google.com'>
            <Image src={sofa} alt='icon' />
            <Title>Upholstery Cleaning</Title>
          </Card>
          <Card href='google.com'>
            <Image src={carpet} alt='icon' />
            <Title>Rugs Cleaning</Title>
          </Card>
          <Card href='google.com'>
            <Image src={rug} alt='icon' />
            <Title>Upholstery Cleaning</Title>
          </Card>
          <Card href='google.com'>
            <Image src={furcoat} alt='icon' />
            <Title>Feather Cleaning</Title>
          </Card>
          <Card href='google.com'>
            <Image src={sofa} alt='icon' />
            <Title>Upholstery Cleaning</Title>
          </Card>
          <Card href='google.com'>
            <Image src={soundproof} alt='icon' />
            <Title>Carpet Cleaning</Title>
          </Card>
          <Card href='google.com'>
            <Image src={company} alt='icon' />
            <Title>Upholstery Cleaning</Title>
          </Card>
        </Cards>
      </Container>
    </CardsContainer>
  );
};
