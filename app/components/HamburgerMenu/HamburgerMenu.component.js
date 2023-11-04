import { useState } from 'react';
import Link from 'next/link';
import { Turn as Hamburger } from 'hamburger-react';
import Image from 'next/image';

import { HamburgerContainer, HamburgerButton, Logo, MobileMenu } from './HamburgerMenu.styles';
import { MENU } from '../Navigation/constants';

import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';
import Home from '@/public/images/icons/home.svg';
import AnbgleDown from '@/public/images/icons/angleDown.svg';

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 2222;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  transition: box-shadow 0.2s ease;
  box-shadow: inset 0 5em transparent;
  position: relative;

  &:hover img {
    filter: invert(44%) sepia(25%) saturate(635%) hue-rotate(102deg) brightness(89%) contrast(87%);
  }

  > a {
    padding: 15px;
    color: ${colors.blue};
    white-space: nowrap;
    font-weight: 700;
    font-size: 18px;
    display: block;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${colors.hoverWhite};
      color: ${colors.green};

      ~ img {
        filter: invert(44%) sepia(25%) saturate(635%) hue-rotate(102deg) brightness(89%) contrast(87%);
      }
    }
  }

  &:last-of-type {
    border: 2px solid ${colors.blue};
    border-radius: 5em;
    overflow: hidden;

    a {
      padding: 10px 20px;
    }

    &:hover {
      background-color: ${colors.blue};

      a {
        background-color: ${colors.blue};
        color: ${colors.white};
      }
    }
  }

  > img {
    position: absolute;
    bottom: 0;
    left: calc(50% - 10px);
  }
`;

export const SubmenuList = styled.ul`
  background-color: ${colors.green};
  position: absolute;
  min-width: 180px;
`;

export const SubmenuItem = styled.li`
  background-color: ${colors.green};
  border-bottom: 1px solid ${colors.darkGreen};

  &:first-of-type {
    box-shadow: inset 0 7px 9px -4px rgba(0, 0, 0, 0.15);
  }

  &:hover {
    background-color: ${colors.darkGreen};
  }

  a {
    color: ${colors.white};
    font-size: 18px;
    white-space: nowrap;
    padding: 12px 30px 12px 30px;
    display: block;
  }
`;

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(toggled);
          }}
        />
      </HamburgerButton>

      <Logo>
        <Image src='/images/carpetLogo.png' width={320} height={70.5} alt='' />
      </Logo>

      <MobileMenu style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        {MENU.map(({ url, icon, title, dropdown, hidden }, index) => (
          <ListItem
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
          </ListItem>
        ))}
      </MobileMenu>
    </HamburgerContainer>
  );
};
