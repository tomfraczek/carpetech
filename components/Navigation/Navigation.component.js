'use client';
import { useState } from 'react';
import Link from 'next/link';

import { MENU } from '@/components/Navigation/constants';
import AnbgleDown from '@/public/images/icons/angleDown.svg';
import Home from '@/public/images/icons/home.svg';

import { MenuList, ListItem, SubmenuList, SubmenuItem } from './Navigation.styles';
import Image from 'next/image';

export const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(6);

  const handleMenuHover = (index) => {
    setOpenMenu(index);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };

  return (
    <div className='menu'>
      <MenuList>
        {MENU.map((item, index) => (
          <ListItem key={index} onMouseEnter={() => handleMenuHover(index)} onMouseLeave={handleMenuLeave}>
            <Link href={item.url} style={item.icon && { display: 'flex', alignItems: 'center', height: '57px' }}>
              {item.icon ? <Image src={Home} width={20} height={20} alt='home icon' /> : item.title}
            </Link>
            {item.dropdown && <Image src={AnbgleDown} width={20} alt='angle down icon' />}
            {item.dropdown && openMenu === index && (
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
      </MenuList>
    </div>
  );
};
