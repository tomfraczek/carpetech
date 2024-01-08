// 'use client';
import { draftMode } from 'next/headers';

import { getPage } from '@/lib/api';

import { Carousel } from '@/app/components/Carousel';
import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';

export async function generateMetadata({ params }) {
  const { isEnabled } = draftMode();
  const content = await getPage(params.slug, isEnabled);
  return {
    title: content[0].seo?.title ?? '',
    keywords: content[0].seo?.keywords ?? '',
    openGraph: {
      title: content[0].seo?.title ?? '',
      description: content[0].seo?.description ?? '',
      image: content[0].seo?.image?.url ?? '',
    },
  };
}

export default async function Page({ params }) {
  const { isEnabled } = draftMode();
  const content = await getPage(params.slug, isEnabled);
  const {
    topSection,
    topEmergencySection,
    middleSection,
    middleEmergencySection,
    bottomSection,
    bottomEmergencySection,
    fullWidthBar,
    heroSection,
    freeQuote,
  } = content[0];
  console.log(content[0]);
  return (
    <>
      {heroSection && <Carousel {...heroSection} />}
      {topSection && <ContentWithImage {...topSection} />}
      {topEmergencySection && <ContentWithImage {...topEmergencySection} />}
      {fullWidthBar && <ChemDryBar {...fullWidthBar} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {middleEmergencySection && <ContentWithImage {...middleEmergencySection} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      {bottomEmergencySection && <ContentWithImage {...bottomEmergencySection} />}
      {freeQuote && <QuickQuote {...freeQuote} />}
    </>
  );
}
