import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Script from "next/script";

import { getPage } from "@/lib/api";

import { Carousel } from "@/app/components/Carousel";
import { ContentWithImage } from "@/app/components/ContentWithImage";
import { QuickQuote } from "@/app/components/QuickQoute";
import { FloatingCtaMobile } from "@/app/components/FloatingCtaMobile";

export async function generateMetadata({ params }) {
  const { isEnabled } = draftMode();
  const content = await getPage(params.slug, isEnabled);
  const siteURL = "https://www.carpetech.co.uk/service";
  if (!content[0]) {
    notFound();
  }
  return {
    title: content[0]?.seo?.title ?? "",
    keywords: content[0]?.seo?.keywords ?? "",
    description: content[0]?.seo?.description ?? "",
    openGraph: {
      title: content[0]?.seo?.title ?? "",
      description: content[0]?.seo?.description ?? "",
      image: content[0]?.seo?.image?.url ?? "",
    },
    alternates: {
      canonical: `${siteURL}/${params.slug}`,
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
    heroSection,
    freeQuote,
    showReviews,
    contactBar,
  } = content[0];

  return (
    <>
      <Script src="https://reviewsonmywebsite.com/js/v2/embed.js?id=7bf8acda5d5930b1a9db343a4ec1b31c" />
      {heroSection && <Carousel {...heroSection} />}
      {topSection && <ContentWithImage {...topSection} />}
      {topEmergencySection && <ContentWithImage {...topEmergencySection} />}
      {showReviews && (
        <div
          className="reviewsContainer"
          data-romw-token="H2D7ArN2ny17e7RaGMsfyFYXI80Be3E2Wt5ZJDTu3PICCSfhMc"
        />
      )}
      {contactBar && <QuickQuote {...contactBar} />}
      {middleSection && <ContentWithImage {...middleSection} />}
      {middleEmergencySection && (
        <ContentWithImage {...middleEmergencySection} />
      )}
      {bottomSection && <ContentWithImage {...bottomSection} />}
      {bottomEmergencySection && (
        <ContentWithImage {...bottomEmergencySection} />
      )}
      {freeQuote && <QuickQuote {...freeQuote} />}
      <FloatingCtaMobile />
    </>
  );
}
