'use client';
import { Container } from '@/global/styles';
import { SubheaderContainer, Content, Title } from './Subheader.styles';

export const Subheader = ({ text, backgroundColour }) => {
  return (
    <SubheaderContainer $background={backgroundColour}>
      <Container>
        <Content>
          <Title>{text}</Title>
        </Content>
      </Container>
    </SubheaderContainer>
  );
};
