// 'use client';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { getPage } from '@/lib/api';

import { Carousel } from '@/app/components/Carousel';
import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const { isEnabled } = draftMode();
  const content = await getPage(params.slug, isEnabled);
  if (!content[0]) {
    notFound();
  }
  return {
    title: content[0]?.seo?.title ?? '',
    keywords: content[0]?.seo?.keywords ?? '',
    openGraph: {
      title: content[0]?.seo?.title ?? '',
      description: content[0]?.seo?.description ?? '',
      image: content[0]?.seo?.image?.url ?? '',
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
    showReviews,
  } = content[0];

  return (
    <>
      <Script src='https://reviewsonmywebsite.com/js/v2/embed.js?id=7bf8acda5d5930b1a9db343a4ec1b31c' />
      {heroSection && <Carousel {...heroSection} />}
      {topSection && <ContentWithImage {...topSection} />}
      {topEmergencySection && <ContentWithImage {...topEmergencySection} />}
      {fullWidthBar && <ChemDryBar {...fullWidthBar} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {middleEmergencySection && <ContentWithImage {...middleEmergencySection} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      {bottomEmergencySection && <ContentWithImage {...bottomEmergencySection} />}
      {freeQuote && <QuickQuote {...freeQuote} />}
      {showReviews && <div data-romw-token='H2D7ArN2ny17e7RaGMsfyFYXI80Be3E2Wt5ZJDTu3PICCSfhMc' />}
    </>
  );
}
