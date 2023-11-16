'use client';
import { ChemDryBar } from '../components/ChemDryBar';
import { ContentWithImage } from '../components/ContentWithImage';
import { QuickQuote } from '../components/QuickQoute';
import { TextBar } from '../components/TextBar';
import {
  CONTENT_BAR,
  PAGE_SECTION_ONE,
  PAGE_SECTION_TWO,
  PAGE_SECTION_THREE,
  PAGE_SECTION_FOUR,
  PAGE_SECTION_FIVE,
  PAGE_SECTION_SIX,
} from './constants';

export default function Page() {
  return (
    <>
      <TextBar data={CONTENT_BAR} />
      <ContentWithImage data={PAGE_SECTION_ONE} small />
      <ContentWithImage data={PAGE_SECTION_TWO} small revert grey />
      <ContentWithImage data={PAGE_SECTION_THREE} small />
      <ChemDryBar />
      <ContentWithImage data={PAGE_SECTION_FOUR} small revert grey />
      <ContentWithImage data={PAGE_SECTION_FIVE} small />
      <ContentWithImage data={PAGE_SECTION_SIX} small reviews grey />
      <QuickQuote />
    </>
  );
}
