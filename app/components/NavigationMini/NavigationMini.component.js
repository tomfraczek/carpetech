import Link from 'next/link';
import Image from 'next/image';
import { MINI_MENU, MINI_SOCIAL } from './constants';

import { MenuContainer, MenuLink, MiniMenu, MiniSocial } from './NavigationMini.styles';

export const NavigationMini = ({ mobile, setOpen }) => (
  <MenuContainer mobile={mobile}>
    <MiniMenu>
      {MINI_MENU.map(({ title, url }) => (
        <MenuLink key={title}>
          <Link href={url} onClick={() => setOpen(false)}>
            {title}
          </Link>
        </MenuLink>
      ))}
    </MiniMenu>
    <MiniSocial>
      {MINI_SOCIAL.map(({ image, url }) => (
        <MenuLink key={url}>
          <Link href={url}>
            <Image src={image} width={15} height={14} alt='mini-menu-icon' onClick={() => setOpen(false)} />
          </Link>
        </MenuLink>
      ))}
    </MiniSocial>
  </MenuContainer>
);
