import { colors } from '@/global/colors';
import styled from 'styled-components';

export const ChemDryBarContainer = styled.div`
  background-color: ${colors.blue};
  height: 180px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div``;

export const Header = styled.div`
  text-shadow: 0 0.07em 0.1em rgb(0, 0, 0, 0.3);
  font-size: clamp(14px, 3vw, 36px);
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  color: ${colors.white};
  line-height: 1;
`;

export const Number = styled.div`
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  font-size: 72px;
  font-weight: bold;
  color: ${colors.white};
  line-height: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
