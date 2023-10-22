'use client';

import { Carousel } from '../components/Carousel';
import { ChemDryBar } from '../components/ChemDryBar';
import { ContentWithImage } from '../components/ContentWithImage';
import { QuickQuote } from '../components/QuickQoute';
import {
  RENTAL_PAGE_SLIDER_DATA,
  RENTAL_PROFESIONAL_CLEANING_SECTION,
  RENTAL_PROFESIONAL_DEEP_DOWN_CLEANING_SECTION,
} from './constants';

export default function Page() {
  return (
    <>
      <Carousel data={RENTAL_PAGE_SLIDER_DATA} />
      <ContentWithImage data={RENTAL_PROFESIONAL_CLEANING_SECTION} />
      <ChemDryBar />
      <ContentWithImage data={RENTAL_PROFESIONAL_DEEP_DOWN_CLEANING_SECTION} revert />
      <QuickQuote />
    </>
  );
}
