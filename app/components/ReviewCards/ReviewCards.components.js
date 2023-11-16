'use client';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ReviewCard } from '@/app/components/ReviewCard';
import { REVIEW_DATA } from './constants';

import { Header } from './ReviewCards.styles';
import { Autoplay } from 'swiper/modules';

import { isMobile } from '@/global/breakpoints';

export const ReviewCards = () => {
  const mobile = isMobile();
  return (
    <>
      <Header>Read Some Reviews from our Satisfied Customers:</Header>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={mobile ? 1 : 2}
        style={{ height: '100%', '--swiper-pagination-color': '#fff', '--swiper-navigation-color': 'red' }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {REVIEW_DATA.map((review) => (
          <ReviewCard key={review.author} {...review} />
        ))}
      </Swiper>
    </>
  );
};
