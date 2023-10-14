'use client';

import { Carousel } from '../components/Carousel';
import { ContentWithImage } from '../components/ContentWithImage';
import { UPHOLSTERY_PAGE_SLIDER_DATA, UPHOLSTERY_PROFESIONAL_CLEANING_SECTION } from './constants';

export default function Page() {
  return (
    <>
      <Carousel data={UPHOLSTERY_PAGE_SLIDER_DATA} />
      <ContentWithImage data={UPHOLSTERY_PROFESIONAL_CLEANING_SECTION} />
    </>
  );
}
