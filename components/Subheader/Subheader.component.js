'use client';
import Image from 'next/image';

import { Container } from '@/global/styles';
import {
  SubheaderContainer,
  Content,
  ContactContainer,
  ContactItem,
  ItemTitle,
  PhoneNumber,
  Menu,
  MenuLink,
} from './Subheader.styles';

export const Subheader = () => {
  return (
    <SubheaderContainer>
      <Container>
        <Content>
          <ContactContainer>
            <ContactItem>
              <Image src='/images/icons/phone.png' width={16} height={16} alt='phone icon' />
              <ItemTitle>Freephone Helpline:</ItemTitle>
              <PhoneNumber>0800 581594</PhoneNumber>
            </ContactItem>
          </ContactContainer>
          <Menu>
            <MenuLink>About Us</MenuLink>
            <MenuLink>Reviews</MenuLink>
            <MenuLink>Contact Us</MenuLink>
            <MenuLink></MenuLink>
            <MenuLink></MenuLink>
            <MenuLink></MenuLink>
            <MenuLink></MenuLink>
          </Menu>
        </Content>
      </Container>
    </SubheaderContainer>
  );
};
