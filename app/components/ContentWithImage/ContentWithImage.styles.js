import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const ContentWithImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.$background};

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.$reverse ? 'row-reverse' : 'row')};
  }
`;

export const ContentLeft = styled.div`
  padding: 5% 3%;
  width: 100%;
  position: relative;
  overflow: hidden;

  a {
    color: ${colors.blue};
  }

  ul {
    margin-left: 30px;

    li {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: -30px;
        top: 50%;
        transform: translateY(-50%) rotate(-90deg);
        width: 20px; /* Adjust the width of the image */
        height: 20px; /* Adjust the height of the image */

        background: ${(props) => `url(${props.$icon}) no-repeat`};
        background-size: cover; /* or contain, depending on your image */
        margin-right: 8px; /* Adjust as needed */
      }
    }
  }

  @media ${device.tablet} {
    width: ${(props) => (props.$small ? '80%' : '67%')};
  }

  h1 {
    font-size: 28px;
    font-weight: bold;
    color: ${colors.blue};
    margin: 0.67em 0;
    margin-bottom: 10.5px;
    letter-spacing: -0.5px;
    line-height: 1.1;
    @media ${device.tablet} {
      margin-right: ${(props) => (props.$icon ? props.$margin : '0')};
    }
  }

  h2 {
    font-weight: bold;
    color: ${colors.blue};
    font-size: 30px;
    margin: 0.67em 0;
    margin-bottom: 10.5px;
    letter-spacing: -0.5px;
    line-height: 1.1;
  }

  h3 {
    font-weight: 100;
    font-size: 26px;
    margin: 0 0 1em;
    color: ${colors.green};
    letter-spacing: -0.5px;
    line-height: 1.1;
    font-weight: 100;
    @media ${device.tablet} {
      margin-right: 220px;
    }
  }

  p {
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern';
    font-kerning: normal;
    margin: 0 0 10.5px;
    color: ${colors.grey};
    line-height: 1.5;
    font-size: 17px;
  }
`;

export const ContentRight = styled.div`
  width: 100%;
  height: 420px;
  text-align: center;
  position: relative;

  @media ${device.tablet} {
    width: ${(props) => (props.$small ? '20%' : '33%')};
    height: auto;
  }

  img {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    vertical-align: middle;

    @media ${device.tablet} {
      position: absolute;
    }
  }
`;

export const LogoContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    float: right;
    text-align: center;
  }

  img {
    max-height: 150px;
    width: auto;
  }
`;

export const LogoContainerMobile = styled.div`
  text-align: center;

  @media ${device.tablet} {
    display: none;
  }

  img {
    max-height: 150px;
    width: auto;
  }
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

export const ReviewsContainer = styled.div`
  padding: 0 20px;
  @media ${device.mobile} {
    padding: 0;
  }
`;
