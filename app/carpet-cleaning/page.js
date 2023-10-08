'use client';
import { Carousel } from '@/app/components/Carousel';
import { CARPERT_PAGE_SLIDER_DATA, CARPETPAGE_PROFESIONAL_CLEANING_SECTION } from '@/app/carpet-cleaning/constants';
import { ContentWithImage } from '@/app/components/ContentWithImage';

export default function Page() {
  return (
    <>
      <Carousel data={CARPERT_PAGE_SLIDER_DATA} />
      <ContentWithImage data={CARPETPAGE_PROFESIONAL_CLEANING_SECTION} />
    </>
  );
}
