'use client';
import {
  CARPERT_PAGE_SLIDER_DATA,
  CARPETPAGE_PROFESIONAL_CLEANERS_SECTION,
  CARPETPAGE_PROFESIONAL_CLEANING_SECTION,
  CARPETPAGE_CLEAN_CARPETS_SECTION,
} from '@/app/carpet-cleaning2/constants';
import { Carousel } from '@/app/components/Carousel';
import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ChemDryBar } from '@/app/components/ChemDryBar';

export default function Page() {
  return (
    <>
      <Carousel data={CARPERT_PAGE_SLIDER_DATA} />
      <ContentWithImage data={CARPETPAGE_PROFESIONAL_CLEANING_SECTION} />
      <ChemDryBar />
      <ContentWithImage data={CARPETPAGE_PROFESIONAL_CLEANERS_SECTION} revert />
      <ContentWithImage data={CARPETPAGE_CLEAN_CARPETS_SECTION} reviews />
    </>
  );
}
