import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const BarLink = styled.a`
  z-index: 1;
  position: relative;
  z-index: 10;
`;

export const ChemDryBarContainer = styled.div`
  width: 100%;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 0;
  text-align: left;
  padding-top: 3rem;
  text-transform: none;
  margin: auto;
`;

export const Logo = styled.div`
  max-width: 210px;
  display: none;

  @media ${device.tablet} {
    display: block;
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
  font-size: 31px;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  color: ${colors.white};
  line-height: 1;
  padding-bottom: 15px;

  @media ${device.tablet} {
    padding-left: 3rem;
  }
`;

export const Number = styled.p`
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  font-size: 29px;
  color: ${colors.white};
  line-height: 1;
  padding-bottom: 25px;

  @media ${device.tablet} {
    margin-top: 0;
    padding-left: 3rem;
    margin-top: 20px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media ${device.tablet} {
    padding: 0 3rem 0 0;
  }
`;
