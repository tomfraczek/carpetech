'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Subheader } from '@/app/components/Subheader';
import { HamburgerMenu } from '../HamburgerMenu';
import {
  HeaderContainer,
  Content,
  Logo,
  Contact,
  Details,
  PhoneNumber,
  MobileContact,
  MobileContactContainer,
} from './Header.styles';
import { Container } from '@/global/styles';
import { Navigation } from '../Navigation';
import { NavigationMini } from '../NavigationMini';

import phone from '@/public/images/icons/phone.png';

export const Header = ({ header, navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <HeaderContainer $sticky={isOpen.toString()}>
      <Subheader {...header} />
      <Container>
        <NavigationMini setIsOpen={setIsOpen} />
        <Content>
          <HamburgerMenu menu={navigation} setIsOpen={setIsOpen} />
          <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Mobile WhatsApp:</p>
            </Details>
            <PhoneNumber>078 49495757</PhoneNumber>
          </Contact>

          <MobileContactContainer>
            <MobileContact>
              <Details>
                <Image src={phone} width={16} height={16} alt='phone-icon' />
                <p>Head Office:</p>
              </Details>

              <PhoneNumber>01184 115960</PhoneNumber>
            </MobileContact>

            <MobileContact>
              <Details>
                <Image src={phone} width={16} height={16} alt='phone-icon' />
                <p>Mobile WhatsApp:</p>
              </Details>
              <PhoneNumber>0784 9495757</PhoneNumber>
            </MobileContact>
          </MobileContactContainer>

          <Logo>
            <Link href='/'>
              <Image src='/images/carpetLogo.png' width={320} height={70.5} alt='' />
            </Link>
          </Logo>

          <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Head Office:</p>
            </Details>

            <PhoneNumber>01184 115960</PhoneNumber>
          </Contact>
        </Content>
        <Navigation menu={navigation} />
      </Container>
    </HeaderContainer>
  );
};
