'use client';
import { ContentWithImage } from '../components/ContentWithImage';
import { QuickQuote } from '../components/QuickQoute';
import { TextBar } from '../components/TextBar';
import { CONTENT_BAR, PAGE_SECTION_ONE } from './constants';

import Image from 'next/image';
import {
  ContentWithImageContainer,
  ContentLeft,
  ContentRight,
  LogoContainer,
  Header,
  Subheader,
  Paragraph,
  FactHeader,
  FactsList,
  FactItem,
} from './about.styles';
import { Fragment } from 'react';
import AnbgleDown from '@/public/images/icons/angleDown.svg';

export default function Page() {
  const isReversed = false;
  return (
    <>
      <TextBar data={CONTENT_BAR} />
      <Fragment>
        <ContentWithImageContainer $reverse={isReversed}>
          <ContentLeft>
            {PAGE_SECTION_ONE.map(({ icon, header, subheader, paragraphs, facts }, index) => (
              <Fragment key={index}>
                {icon && (
                  <LogoContainer>
                    <Image src={icon} alt='year logo' />
                  </LogoContainer>
                )}
                {header && <Header>{header}</Header>}
                {subheader && <Subheader>{subheader}</Subheader>}
                {paragraphs && paragraphs.map((paragraph, i) => <Paragraph key={i}>{paragraph}</Paragraph>)}
                {facts && (
                  <>
                    <FactHeader>Key Facts:</FactHeader>
                    <FactsList>
                      {facts.map((fact, index) => (
                        <FactItem key={index}>
                          <Image src={AnbgleDown} width={20} alt='angle right icon' />
                          {fact}
                        </FactItem>
                      ))}
                    </FactsList>
                  </>
                )}
              </Fragment>
            ))}
          </ContentLeft>
          {/* Render ContentRight here if needed */}
          {PAGE_SECTION_ONE.map(
            ({ image }, index) =>
              image && (
                <ContentRight key={index}>
                  <Image src={image} alt='family logo' width={768} height={512} />
                </ContentRight>
              )
          )}
        </ContentWithImageContainer>
      </Fragment>
      <QuickQuote />
    </>
  );
}
