'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { BarLink, ChemDryBarContainer, Content, Logo, Header, Number, ContentWrapper } from './ChemDryBar.styles';

import Chembar from '@/public/images/chembar.png';
import Image from 'next/image';
import { Container } from '@/global/styles';
import { colors } from '@/global/colors';
import { ContactUsForm } from '@/app/components/ContactUsForm';

export const ChemDryBar = ({ category, image, title, url, displayContactForm }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <BarLink as={url && Link} href={url}>
      <ChemDryBarContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          // backgroundColor: isHovered ? `${colors.green}` : `${colors.blue}`,
          transition: 'background-color 0.3s ease',
        }}
      >
        {/* <Container> */}
        <ContentWrapper>
          <Content style={{ width: image ? '100%' : '80%' }}>
            <Header>{category}</Header>
            <Number>{title}</Number>
            {displayContactForm && <ContactUsForm />}
          </Content>
          {image && (
            <Logo>
              <Image src={image.url} width={image.width} height={image.height} alt={image.title} />
            </Logo>
          )}
        </ContentWrapper>
        {/* </Container> */}
      </ChemDryBarContainer>
    </BarLink>
  );
};
