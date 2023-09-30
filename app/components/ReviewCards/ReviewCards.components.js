import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import { ReviewCard } from '@/app/components/ReviewCard';
import { REVIEW_DATA } from './constants';

export const ReviewCards = () => {
  return (
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
  );
};
