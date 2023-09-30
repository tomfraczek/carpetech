'use client';
import { Carousel } from '@/app/components/Carousel';
import { HOMEPAGE_SLIDER_DATA } from './constants';

import { Celebration } from '@/app/components/Celebration';
import { ServicesCards } from '@/app/components/ServicesCards';
import { CarpetCleaning } from '@/app/components/CarpetCleaning';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { Reputation } from '@/app/components/Reputation';
import { QuickQuote } from '@/app/components/QuickQoute';

export default function Page() {
  return (
    <>
      <Carousel data={HOMEPAGE_SLIDER_DATA} />
      <Celebration />
      <ServicesCards />
      <CarpetCleaning />
      <ChemDryBar />
      <Reputation />
      <QuickQuote />
    </>
  );
}
