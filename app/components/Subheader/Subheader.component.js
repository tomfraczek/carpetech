'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/global/styles';
import { SubheaderContainer, Content, Title, MenuContainer, MenuLink } from './Subheader.styles';

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
                <Image src='/images/icons/google.png' width={15} height={14} alt='google-icon' />
              </Link>
            </MenuLink>
            <MenuLink>
              <Link href='https://www.facebook.com/people/Chem-Dry-Milton-Keynes/100063698627760/'>
                <Image src='/images/icons/facebook.png' width={15} height={14} alt='facebook-icon' />
              </Link>
            </MenuLink>
            <MenuLink>
              <Link href='https://twitter.com/Chem_DryMK'>
                <Image src='/images/icons/x.png' width={15} height={14} alt='x-icon' />
              </Link>
            </MenuLink>
            <MenuLink>
              <Link href='https://www.youtube.com/user/ukchemdry'>
                <Image src='/images/icons/youtube.png' width={15} height={14} alt='youtube-icon' />
              </Link>
            </MenuLink>
          </MenuContainer>
        </Content>
      </Container>
    </SubheaderContainer>
  );
};
