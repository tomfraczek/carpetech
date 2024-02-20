'use client';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  ContentWithImageContainer,
  ContentLeft,
  ContentRight,
  LogoContainer,
  LogoContainerMobile,
} from './ContentWithImage.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AngleDown from '@/public/images/icons/angleDown.svg';
import { GoogleReviews } from '@/app/components/GoogleReviews';

export const ContentWithImage = ({ addReviewCards, content, icon, imagePosition, backgroundColour, carousel }) => {
  const carouselItem = carousel?.carouselSlideCollection.items;
  return (
    <>
      <ContentWithImageContainer $reverse={imagePosition} $background={backgroundColour?.value}>
        <ContentLeft $icon={AngleDown.src}>
          {icon && (
            <LogoContainer>
              <Image src={icon.url} alt={icon.title} width={icon.width} height={icon.height} />
            </LogoContainer>
          )}
          <>{content && documentToReactComponents(content.json)}</>
          {icon && (
            <LogoContainerMobile>
              <Image src={icon.url} alt={icon.title} width={icon.width} height={icon.height} />
            </LogoContainerMobile>
          )}
        </ContentLeft>
        <ContentRight>
          {carousel && (
            <Swiper
              navigation={false}
              modules={[Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              style={{ height: '100%' }}
            >
              {carouselItem.map(({ url, title }, i) => (
                <SwiperSlide key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={url} priority fill alt={title} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </ContentRight>
      </ContentWithImageContainer>
      {/* {addReviewCards && <GoogleReviews />} */}
    </>
  );
};
