'use client';
import Link from 'next/link';
import Image from 'next/image';

import AnbgleDown from '@/public/images/icons/angleDown.svg';
import phoneIcon from '@/public/images/icons/phonewhite.png';
import envelope from '@/public/images/icons/envelope.svg';

import { MENU_ITEMS } from './constants';

import { Container } from '@/global/styles';
import {
  FooterContainer,
  FooterSection,
  Header,
  FooterContent,
  ContactEmailContainer,
  ContactPhoneContainer,
  PhoneNumber,
  EmailAddress,
  WhiteText,
  RgisteredContainer,
  SocialMediaContainer,
  ReviewContainer,
  StarsWrapper,
} from './Footer.styles';

import google from '@/public/images/icons/google.svg';
import youtube from '@/public/images/icons/youtube.svg';
import x from '@/public/images/icons/x.svg';
import facebook from '@/public/images/icons/facebook.svg';

export const Footer = () => {
  const googleMpasUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321084.460474708!2d-1.672935550296467!3d51.044365524938684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487378ac5fc88f09%3A0x516f3b828f333a8d!2sHampshire%2C%20UK!5e0!3m2!1sen!2spl!4v1702815923937!5m2!1sen!2spl';
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <Header>Cleaning Services</Header>
            {MENU_ITEMS.map(({ title, url }) => (
              <Link key={title} href={url}>
                <Image src={AnbgleDown} width={20} alt='angle right icon' /> {title}
              </Link>
            ))}
          </FooterSection>

          <FooterSection>
            <Header>Get in Touch</Header>
            <ContactPhoneContainer>
              <Image src={phoneIcon} alt='phone icon' />
              <PhoneNumber>
                <Link href={`tel:07849495757`}>078 4949 5757</Link>
              </PhoneNumber>
            </ContactPhoneContainer>

            <ContactEmailContainer>
              <Image width={17} src={envelope} alt='phone icon' />
              <EmailAddress>
                <Link href={`mailto:info@carpetech.co.uk`}>info@carpetech.co.uk</Link>
              </EmailAddress>
            </ContactEmailContainer>

            <RgisteredContainer>
              <WhiteText>Registered company in England</WhiteText>
              <WhiteText>Registered Number: 14133890</WhiteText>
            </RgisteredContainer>
            {/* <WhiteText>VAT Number: 706 270 260</WhiteText> */}

            <SocialMediaContainer>
              <Link href='https://goo.gl/maps/yzgNuBGEQivZaX5s7'>
                <Image src={google} width={30} height={30} alt='google-icon' />
              </Link>
              <Link href='https://www.facebook.com/people/Chem-Dry-Milton-Keynes/100063698627760/'>
                <Image src={facebook} width={30} height={30} alt='facebook-icon' />
              </Link>
              <Link href='https://twitter.com/Chem_DryMK'>
                <Image src={x} width={30} height={30} alt='x-icon' />
              </Link>
              <Link href='https://www.youtube.com/user/ukchemdry'>
                <Image src={youtube} width={30} height={30} alt='youtube-icon' />
              </Link>
            </SocialMediaContainer>

            <ReviewContainer>
              <StarsWrapper />
              <WhiteText>Chem-Dry Milton Keynes is rated 5 out of 5 based on 2 Google reviews</WhiteText>
            </ReviewContainer>
          </FooterSection>

          <FooterSection>
            <Header>Find Us</Header>
            <iframe
              src={googleMpasUrl}
              width='100%'
              height='290'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </FooterSection>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};
