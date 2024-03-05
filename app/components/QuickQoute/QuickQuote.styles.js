import { colors } from '@/global/colors';
import styled from 'styled-components';

export const QuickQuoteContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 60px;
  border-top: 10px solid ${colors.purple};
  border-bottom: 10px solid ${colors.purple};
`;

export const Heading = styled.h2`
  font-size: clamp(28px, 2vw, 36px);
  margin-top: 0;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
  font-weight: bold;
  line-height: 1.1;
  color: ${colors.white};
  text-align: center;
`;

export const Description = styled.p`
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  margin: 0 0 10.5px;
  text-align: center;
  color: ${colors.white};
  font-size: 17px;
`;

export const BackgroundOverlay = styled.div`
  /* background-color: #00171a; */
  position: absolute !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2 !important;
  opacity: 0.7;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  img {
    width: 100%;
    height: auto;
  }
`;
