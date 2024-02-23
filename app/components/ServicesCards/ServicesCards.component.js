'use client';
import { Container } from '@/global/styles';
import { CardsContainer, Header, CardsMobile, SliderContainer } from './ServicesCards.styles';
import { ServicesCard } from './ServiceCard.component';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const ServicesCards = ({ items }) => {
  return (
    <CardsContainer>
      <SliderContainer>
        <Header>Our Professional Cleaning Services:</Header>
        <CardsMobile>
          <Swiper
            slidesPerView={1} // Initially show 1 slide
            centeredSlides={false}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              // When window width is >= 640px
              640: {
                slidesPerView: 2,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 3,
              },
              // When window width is >= 1024px
              1024: {
                slidesPerView: 4,
              },
            }}
            className='oneLineSwiper'
          >
            {items.map((item, i) => (
              <SwiperSlide key={`${item.title}-${i}`}>
                <ServicesCard {...item} length={items.length} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardsMobile>
      </SliderContainer>
    </CardsContainer>
  );
};
