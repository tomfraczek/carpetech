import Image from 'next/image';

import pet from '@/public/images/pet.jpeg';
import { ReviewCards } from '@/app/components/ReviewCards';

import { CelebrationContainer, ContentLeft, ContentRight, Header, Subheader, Paragraph } from './Reputation.styles';

export const Reputation = () => {
  return (
    <CelebrationContainer>
      <ContentLeft>
        <Header>Our Reputation</Header>
        <Subheader>
          Chem-Dry Milton Keynes has built a sterling reputation for providing outstanding cleaning services.
        </Subheader>
        <Paragraph>
          We commit ourselves to the requirements and high expectations of our customers. The secret of our success lies
          with our complete dedication and attention to detail.
        </Paragraph>
        <Paragraph>
          All our technicians are DBS/CRB checked. Some of our products are Green & Clean certified, accredited to the
          Carpet and Rug Institute. We are also accredited with ISO 9001:2000.
        </Paragraph>
        <Header>Read Some Reviews from our Satisfied Customers:</Header>
        <ReviewCards />
      </ContentLeft>
      <ContentRight>
        <Image src={pet} alt='pet logo' width={768} height={512} />
      </ContentRight>
    </CelebrationContainer>
  );
};
