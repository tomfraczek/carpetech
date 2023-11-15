'use client';
import Image from 'next/image';

import carpet from '@/public/images/carpetcleaning.jpeg';

import { CelebrationContainer, ContentLeft, ContentRight, Header, Paragraph } from './CarpetCleaning.styles';

export const CarpetCleaning = () => {
  return (
    // FLEX-DIRECTION: ROW-REVERSE
    <CelebrationContainer>
      <ContentLeft>
        <Header>Hygienic Carpet Cleaning</Header>
        <Paragraph>
          We use a unique patented carbonating carpet cleaner process. Whilst detergents and soaps can leave behind a
          residue, resulting in dull fibres and a carpet that gets dirty again more quickly, we use the power of
          carbonated bubbles for deep down, detergent-free cleaning. This process offers effective and gentle cleaning
          which treats your fabrics and carpets with the utmost care and does not leave any sticky residue behind.
        </Paragraph>
        <Paragraph>
          Our process can penetrate deeply into the fibres, so even tough, deep stains and ground-in dirt can be removed
          without difficulty. Your carpets won’t harbour dirty water, taking days to dry out, and will not be
          susceptible to the growth of mould and bacteria. The result is that your carpets and upholstery will stay
          cleaner for longer, looking as good as new.
        </Paragraph>
        <Header>Less Water, Less Drying</Header>
        <Paragraph>
          As we only need to use a small amount of water in our process, your Milton Keynes carpets are guaranteed to be
          dry in just a few short hours.
        </Paragraph>
      </ContentLeft>
      <ContentRight>
        <Image src={carpet} alt='family logo' width={768} height={512} />
      </ContentRight>
    </CelebrationContainer>
  );
};
