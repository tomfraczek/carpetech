'use client';
import Link from 'next/link';
import Image from 'next/image';

import AnbgleDown from '@/public/images/icons/angleDown.svg';
import phoneIcon from '@/public/images/icons/phonewhite.png';
import envelope from '@/public/images/icons/envelope.svg';

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
} from './Footer.styles';

import youtube from '@/public/images/icons/youtube.svg';
import facebook from '@/public/images/icons/facebook.svg';

export const Footer = ({ navigation }) => {
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
                <a href={`tel:07849495757`}>078 4949 5757</a>
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
            <SocialMediaContainer>
              <Link href='https://www.facebook.com/CarpetechUK'>
                <Image src={facebook} width={30} height={30} alt='facebook-icon' />
              </Link>
              <Link href='https://www.youtube.com/channel/UCc6L52ND_OeCbvOOfJIeraQ'>
                <Image src={youtube} width={30} height={30} alt='youtube-icon' />
              </Link>
            </SocialMediaContainer>
          </FooterSection>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};
