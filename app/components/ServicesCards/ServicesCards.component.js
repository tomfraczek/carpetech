'use client';
import { Container } from '@/global/styles';
import { CardsContainer, Cards, Header, CardsMobile } from './ServicesCards.styles';
import { ServicesCard } from './ServiceCard.component';
// import vacuum from '@/public/images/services/icons/vacuum.png';
// import upholstery from '@/public/images/services/icons/5.png';
// import rug from '@/public/images/services/icons/carpet.png';
// import carpet from '@/public/images/services/icons/carpet.png';
// import sofa from '@/public/images/services/icons/sofa.png';
// import soundproof from '@/public/images/services/icons/soundproof.png';
// import company from '@/public/images/services/icons/company.png';
// import furcoat from '@/public/images/services/icons/fur-coat.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const ServicesCards = ({ items }) => {
  return (
    <CardsContainer>
      <Container>
        <Header>Our Professional Cleaning Services:</Header>
        <CardsMobile>
          <Swiper
            slidesPerView={1.4}
            centeredSlides={true}
            spaceBetween={10}
            grabCursor={true}
            className='servicesSwiper'
          >
            {items.map((item, i) => (
              <SwiperSlide key={`${item.title}-${i}`}>
                <ServicesCard {...item} length={items.length} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardsMobile>
        <Cards>
          {items.map((item, i) => (
            <ServicesCard key={`${item.title}-${i}`} {...item} length={items.length} />
          ))}
        </Cards>
      </Container>
    </CardsContainer>
  );
};
