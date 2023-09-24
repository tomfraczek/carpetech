'use client';
import Image from 'next/image';

import { Carousel } from '@/app/components/Carousel';
import { HOMEPAGE_SLIDER_DATA } from './constants';

import { Celebration } from '@/app/components/Celebration';
import { ServicesCards } from '@/app/components/ServicesCards';

export default function Page() {
  return (
    <>
      <Carousel data={HOMEPAGE_SLIDER_DATA} />
      <Celebration />
      <ServicesCards />
    </>
  );
}
