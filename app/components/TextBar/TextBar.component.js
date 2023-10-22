'use client';

import React, { useState } from 'react';
import { BarContainer, BarTitle, BarParagraph } from './TextBar.styles';
import { Container } from '@/global/styles';

export const TextBar = ({ data }) => {
  const { title, paragraph } = data;
  return (
    <BarContainer>
      <Container>
        <BarTitle>{title}</BarTitle>

        <BarParagraph>{paragraph}</BarParagraph>
      </Container>
    </BarContainer>
  );
};
