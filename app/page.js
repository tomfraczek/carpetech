import { draftMode } from 'next/headers';
import { getHomepage } from '@/lib/api';
import { Carousel } from '@/app/components/Carousel';

import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ServicesCards } from '@/app/components/ServicesCards';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';
import { GoogleReviews } from '@/app/components/GoogleReviews';
// import axios from 'axios';

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
  const { topSection, middleSection, bottomSection, fullWidthBar, heroSection, servicesCollection, freeQuote } =
    homepage;
  // const apiKey = 'AIzaSyCemcFUJTtSY4pL6RaAL48N8uU3PT0pof8';
  // const placeId = 'ChIJAfUrG0VEBEcRtEycalTUIso';
  // const fields = 'rating, reviews';
  // const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=${fields}&${placeId}&key=${apiKey}`;

  // const config = {
  //   method: 'get',
  //   url,
  //   headers: {},
  // };

  // axios(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <>
      {heroSection && <Carousel {...heroSection} />}
      {topSection && <ContentWithImage {...topSection} />}
      {servicesCollection && <ServicesCards items={servicesCollection.items} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {fullWidthBar && <ChemDryBar {...fullWidthBar} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      {freeQuote && <QuickQuote {...freeQuote} />}
      <GoogleReviews />
    </>
  );
}
