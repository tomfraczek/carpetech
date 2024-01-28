import Image from 'next/image';
import Link from 'next/link';
import phoneIcon from '@/public/images/icons/phonePurple.png';
import envelope from '@/public/images/icons/envelope.svg';
import { AddressContainer, Email, Phone, Logo } from './ContactUsAddress.styles';

export const ContactUsAddress = ({ name, phone, email, address }) => {
  return (
    <AddressContainer>
      <Logo>
        <Link href='/'>
          <Image src='/images/carpetLogo.png' width={160} height={35.25} alt='' />
        </Link>
      </Logo>
      <Phone href={`tel:${phone}`}>
        <Image src={phoneIcon} alt='phone icon' width={34} />
        {phone}
      </Phone>
      <Email href={`mailto:${email}`}>
        <Image width={17} src={envelope} alt='phone icon' />
        {email}
      </Email>
    </AddressContainer>
  );
};
