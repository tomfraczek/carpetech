'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { BarLink, ChemDryBarContainer, Content, Logo, Header, Number, ContentWrapper } from './ChemDryBar.styles';

import Chembar from '@/public/images/chembar.png';
import Image from 'next/image';
import { Container } from '@/global/styles';
import { colors } from '@/global/colors';

export const ChemDryBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <BarLink as={Link} href='google.com'>
      <ChemDryBarContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHovered ? `${colors.green}` : `${colors.blue}`,
          transition: 'background-color 0.3s ease',
        }}
      >
        <Container>
          <ContentWrapper>
            <Content>
              <Header>Chem-Dry Will Clean, Protect & Restore</Header>
              <Number>01908 505305</Number>
            </Content>
            <Logo>
              <Image
                style={{
                  transform: isHovered ? 'rotate(-15deg)' : 'rotate(0deg)',
                }}
                src={Chembar}
                width={210}
                height={210}
                alt='Rug Cleaning Company Milton Keynes'
              />
            </Logo>
          </ContentWrapper>
        </Container>
      </ChemDryBarContainer>
    </BarLink>
  );
};
