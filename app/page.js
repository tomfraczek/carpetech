import { draftMode } from 'next/headers';
import { getHomepage, getServices } from '@/lib/api';
import { Carousel } from '@/app/components/Carousel';
import {
  HOMEPAGE_CELEBRATION_SECTION,
  HOMEPAGE_REPUTATION_SECTION,
  HOMEPAGE_SLIDER_DATA,
  SERVICES_DATA,
} from '@/app/constants';

import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ServicesCards } from '@/app/components/ServicesCards';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';

export default async function Page() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const services = await getServices(isEnabled);
  const { topSection, middleSection, bottomSection, fullWidthBar, heroCollection, heroBorderColour } = homepage;

  return (
    <>
      <Carousel data={heroCollection.items} border={heroBorderColour} />
      {topSection && <ContentWithImage {...topSection} />}
      {services && <ServicesCards items={services} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {fullWidthBar && <ChemDryBar {...fullWidthBar} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      <QuickQuote />
    </>
  );
}
