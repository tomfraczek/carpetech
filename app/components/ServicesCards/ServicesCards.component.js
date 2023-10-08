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
import { SERVICES_DATA } from '@/app/constants';
import Link from 'next/link';
import Image from 'next/image';

export const ServicesCards = () => {
  return (
    <CardsContainer>
      <Container>
        <Header>Our Professional Cleaning Services:</Header>
        <Subheader>For the Milton Keynes area</Subheader>

        <Cards>
          {SERVICES_DATA.map(({ image, title, category, url }) => (
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
          ))}
        </Cards>
      </Container>
    </CardsContainer>
  );
};
