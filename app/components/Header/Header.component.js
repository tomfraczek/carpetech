'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPages } from '@/lib/api';

import { Subheader } from '@/app/components/Subheader';
import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer, Content, Logo } from './Header.styles';
import { Container } from '@/global/styles';
import { Navigation } from '../Navigation';
import { NavigationMini } from '../NavigationMini';

// const getPages = async () => {
//   const allPages = await getAllPages(false);
//   const menuItems = allPages.map((page) => page.title);
//   console.log(menuItems);
//   return menuItems;
// };

export const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <HeaderContainer isOpen={isOpen}>
      <Subheader />
      <Container>
        <NavigationMini />
        {/* <Content>
          <HamburgerMenu menu={menu} setIsOpen={setIsOpen} />
          <Logo>
            <Link href='/'>
              <Image src='/images/carpetLogo.png' width={320} height={70.5} alt='' />
            </Link>
          </Logo>
          <Navigation menu={menu} />
        </Content> */}
      </Container>
    </HeaderContainer>
  );
};
