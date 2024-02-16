'use client';
import { useState, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import Image from 'next/image';
import axios from 'axios';

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
  const [reviews, setReviews] = useState([]);
  // const apiKey = 'AIzaSyCemcFUJTtSY4pL6RaAL48N8uU3PT0pof8';
  // const placeId = 'ChIJAfUrG0VEBEcRtEycalTUIso';
  // const fields = 'rating, reviews';
  // const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=${fields}&placeId=${placeId}&key=${apiKey}`;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJAfUrG0VEBEcRtEycalTUIso&fields=reviews&key=AIzaSyCemcFUJTtSY4pL6RaAL48N8uU3PT0pof8`
        );
        console.log(response.data);
        setReviews(response.data.result.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: 'AIzaSyCemcFUJTtSY4pL6RaAL48N8uU3PT0pof8',
  // });

  // const [map, setMap] = useState(null);

  // const onLoad = useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // // console.log(map);

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  const apiKey = 'AIzaSyCemcFUJTtSY4pL6RaAL48N8uU3PT0pof8';
  const placeId = 'ChIJAfUrG0VEBEcRtEycalTUIso';
  const fields = 'rating, reviews';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=${fields}&placeId=${placeId}&key=${apiKey}`;
  // let request = {
  //   placeId: 'ChIJAfUrG0VEBEcRtEycalTUIso',
  //   fields: ['rating', 'reviews'],
  // };

  // let service = new google.maps.places.PlacesService(map);

  // service.getDetails(request, callback);

  // function callback(place, status) {
  //   if (status == google.maps.places.PlacesServiceStatus.OK) {
  //     console.log(place);
  //   }
  // }

  // const config = {
  //   method: 'get',
  //   url,
  //   headers: {},
  // };

  // axios(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <CarouselContainer $border={borderColour}>
      <Swiper
        navigation={false}
        effect='fade'
        modules={[Autoplay, EffectFade]}
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
