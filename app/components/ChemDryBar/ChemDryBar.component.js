'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { BarLink, ChemDryBarContainer, Content, Logo, Header, Number, ContentWrapper } from './ChemDryBar.styles';

import Chembar from '@/public/images/chembar.png';
import Image from 'next/image';
import { Container } from '@/global/styles';
import { colors } from '@/global/colors';

export const ChemDryBar = ({ category, image, title, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  console.log(url);
  return (
    <BarLink as={Link} href={url}>
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
              <Header>{category}</Header>
              <Number>{title}</Number>
            </Content>
            {image && (
              <Logo>
                <Image
                  style={{
                    transform: isHovered ? 'rotate(-15deg)' : 'rotate(0deg)',
                  }}
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.title}
                />
              </Logo>
            )}
          </ContentWrapper>
        </Container>
      </ChemDryBarContainer>
    </BarLink>
  );
};
