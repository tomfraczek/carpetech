"use client";
import Image from "next/image";

import { Container } from "@/global/styles";
import {
  Heading,
  QuickQuoteContainer,
  Description,
  BackgroundOverlay,
  BackgroundContainer,
} from "./QuickQuote.styles";

import { ContactUsForm } from "../ContactUsForm";

export const QuickQuote = ({
  header,
  description,
  fontColour,
  backgroundColour,
  backgroundImage,
}) => {
  return (
    <QuickQuoteContainer
      id="quickQuote"
      style={{ backgroundColor: !backgroundImage && `${backgroundColour}` }}
    >
      <Container style={{ zIndex: "3" }}>
        <Heading style={{ color: `${fontColour}` }}>{header}</Heading>
        <Description style={{ color: `${fontColour}` }}>
          {description}
        </Description>
        <ContactUsForm />
      </Container>
      <BackgroundOverlay />
      {backgroundImage && (
        <BackgroundContainer>
          <Image
            src={backgroundImage.url}
            alt="background quote"
            width={backgroundImage.width}
            height={backgroundImage.height}
          />
        </BackgroundContainer>
      )}
    </QuickQuoteContainer>
  );
};
