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

export const Footer = ({ navigation }) => {
  const googleMpasUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638309.649566098!2d-1.813004230372196!3d51.322216113364256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d22c935e46253f%3A0x5d7cac90b7906e16!2sCarpetech%20Ltd.!5e0!3m2!1spl!2spl!4v1705836902782!5m2!1spl!2spl';

  const flattenedArray = navigation.reduce((accumulator, item) => {
    const { name, content } = item;
    const { title, slug, serviceChildrenCollection } = content;

    accumulator.push({
      name,
      title,
      slug,
    });

    if (serviceChildrenCollection.items.length > 0) {
      accumulator.push(
        ...serviceChildrenCollection.items.map((child) => ({
          name: child.title,
          title: child.title,
          slug: child.slug,
        }))
      );
    }

    return accumulator;
  }, []);

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <Header>Cleaning Services</Header>
            {flattenedArray.map(({ name, slug }) => (
              <Link key={name} href={`/service/${slug}`}>
                <Image src={AnbgleDown} width={20} alt='angle right icon' /> {name}
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
              {/* <Link href='https://maps.app.goo.gl/NSRb1EfytivE7bam6'>
                <Image src={google} width={30} height={30} alt='google-icon' />
              </Link> */}
              <Link href='https://www.facebook.com/CarpetechUK'>
                <Image src={facebook} width={30} height={30} alt='facebook-icon' />
              </Link>
              {/* <Link href='https://twitter.com/Chem_DryMK'>
                <Image src={x} width={30} height={30} alt='x-icon' />
              </Link> */}
              <Link href='https://www.youtube.com/channel/UCc6L52ND_OeCbvOOfJIeraQ'>
                <Image src={youtube} width={30} height={30} alt='youtube-icon' />
              </Link>
            </SocialMediaContainer>

            {/* <ReviewContainer>
              <StarsWrapper />
              <WhiteText>Chem-Dry Milton Keynes is rated 5 out of 5 based on 2 Google reviews</WhiteText>
            </ReviewContainer> */}
          </FooterSection>

          <FooterSection>
            <Header>Find Us</Header>
            <iframe
              src={googleMpasUrl}
              width='100%'
              height='290'
              style={{ border: 0 }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </FooterSection>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};
