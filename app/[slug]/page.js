// 'use client';
import { draftMode } from 'next/headers';

import { getPage } from '@/lib/api';

import { Carousel } from '@/app/components/Carousel';
import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ChemDryBar } from '@/app/components/ChemDryBar';

const CARPERT_PAGE_SLIDER_DATA = [
  {
    header: 'Chem-Dry Milton Keynes',
    description: 'We Clean Carpets, Upholstery, Curtains & Leather',
    img: image1,
  },
  {
    header: 'Chem-Dry Milton Keynes',
    description: 'Carpet & Upholstery Cleaning Experts',
    img: image2,
  },
  {
    header: 'Chem-Dry Milton Keynes',
    description: 'Hygienic Cleaning of Carpets & Furnishings',
    img: image3,
  },
];

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
