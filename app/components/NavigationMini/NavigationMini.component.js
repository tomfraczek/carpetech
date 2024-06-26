import Link from "next/link";
import Image from "next/image";
import { MINI_MENU, MINI_SOCIAL } from "./constants";

import {
  MenuContainer,
  MenuLink,
  MiniMenu,
  MiniSocial,
} from "./NavigationMini.styles";

export const NavigationMini = ({ mobile, setIsOpen }) => {
  const isMobile = mobile ?? false;
  return (
    <MenuContainer $mobile={isMobile}>
      {/* <MiniMenu>
        {MINI_MENU.map(({ title, url }) => (
          <MenuLink key={title}>
            <Link href={url} onClick={() => setIsOpen(false)}>
              {title}
            </Link>
          </MenuLink>
        ))}
      </MiniMenu> */}
      <MiniSocial>
        {MINI_SOCIAL.map(({ image, url }) => (
          <MenuLink key={url}>
            <Link href={url}>
              <Image
                src={image}
                width={15}
                height={14}
                alt="mini-menu-icon"
                onClick={() => setIsOpen(false)}
              />
            </Link>
          </MenuLink>
        ))}
      </MiniSocial>
    </MenuContainer>
  );
};
