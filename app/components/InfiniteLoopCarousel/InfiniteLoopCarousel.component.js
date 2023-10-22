import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { CarouselCaontainer, Title } from './InfiniteLoopCarousel.styles';
import Image from 'next/image';
import { Container } from '@/global/styles';

export const InfiniteLoopCarousel = ({ data }) => {
  const { title, clients } = data;
  return (
    <CarouselCaontainer>
      <Title>{title}</Title>
      <Swiper
        navigation={false}
        modules={[Autoplay]}
        style={{ height: '100%', width: '100%' }}
        slidesPerView={1.5}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        // className='mySwiper'
      >
        {clients.map(({ src }, i) => (
          <SwiperSlide key={i}>
            <Image src={src} width={400} height={200} alt='slide image' style={{ zIndex: '0' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselCaontainer>
  );
};
