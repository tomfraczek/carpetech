import Link from 'next/link';
import Image from 'next/image';

import google from '@/public/images/icons/google.svg';
import youtube from '@/public/images/icons/youtube.svg';
import x from '@/public/images/icons/x.svg';
import facebook from '@/public/images/icons/facebook.svg';

import { MenuContainer, MenuLink } from './NavigationMini.styles';

export const NavigationMini = ({ mobile }) => (
  <MenuContainer mobile={mobile}>
    <MenuLink>
      <Link href='/about'>About Us</Link>
    </MenuLink>
    <MenuLink>
      <Link href='/testimonials'>Reviews</Link>
    </MenuLink>
    <MenuLink>
      <Link href='/contact-us'>Contact Us</Link>
    </MenuLink>
    <MenuLink>
      <Link href='https://goo.gl/maps/yzgNuBGEQivZaX5s7'>
        <Image src={google} width={15} height={14} alt='google-icon' />
      </Link>
    </MenuLink>
    <MenuLink>
      <Link href='https://www.facebook.com/people/Chem-Dry-Milton-Keynes/100063698627760/'>
        <Image src={facebook} width={15} height={14} alt='facebook-icon' />
      </Link>
    </MenuLink>
    <MenuLink>
      <Link href='https://twitter.com/Chem_DryMK'>
        <Image src={x} width={15} height={14} alt='x-icon' />
      </Link>
    </MenuLink>
    <MenuLink>
      <Link href='https://www.youtube.com/user/ukchemdry'>
        <Image src={youtube} width={15} height={14} alt='youtube-icon' />
      </Link>
    </MenuLink>
  </MenuContainer>
);
