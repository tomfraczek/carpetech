'use client';

import { Carousel } from '../components/Carousel';
import { ChemDryBar } from '../components/ChemDryBar';
import { ContentWithImage } from '../components/ContentWithImage';
import { QuickQuote } from '../components/QuickQoute';
import {
  LEATHER_PAGE_SLIDER_DATA,
  LEATHER_PROFESIONAL_DEEP_DOWN_CLEANING_SECTION,
  LEATHER_PROFESIONAL_CLEANING_SECTION,
} from './constants';

export default function Page() {
  return (
    <>
      <Carousel data={LEATHER_PAGE_SLIDER_DATA} />
      <ContentWithImage data={LEATHER_PROFESIONAL_CLEANING_SECTION} />
      <ChemDryBar />
      <ContentWithImage data={LEATHER_PROFESIONAL_DEEP_DOWN_CLEANING_SECTION} revert />
      <QuickQuote />
    </>
  );
}
