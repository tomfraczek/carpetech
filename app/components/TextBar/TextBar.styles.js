import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const BarContainer = styled.div`
  padding: 30px 0;
  background-color: ${colors.purple};

  > div {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
  }
`;

export const BarTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-align: center;
`;

export const BarParagraph = styled.h3`
  font-size: 20px;
  margin: 10px 0 0;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-align: center;
`;
