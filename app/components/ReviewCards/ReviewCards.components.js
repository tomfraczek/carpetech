import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ReviewCard } from '@/app/components/ReviewCard';
import { REVIEW_DATA } from './constants';

import { Header } from './ReviewCards.styles';

export const ReviewCards = () => {
  return (
    <>
      <Header>Read Some Reviews from our Satisfied Customers:</Header>
      <Swiper
        navigation={true}
        slidesPerView={2}
        style={{ height: '100%', '--swiper-pagination-color': '#fff', '--swiper-navigation-color': '#fff' }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className='mySwiper'
      >
        {REVIEW_DATA.map((review) => (
          <ReviewCard key={review.author} {...review} />
        ))}
      </Swiper>
    </>
  );
};
