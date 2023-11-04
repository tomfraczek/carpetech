'use client';
import Image from 'next/image';

import { Subheader } from '@/app/components/Subheader';
import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer, Content, Contact, Logo, PhoneNumber, Details } from './Header.styles';
import { Container } from '@/global/styles';
import phone from '@/public/images/icons/phone.png';
import { Navigation } from '../Navigation';

import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '@/global/colors';
import { device } from '@/global/breakpoints';

import google from '@/public/images/icons/google.svg';
import youtube from '@/public/images/icons/youtube.svg';
import x from '@/public/images/icons/x.svg';
import facebook from '@/public/images/icons/facebook.svg';

export const MenuContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 21px;
  padding-top: 15px;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const MenuLink = styled.div`
  padding-left: 15px;

  a {
    text-decoration: none;
    color: ${colors.blue};
    display: flex;
    letter-spacing: 1.1px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Subheader />
      <Container>
        <MenuContainer>
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
        <Content>
          <HamburgerMenu />
          {/* <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Freephone Helpline:</p>
            </Details>
            <PhoneNumber>0800 581594</PhoneNumber>
          </Contact> */}

          <Logo>
            <Link href='/'>
              <Image src='/images/carpetLogo.png' width={320} height={70.5} alt='' />
            </Link>
          </Logo>

          <Navigation />

          {/* <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Milton Keynes Office:</p>
            </Details>

            <PhoneNumber>01908 505305</PhoneNumber>
          </Contact> */}
        </Content>
      </Container>
    </HeaderContainer>
  );
};
