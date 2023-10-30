'use client';
import { TextBar } from '@/app/components/TextBar';
import { TwoColumns } from '@/app/components/TwoColumns';
import { CONTENT_BAR, CONTACT_INFORMATION } from './constants';
import { ContactUsAddress } from '@/app/components/ContactUsAddress';
import { Container } from '@/global/styles';
import { QuickQuote } from '../components/QuickQoute';

export default function Page() {
  console.log(CONTACT_INFORMATION);
  return (
    <>
      <TextBar data={CONTENT_BAR} />
      <Container>
        <TwoColumns>
          <ContactUsAddress {...CONTACT_INFORMATION} />
          <QuickQuote />
        </TwoColumns>
      </Container>
    </>
  );
}
