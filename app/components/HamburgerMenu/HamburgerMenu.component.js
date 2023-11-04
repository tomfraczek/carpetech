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

export const HamburgerMenu = ({ setIsOpen }) => {
  const [open, setOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuHover = (index) => {
    setOpenMenu(index);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };
  return (
    <HamburgerContainer>
      <HamburgerButton>
        <Hamburger
          onToggle={(toggled) => {
            setOpen(toggled);
            setIsOpen(toggled);
          }}
        />
      </HamburgerButton>

      <Logo>
        <Image src='/images/carpetLogo.png' width={320} height={70.5} alt='' />
      </Logo>

      <MobileMenuContainer style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}>
        <MobileMenuList>
          {MENU.map(({ url, icon, title, dropdown, hidden }, index) => (
            <MobileListItem
              key={index}
              onMouseEnter={() => handleMenuHover(index)}
              onMouseLeave={handleMenuLeave}
              style={{ display: hidden && 'none' }}
            >
              <Link href={url} style={icon && { display: 'flex', alignItems: 'center', height: '57px' }}>
                {icon ? <Image src={Home} width={20} height={20} alt='home icon' /> : title}
              </Link>
              {dropdown && <Image src={AnbgleDown} width={20} alt='angle down icon' />}
              {dropdown && openMenu === index && (
                <SubmenuList>
                  {item.dropdown.map((subItem, subIndex) => (
                    <SubmenuItem key={subIndex}>
                      <Link href={subItem.url}>{subItem.title}</Link>
                    </SubmenuItem>
                  ))}
                </SubmenuList>
              )}
            </MobileListItem>
          ))}
        </MobileMenuList>
        <NavigationMini mobile />
      </MobileMenuContainer>
    </HamburgerContainer>
  );
};
