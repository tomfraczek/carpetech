'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import {
  CarouselContainer,
  Header,
  Description,
  Mask,
  PhoneNumber,
  CtaContainer,
  Content,
  ImageContainer,
} from './Carousel.styles';
import Link from 'next/link';
import phoneIcon from '@/public/images/icons/phonewhite.png';

export const Carousel = ({ borderColour, carouselCollection }) => {
  const { items } = carouselCollection;
  return (
    <CarouselContainer $border={borderColour}>
      <Swiper
        navigation={false}
        modules={[Autoplay]}
        style={{ height: '100%', '--swiper-pagination-color': '#fff', '--swiper-navigation-color': '#fff' }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={true}
        className='mySwiper'
      >
        {items.map(({ image, subtitle, title, ctaCopy, ctaUrl }, i) => (
          <SwiperSlide key={i} style={{ display: 'flex', alignItems: 'center', height: 'auto' }}>
            <Content>
              {subtitle && <Header>{subtitle}</Header>}
              {title && <Description>{title}</Description>}
              {ctaCopy && ctaUrl && (
                <CtaContainer>
                  <Link href={ctaUrl}>
                    <Image src={phoneIcon} width={24} height={24} alt='phone-icon' />
                    {ctaCopy}
                  </Link>
                </CtaContainer>
              )}
            </Content>
            <ImageContainer>
              <Image
                src={image.url}
                priority
                width={image.width}
                height={image.height}
                alt={image.title}
                style={{ zIndex: '0' }}
              />
            </ImageContainer>
            <Mask />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
