import React from 'react';
import { ContactForm } from '@/app/components/ContactForm';

import { ContactContainer } from './ContactUsForm.styles';

export const ContactUsForm = () => {
  return (
    <ContactContainer>
      {/* <Title>Send us a Message</Title> */}
      <ContactForm />
    </ContactContainer>
  );
};
