'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import { CarouselContainer, Header, Description, Mask, PhoneNumber, CtaContainer, Content } from './Carousel.styles';
import Link from 'next/link';
import phoneIcon from '@/public/images/icons/phonewhite.png';

export const Carousel = ({ data, border }) => {
  return (
    <CarouselContainer $border={border}>
      <Swiper
        navigation={false}
        modules={[Autoplay, Navigation]}
        style={{ height: '100%', '--swiper-pagination-color': '#fff', '--swiper-navigation-color': '#fff' }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className='mySwiper'
      >
        {data.map(({ image, subtitle, title, ctaCopy, ctaUrl }, i) => (
          <SwiperSlide key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <Content>
              <Header>{subtitle}</Header>
              <Description>{title}</Description>
              <CtaContainer>
                <Link href={ctaUrl}>
                  <Image src={phoneIcon} width={24} height={24} alt='phone-icon' />
                  {ctaCopy}
                </Link>
              </CtaContainer>
            </Content>
            <Image src={image.url} priority fill alt={image.title} style={{ zIndex: '0' }} />
            <Mask />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
