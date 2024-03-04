'use client';
import Link from 'next/link';
import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px;
`;

const Title = styled.h2`
  font-size: 82px;
  color: ${colors.blue};
`;

const Paragraph = styled.p`
  font-size: 30px;
  color: ${colors.darkBlue};
`;

const GoHomeButton = styled(Link)`
  color: ${colors.blue};
  &:hover {
    text-decoration: underline;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Paragraph>Page not found</Paragraph>
      <GoHomeButton href='/'>Return Home</GoHomeButton>
    </NotFoundContainer>
  );
}
