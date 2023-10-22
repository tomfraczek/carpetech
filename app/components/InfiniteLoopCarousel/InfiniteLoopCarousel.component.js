import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { CarouselCaontainer, Title } from './InfiniteLoopCarousel.styles';
import Image from 'next/image';
import { Fragment } from 'react';

export const InfiniteLoopCarousel = ({ data }) => {
  const { title, clients } = data;
  return (
    <CarouselCaontainer>
      <Title>{title}</Title>
      <Swiper
        navigation={false}
        modules={[Autoplay]}
        style={{ height: '100%', width: '100%' }}
        slidesPerView={2.3}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {clients.map(({ src }, i) => (
          <Fragment key={i}>
            <SwiperSlide key={i}>
              <Image src={src} width={300} height={150} alt='slide image' style={{ zIndex: '0' }} />
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </CarouselCaontainer>
  );
};
