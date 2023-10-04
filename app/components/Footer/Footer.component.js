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
  ContactContainer,
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
import { renderStars } from '../ReviewCard/ReviewCard.component';

export const Footer = () => {
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
            <ContactContainer>
              <Image src={phoneIcon} alt='phone icon' />
              <PhoneNumber>
                <Link href={`tel:01908505305`}>01908 505305</Link>
              </PhoneNumber>
            </ContactContainer>

            <ContactContainer>
              <Image width={17} src={envelope} alt='phone icon' />
              <EmailAddress>
                <Link href={`mailto:jonathan@chemdrymiltonkeynes.co.uk`}>jonathan@chemdrymiltonkeynes.co.uk</Link>
              </EmailAddress>
            </ContactContainer>

            <RgisteredContainer>
              <WhiteText>Registered company in England</WhiteText>
              <WhiteText>Registered Number: 4575589</WhiteText>
            </RgisteredContainer>
            <WhiteText>VAT Number: 706 270 260</WhiteText>

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
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d314494.0661761425!2d-0.935!3d51.988929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876fe0b00050eab%3A0x93922676256b9ae1!2sChem%20Dry%20Carpet%20Cleaners!5e0!3m2!1sen!2sus!4v1696434946572!5m2!1sen!2sus'
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
