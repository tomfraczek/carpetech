// 'use client';
import { draftMode } from 'next/headers';
import { getHomepage } from '@/lib/api';
import { Carousel } from '@/app/components/Carousel';
import {
  HOMEPAGE_CELEBRATION_SECTION,
  HOMEPAGE_REPUTATION_SECTION,
  HOMEPAGE_SLIDER_DATA,
  SERVICES_DATA,
} from '@/app/constants';

import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ServicesCards } from '@/app/components/ServicesCards';
import { CarpetCleaning } from '@/app/components/CarpetCleaning';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';

export default async function Page() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const { topSection, middleSection, bottomSection } = homepage;
  return (
    <>
      <Carousel data={HOMEPAGE_SLIDER_DATA} />
      <ContentWithImage data={topSection} />
      <ServicesCards data={SERVICES_DATA} />
      <CarpetCleaning />
      <ChemDryBar />
      <ContentWithImage data={HOMEPAGE_REPUTATION_SECTION} reviews />
      <QuickQuote />
    </>
  );
}
