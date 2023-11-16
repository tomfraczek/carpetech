// 'use client';
import { draftMode } from 'next/headers';

import { getAllPages, getPage } from '@/lib/api';

import { CARPERT_PAGE_SLIDER_DATA } from '@/app/carpet-cleaning2/constants';

import { Carousel } from '@/app/components/Carousel';
import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ChemDryBar } from '@/app/components/ChemDryBar';

export default async function Page({ params }) {
  const { isEnabled } = draftMode();
  // const { topSection, middleSection, bottomSection, fullWidthBar, title } = await getPage(params.slug, isEnabled);
  const content = await getPage(params.slug, isEnabled);

  const { topSection, middleSection, bottomSection, fullWidthBar } = content[0];

  return (
    <>
      <Carousel data={CARPERT_PAGE_SLIDER_DATA} />
      {topSection && <ContentWithImage {...topSection} />}
      {fullWidthBar && <ChemDryBar {...fullWidthBar} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
    </>
  );
}
