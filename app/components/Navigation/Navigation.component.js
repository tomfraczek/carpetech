'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import AnbgleDown from '@/public/images/icons/angleDown.svg';

import {
  MenuList,
  ListItem,
  SubmenuList,
  SubmenuItem,
  NavContainer,
  NavLink,
  FreeQuoteButton,
} from './Navigation.styles';

export const Navigation = ({ menu }) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const isLinkActive = (href) => {
    return pathname === href;
  };

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
              <NavLink className={isLinkActive(`/service/${slug}`) ? 'active' : ''} href={`/service/${slug}`}>
                {title}
              </NavLink>
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
          <FreeQuoteButton href='/contact-us'>Free Quote</FreeQuoteButton>
        </ListItem>
      </MenuList>
    </NavContainer>
  );
};
