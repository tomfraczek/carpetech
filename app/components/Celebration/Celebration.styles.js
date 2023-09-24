import { colors } from '@/global/colors';
import styled from 'styled-components';

export const CelebrationContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const ContentLeft = styled.div`
  padding: 5% 3%;
  width: 67%;
`;

export const ContentRight = styled.div`
  width: 33%;
  text-align: center;
  position: relative;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const LogoContainer = styled.div`
  float: right;
  margin: 5px 0 20px 20px;
`;

export const Header = styled.h1`
  font-weight: bold;
  color: ${colors.blue};
  font-size: 36px;
  margin: 0.67em 0;
  margin-bottom: 10.5px;
  letter-spacing: -0.5px;
  line-height: 1.1;
`;

export const Subheader = styled.h2`
  font-weight: 100;
  font-size: 26px;
  margin: 0 0 1em;
  color: ${colors.green};
  letter-spacing: -0.5px;
  line-height: 1.1;
`;

export const Paragraph = styled.p`
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  margin: 0 0 10.5px;
  color: ${colors.grey};
  line-height: 1.5;
  font-size: 17px;
`;
