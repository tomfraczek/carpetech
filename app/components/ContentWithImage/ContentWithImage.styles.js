import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const ContentWithImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.$reverse ? 'row-reverse' : 'row')};
  }
`;

export const ContentLeft = styled.div`
  padding: 5% 3%;
  width: 100%;

  @media ${device.tablet} {
    width: 67%;
  }
`;

export const ContentRight = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  @media ${device.tablet} {
    width: 33%;
  }

  img {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    @media ${device.tablet} {
      position: absolute;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  @media ${device.tablet} {
    float: right;
    /* margin: 5px 0 20px 20px; */
  }

  img {
    max-height: 150px;
    width: auto;
  }
`;

export const SectionHeader = styled.h1`
  margin-top: 0;
  font-size: 36px;
  font-weight: bold;
  color: ${colors.blue};
  margin: 0.67em 0;
  margin-bottom: 10.5px;
  letter-spacing: -0.5px;
  line-height: 1.1;
`;

export const Header = styled.h2`
  font-weight: bold;
  color: ${colors.blue};
  font-size: clamp(28px, 2vw, 36px);
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

export const FactHeader = styled.h3`
  color: ${colors.green};
  font-weight: bold;
  letter-spacing: -0.5px;
  font-size: 24px;
  margin-top: 21px;
  margin-bottom: 10.5px;
  line-height: 1.1;
`;

export const FactsList = styled.ul`
  columns: 270px 2;
`;

export const FactItem = styled.li`
  display: flex;
  margin: 0 0 0.8em 1.5em;
  line-height: 1.3;
  break-inside: avoid;

  img {
    transform: rotate(-90deg);
    filter: invert(50%) sepia(12%) saturate(2052%) hue-rotate(247deg) brightness(95%) contrast(95%);
    width: 15px;
    margin-right: 5px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: baseline;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  margin: 0 0 10.5px;
  color: ${colors.grey};
  line-height: 1.5;
  font-size: 17px;

  img {
    margin-right: 8px;
    filter: invert(50%) sepia(12%) saturate(2052%) hue-rotate(247deg) brightness(95%) contrast(95%);
    transform: rotate(-90deg);
    position: relative;
    top: 3px;
  }
`;
export const List = styled.div`
  margin-bottom: 35px;
`;
