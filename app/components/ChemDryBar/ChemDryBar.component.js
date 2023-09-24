import Link from 'next/link';
import { ChemDryBarContainer, Content, Logo, Header, Number, ContentWrapper } from './ChemDryBar.styles';

import Chembar from '@/public/images/chembar.png';
import Image from 'next/image';
import { Container } from '@/global/styles';

export const ChemDryBar = () => {
  return (
    <Link href='google.com'>
      <ChemDryBarContainer>
        <Container>
          <ContentWrapper>
            <Content>
              <Header>Chem-Dry Will Clean, Protect & Restore</Header>
              <Number>01908 505305</Number>
            </Content>
            <Logo>
              <Image src={Chembar} width={210} height={210} alt='Rug Cleaning Company Milton Keynes' />
            </Logo>
          </ContentWrapper>
        </Container>
      </ChemDryBarContainer>
    </Link>
  );
};
