'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Subheader } from '@/app/components/Subheader';
import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer, Content, Logo, Contact, Details, PhoneNumber } from './Header.styles';
import { Container } from '@/global/styles';
import { Navigation } from '../Navigation';
import { NavigationMini } from '../NavigationMini';

import phone from '@/public/images/icons/phone.png';

export const Header = ({ menu, header }) => {
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
          <HamburgerMenu menu={menu} setIsOpen={setIsOpen} />
          <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Freephone Helpline:</p>
            </Details>
            <PhoneNumber>0800 581594</PhoneNumber>
          </Contact>

          <Logo>
            <Link href='/'>
              <Image src='/images/carpetLogo.png' width={320} height={70.5} alt='' />
            </Link>
          </Logo>

          <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Milton Keynes Office:</p>
            </Details>

            <PhoneNumber>01908 505305</PhoneNumber>
          </Contact>
        </Content>
        <Navigation menu={menu} />
      </Container>
    </HeaderContainer>
  );
};
