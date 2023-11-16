'use client';

import { Carousel } from '../components/Carousel';
import { ChemDryBar } from '../components/ChemDryBar';
import { ContentWithImage } from '../components/ContentWithImage';
import { QuickQuote } from '../components/QuickQoute';
import { SLIDER_DATA, PAGE_SECTION_ONE } from './constants';

export default function Page() {
  return (
    <>
      <Carousel data={SLIDER_DATA} />
      <ContentWithImage data={PAGE_SECTION_ONE} />
      <ChemDryBar />
      <QuickQuote />
    </>
  );
}
