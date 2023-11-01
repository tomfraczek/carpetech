import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import quotes from '@/public/images/icons/quote.png';

import { Author, Location, Paragraph, Rating, ReviewCardContainer, QuoteIcon } from './ReviewCard.styles';
import Image from 'next/image';

export const StarIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' className='star_solid' viewBox='-8 -8 584 520'>
    <path d='M259.3 17.8 194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z' />
  </svg>
);

export const renderStars = (number) => {
  return Array.from({ length: number }, (_, index) => <StarIcon key={index} />);
};

export const ReviewCard = ({ review, author, location, rating }) => {
  return (
    <SwiperSlide style={{ padding: '0 15px' }}>
      <ReviewCardContainer>
        <Paragraph>{review}</Paragraph>
        <Author>{author}</Author>
        <Location>{location}</Location>

        <Rating>{renderStars(rating)}</Rating>
        <QuoteIcon as={Image} src={quotes} alt='quotes' width={51} height={51} />
      </ReviewCardContainer>
    </SwiperSlide>
  );
};

//swiper bug: https://github.com/nolimits4web/swiper/issues/4413#issuecomment-1021387492
ReviewCard.displayName = 'SwiperSlide';
