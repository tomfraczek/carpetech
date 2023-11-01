import Image from 'next/image';
import phoneIcon from '@/public/images/icons/phonePurple.png';
import envelope from '@/public/images/icons/envelope.svg';
import {
  AddressContainer,
  Title,
  Email,
  Phone,
  Subtitle,
  Office,
  Address,
  AddressDetailsContainer,
} from './ContactUsAddress.styles';

export const ContactUsAddress = ({ name, phone, email, address }) => {
  return (
    <AddressContainer>
      <Title>Contact Chem-Dry Milton Keynes</Title>
      <Phone>
        <Image src={phoneIcon} alt='phone icon' width={34} />
        {phone}
      </Phone>
      <Email>
        <Image width={17} src={envelope} alt='phone icon' />
        {email}
      </Email>
      <Subtitle>Branch Details</Subtitle>
      <Office>{name} Office</Office>
      <AddressDetailsContainer>
        {address.map((item) => (
          <Address key={item}>{item}</Address>
        ))}
      </AddressDetailsContainer>
    </AddressContainer>
  );
};
