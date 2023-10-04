'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/global/styles';
import { SubheaderContainer, Content, Title, MenuContainer, MenuLink } from './Subheader.styles';

import google from '@/public/images/icons/google.svg';
import youtube from '@/public/images/icons/youtube.svg';
import x from '@/public/images/icons/x.svg';
import facebook from '@/public/images/icons/facebook.svg';

export const Subheader = () => {
  return (
    <SubheaderContainer>
      <Container>
        <Content>
          <Title>Chem-Dry Professional Cleaning</Title>
          <MenuContainer>
            <MenuLink>
              <Link href='/about'>About Us</Link>
            </MenuLink>
            <MenuLink>
              <Link href='/testimonials'>Reviews</Link>
            </MenuLink>
            <MenuLink>
              <Link href='/contact'>Contact Us</Link>
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
        </Content>
      </Container>
    </SubheaderContainer>
  );
};
