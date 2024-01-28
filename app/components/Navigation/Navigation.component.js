'use client';
import { useState, Fragment } from 'react';
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
        {menu.map(({ content }, index) => {
          const { title, slug, serviceChildrenCollection } = content;
          const { items } = serviceChildrenCollection;
          return (
            <ListItem key={index} onMouseEnter={() => handleMenuHover(index)} onMouseLeave={handleMenuLeave}>
              <Link href={`/service/${slug}`}>{title}</Link>
              {items.length > 0 && <Image src={AnbgleDown} width={20} alt='angle down icon' />}
              <SubmenuList>
                {items.length > 0 &&
                  openMenu === index &&
                  items.map(({ title, slug }) => (
                    <SubmenuItem key={title}>
                      <Link href={`/service/${slug}`}>{title}</Link>
                    </SubmenuItem>
                  ))}
              </SubmenuList>
            </ListItem>
          );
        })}
        <ListItem>
          <Link href='/contact-us'>Free Quote</Link>
        </ListItem>
      </MenuList>
    </NavContainer>
  );
};
