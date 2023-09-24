import Image from 'next/image';

import year from '@/public/images/year.png';
import family from '@/public/images/family.jpeg';

import {
  CelebrationContainer,
  ContentLeft,
  ContentRight,
  LogoContainer,
  Header,
  Subheader,
  Paragraph,
} from './CarpetCleaning.styles';

export const Celebration = () => {
  return (
    <CelebrationContainer>
      <ContentLeft>
        <LogoContainer>
          <Image src={year} alt='year logo' width={228} height={176} />
        </LogoContainer>
        <Header>Chem-Dry Milton Keynes - Professional Carpet Cleaners</Header>
        <Subheader>Proudly serving the local area for over 24 years</Subheader>
        <Paragraph>
          We have been cleaning carpets, upholstery, curtains and leather around Milton Keynes since 1998, with over
          7,000 local satisﬁed customers.
        </Paragraph>
        <Paragraph>
          We have a mission to deliver the greatest range of carpet and upholstery and fire and floor restoration
          services. We offer our customers a one-stop solution for all of their cleaning requirements.
        </Paragraph>
        <Paragraph>
          We are your local experts to call when you need an advanced cleaning services. You can rely on a cleaning
          service carried out by qualified and dedicated expert carpet cleaners.
        </Paragraph>
      </ContentLeft>
      <ContentRight>
        <Image src={family} alt='family logo' width={768} height={512} />
      </ContentRight>
    </CelebrationContainer>
  );
};
