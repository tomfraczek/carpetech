'use client';
import { QuickQuote } from '../components/QuickQoute';
import { TextBar } from '../components/TextBar';
import { CONTENT_BAR } from './constants';

export default function Page() {
  return (
    <>
      <TextBar data={CONTENT_BAR} />
      <QuickQuote />
    </>
  );
}
