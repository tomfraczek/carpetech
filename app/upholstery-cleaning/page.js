'use client';

import { Carousel } from '../components/Carousel';
import { ChemDryBar } from '../components/ChemDryBar';
import { ContentWithImage } from '../components/ContentWithImage';
import { QuickQuote } from '../components/QuickQoute';
import {
  UPHOLSTERY_PAGE_SLIDER_DATA,
  UPHOLSTERY_PROFESIONAL_CLEANING_SECTION,
  UPHOLSTERY_PROFESIONAL_DEEP_DOWN_CLEANING_SECTION,
  UPHOLSTERY_NO_STEAM_SECTION,
} from './constants';

export default function Page() {
  return (
    <>
      <Carousel data={UPHOLSTERY_PAGE_SLIDER_DATA} />
      <ContentWithImage data={UPHOLSTERY_PROFESIONAL_CLEANING_SECTION} />
      <ChemDryBar />
      <ContentWithImage data={UPHOLSTERY_PROFESIONAL_DEEP_DOWN_CLEANING_SECTION} revert />
      <ContentWithImage data={UPHOLSTERY_NO_STEAM_SECTION} reviews />
      <QuickQuote />
    </>
  );
}
