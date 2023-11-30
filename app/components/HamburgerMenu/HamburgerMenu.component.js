import { useState } from 'react';
import Link from 'next/link';
import { Turn as Hamburger } from 'hamburger-react';
import Image from 'next/image';

import {
  HamburgerContainer,
  HamburgerButton,
  Logo,
  MobileMenuList,
  MobileListItem,
  SubmenuList,
  SubmenuItem,
  MobileMenuContainer,
} from './HamburgerMenu.styles';
import { MENU } from '../Navigation/constants';

import Home from '@/public/images/icons/home.svg';
import AnbgleDown from '@/public/images/icons/angleDown.svg';
import { NavigationMini } from '../NavigationMini';

// ... (imports)

export const HamburgerMenu = ({ setIsOpen, menu }) => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const closeMenu = () => {
    setOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setOpen(!open);
    setIsOpen(!open);
  };

  return (
    <HamburgerContainer>
      <HamburgerButton>
        <Hamburger toggled={open} toggle={toggleMenu} />
      </HamburgerButton>

      <Logo>
        <Link href='/'>
          <Image src='/images/carpetLogo.png' width={320} height={70.5} alt='' onClick={closeMenu} />
        </Link>
      </Logo>

      <MobileMenuContainer style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}>
        <MobileMenuList>
          {menu.map(({ title, slug, serviceChildrenCollection }, index) => {
            const { items } = serviceChildrenCollection;
            return (
              <MobileListItem
                key={index}
                onMouseEnter={() => handleMenuToggle(index)}
                onClick={items.length > 0 ? () => handleMenuToggle(index) : closeMenu}
                style={{ maxHeight: openMenu === index ? '500px' : '142px' }}
              >
                <Link href={`/service/${slug}`}>
                  {title}
                  {items.length > 0 && <Image src={AnbgleDown} width={20} alt='angle down icon' />}
                </Link>

                <SubmenuList>
                  {items.length > 0 &&
                    items.map(({ title, slug }) => (
                      <SubmenuItem key={title}>
                        <Link href={slug} onClick={closeMenu}>
                          {title}
                        </Link>
                      </SubmenuItem>
                    ))}
                </SubmenuList>
              </MobileListItem>
            );
          })}
          <MobileListItem>
            <Link href='/contact-us'>Free Quote</Link>
          </MobileListItem>
        </MobileMenuList>
        <NavigationMini mobile setOpen={toggleMenu} />
      </MobileMenuContainer>
    </HamburgerContainer>
  );
};
