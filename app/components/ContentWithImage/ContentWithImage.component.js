'use client';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ContentWithImageContainer, ContentLeft, ContentRight, LogoContainer } from './ContentWithImage.styles';
import { ReviewCards } from '@/app/components/ReviewCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const ContentWithImage = ({
  addReviewCards,
  content,
  icon,
  image,
  imagePosition,
  backgroundColour,
  carousel,
}) => {
  const carouselItem = carousel?.carouselSlideCollection.items;
  return (
    <>
      <ContentWithImageContainer $reverse={imagePosition} $background={backgroundColour?.value}>
        <ContentLeft>
          <>{content && documentToReactComponents(content.json)}</>
          {icon && (
            <LogoContainer>
              <Image src={icon.url} alt={icon.title} width={icon.width} height={icon.height} />
            </LogoContainer>
          )}
          {addReviewCards && <ReviewCards />}
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
    </>
  );
};
