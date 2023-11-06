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

export const Carousel = ({ data }) => {
  return (
    <CarouselContainer>
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
        {data.map(({ img, header, description }, i) => (
          <SwiperSlide key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <Content>
              <Header>{header}</Header>
              <Description>{description}</Description>
              <CtaContainer>
                <Link href='google.com'>
                  <Image src={phoneIcon} width={24} height={24} alt='phone-icon' />
                  Call <PhoneNumber>01908 505305</PhoneNumber> for a quote
                </Link>
              </CtaContainer>
            </Content>
            <Image src={img.src} priority fill alt={header} style={{ zIndex: '0' }} />
            <Mask />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
