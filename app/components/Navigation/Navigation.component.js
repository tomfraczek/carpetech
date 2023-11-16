'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MENU } from '@/app/components/Navigation/constants';
import AnbgleDown from '@/public/images/icons/angleDown.svg';
import Home from '@/public/images/icons/home.svg';

import { MenuList, ListItem, SubmenuList, SubmenuItem, NavContainer, ContactButton } from './Navigation.styles';
import { Container } from '@/global/styles';

export const Navigation = ({ menu }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuHover = (index) => {
    setOpenMenu(index);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };
  return (
    <NavContainer>
      <MenuList>
        {menu.map(({ title, slug }, index) => (
          <ListItem
            key={index}
            onMouseEnter={() => handleMenuHover(index)}
            onMouseLeave={handleMenuLeave}
            // style={{ display: hidden && 'none' }}
          >
            <Link href={`/service/${slug}`}>{title}</Link>
            {/* {dropdown && <Image src={AnbgleDown} width={20} alt='angle down icon' />}
            {dropdown && openMenu === index && (
              <SubmenuList>
                {item.dropdown.map((subItem, subIndex) => (
                  <SubmenuItem key={subIndex}>
                    <Link href={subItem.url}>{subItem.title}</Link>
                  </SubmenuItem>
                ))}
              </SubmenuList>
            )} */}
          </ListItem>
        ))}
        <ListItem>
          <Link href='/contact-us'>Free Quote</Link>
        </ListItem>
      </MenuList>
    </NavContainer>
  );
};
