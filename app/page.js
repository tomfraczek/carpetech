'use client';
import { Carousel } from '@/app/components/Carousel';
import { HOMEPAGE_CELEBRATION_SECTION, HOMEPAGE_REPUTATION_SECTION, HOMEPAGE_SLIDER_DATA } from '@/app/constants';

import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ServicesCards } from '@/app/components/ServicesCards';
import { CarpetCleaning } from '@/app/components/CarpetCleaning';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';

export default function Page() {
  return (
    <>
      <Carousel data={HOMEPAGE_SLIDER_DATA} />
      <ContentWithImage data={HOMEPAGE_CELEBRATION_SECTION} />
      <ServicesCards />
      <CarpetCleaning />
      <ChemDryBar />
      <ContentWithImage data={HOMEPAGE_REPUTATION_SECTION} reviews />
      <QuickQuote />
    </>
  );
}
