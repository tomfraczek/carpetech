'use client';

import { Carousel } from '../components/Carousel';
import { ChemDryBar } from '../components/ChemDryBar';
import { ContentWithImage } from '../components/ContentWithImage';
import { InfiniteLoopCarousel } from '../components/InfiniteLoopCarousel';
import { QuickQuote } from '../components/QuickQoute';
import { SLIDER_DATA, PAGE_SECTION_ONE, PAGE_SECTION_TWO, PAGE_SECTION_THREE } from './constants';

export default function Page() {
  return (
    <>
      <Carousel data={SLIDER_DATA} />
      <ContentWithImage data={PAGE_SECTION_ONE} />
      <ChemDryBar />
      <ContentWithImage data={PAGE_SECTION_TWO} revert />
      <ContentWithImage data={PAGE_SECTION_THREE} />
      <QuickQuote />
    </>
  );
}
