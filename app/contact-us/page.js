'use client';
import { TextBar } from '@/app/components/TextBar';
import { TwoColumns } from '@/app/components/TwoColumns';
import { CONTENT_BAR, CONTACT_INFORMATION } from './constants';
import { ContactUsAddress } from '@/app/components/ContactUsAddress';
import { ContactUsForm } from '@/app/components/ContactUsForm';
import { Container } from '@/global/styles';

export default function Page() {
  return (
    <>
      <TextBar data={CONTENT_BAR} />
      <Container>
        <TwoColumns>
          <ContactUsAddress {...CONTACT_INFORMATION} />
          <ContactUsForm />
        </TwoColumns>
      </Container>
    </>
  );
}
