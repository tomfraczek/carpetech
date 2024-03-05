import { draftMode } from 'next/headers';
import { getHomepage } from '@/lib/api';
import { Carousel } from '@/app/components/Carousel';

import { ContentWithImage } from '@/app/components/ContentWithImage';
import { ServicesCards } from '@/app/components/ServicesCards';
import { ChemDryBar } from '@/app/components/ChemDryBar';
import { QuickQuote } from '@/app/components/QuickQoute';
import { GoogleMap } from '@/app/components/GoogleMap';

// import { ReviewsContainer } from './page.styles';
import Script from 'next/script';
// import axios from 'axios';

export async function generateMetadata() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const { title, description, image, keywords } = homepage.seo;
  return {
    title,
    keywords,
    description,
    openGraph: {
      title,
      description,
      image: image.url,
    },
    verification: {
      google: 'z5C3Tq0BEN9vFOUd8_9XUM5AmEZZKjB5CBiWIHTaQFo',
    },
  };
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const {
    topSection,
    middleSection,
    bottomSection,
    contactBar,
    heroSection,
    servicesCollection,
    freeQuote,
    showReviews,
    bottomEmergencySection,
  } = homepage;

  return (
    <>
      <Script src='https://reviewsonmywebsite.com/js/v2/embed.js?id=7bf8acda5d5930b1a9db343a4ec1b31c' />
      {heroSection && <Carousel {...heroSection} />}
      {topSection && <ContentWithImage {...topSection} />}
      {servicesCollection && <ServicesCards items={servicesCollection.items} />}
      {contactBar && <QuickQuote {...contactBar} />}
      {showReviews && <div data-romw-token='H2D7ArN2ny17e7RaGMsfyFYXI80Be3E2Wt5ZJDTu3PICCSfhMc' />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      {bottomEmergencySection && <ContentWithImage {...bottomEmergencySection} />}
      {freeQuote && <QuickQuote {...freeQuote} />}
      <GoogleMap />
    </>
  );
}
