// 'use client';
import { draftMode } from 'next/headers';

import { getPage } from '@/lib/api';

import { Carousel } from '@/app/components/Carousel';
import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ChemDryBar } from '@/app/components/ChemDryBar';

export default async function Page({ params }) {
  const { isEnabled } = draftMode();
  const content = await getPage(params.slug, isEnabled);
  const {
    topSection,
    emergencyTopSection,
    middleSection,
    emergencyMiddleSection,
    bottomSection,
    emergencyBottomSection,
    fullWidthBar,
    heroSection,
  } = content[0];
  return (
    <>
      {heroSection && <Carousel {...heroSection} />}
      {topSection && <ContentWithImage {...topSection} />}
      {emergencyTopSection && <ContentWithImage {...emergencyTopSection} />}
      {fullWidthBar && <ChemDryBar {...fullWidthBar} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {emergencyMiddleSection && <ContentWithImage {...emergencyMiddleSection} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      {emergencyBottomSection && <ContentWithImage {...emergencyBottomSection} />}
    </>
  );
}
