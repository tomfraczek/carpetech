'use client';
import Image from 'next/image';

import { Subheader } from '@/app/components/Subheader';
import { HeaderContainer, Content, Contact, Logo, PhoneNumber, Details } from './Header.styles';
import { Container } from '@/global/styles';
import phone from '@/public/images/icons/phone.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <Subheader />
      <Container>
        <Content>
          <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Freephone Helpline:</p>
            </Details>
            <PhoneNumber>0800 581594</PhoneNumber>
          </Contact>

          <Logo>
            <Image src='/images/logo.png' width={250} height={112} alt='' />
          </Logo>

          <Contact>
            <Details>
              <Image src={phone} width={16} height={16} alt='phone-icon' />
              <p>Milton Keynes Office:</p>
            </Details>

            <PhoneNumber>01908 505305</PhoneNumber>
          </Contact>
        </Content>
      </Container>
    </HeaderContainer>
  );
};
