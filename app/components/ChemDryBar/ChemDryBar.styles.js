import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const BarLink = styled.a`
  z-index: 1;
  position: relative;
  z-index: 10;
`;

export const ChemDryBarContainer = styled.div`
  background-color: ${colors.blue};
  height: 80px;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    height: 180px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 0;
  text-align: left;
  text-transform: none;
`;

export const Logo = styled.div`
  position: absolute;
  right: 5px;
  width: 100px;
  height: 100px;

  @media ${device.mobile} {
    width: 210px;
    height: 210px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 0.4s ease;
    vertical-align: middle;
  }
`;

export const Header = styled.p`
  text-shadow: 0 0.07em 0.1em rgb(0, 0, 0, 0.3);
  font-size: clamp(14px, 3vw, 36px);
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  color: ${colors.white};
  line-height: 1;

  @media ${device.laptop} {
    /* font-size: 36px; */
  }
`;

export const Number = styled.div`
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  font-size: clamp(14px, 3vw, 36px);
  font-weight: bold;
  color: ${colors.white};
  line-height: 1;

  @media ${device.tablet} {
    font-size: 72px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
