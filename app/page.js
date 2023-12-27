import { draftMode } from 'next/headers';
import { getHomepage } from '@/lib/api';
import { Carousel } from '@/app/components/Carousel';

import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ServicesCards } from '@/app/components/ServicesCards';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';

export async function generateMetadata() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const { title, description, image, keywords } = homepage.seo;
  return {
    title,
    keywords,
    openGraph: {
      title,
      description,
      image: image.url,
    },
  };
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const { topSection, middleSection, bottomSection, fullWidthBar, heroSection, servicesCollection } = homepage;
  return (
    <>
      {heroSection && <Carousel {...heroSection} />}
      {topSection && <ContentWithImage {...topSection} />}
      {servicesCollection && <ServicesCards items={servicesCollection.items} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {fullWidthBar && <ChemDryBar {...fullWidthBar} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      <QuickQuote />
    </>
  );
}
