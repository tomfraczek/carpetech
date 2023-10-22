'use client';

import { Carousel } from '../components/Carousel';
import { ChemDryBar } from '../components/ChemDryBar';
import { ContentWithImage } from '../components/ContentWithImage';
import { QuickQuote } from '../components/QuickQoute';
import { ServicesCards } from '../components/ServicesCards';
import { SLIDER_DATA, PAGE_SECTION_ONE, PAGE_SECTION_TWO, SERVICES_DATA } from './constants';

export default function Page() {
  return (
    <>
      <Carousel data={SLIDER_DATA} />
      <ContentWithImage data={PAGE_SECTION_ONE} />
      <ServicesCards data={SERVICES_DATA} />
      <ChemDryBar />
      <ContentWithImage data={PAGE_SECTION_TWO} revert reviews />
      <QuickQuote />
    </>
  );
}
