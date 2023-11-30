import Link from 'next/link';
import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const CardsContainer = styled.div`
  background-color: ${colors.lightGrey};
  padding-bottom: 3em;
`;

export const Header = styled.h2`
  font-size: clamp(28px, 2vw, 36px);
  margin-top: 0;
  margin-bottom: 15px;
  color: ${colors.blue};
  letter-spacing: -0.5px;
  line-height: 1.1;
  text-align: center;
  padding-top: 51px;
  font-weight: bold;
  width: 100%;
`;

export const Subheader = styled.h2`
  font-weight: 100;
  font-size: 26px;
  margin: 0 0 1em;
  color: ${colors.green};
  letter-spacing: -0.5px;
  text-align: center;
  line-height: 1.1;
  padding-bottom: 0.5em;
  width: 100%;
  height: auto;
`;

export const Cards = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  width: 70%;

  @media ${device.tablet} {
    flex-direction: row;
  }

  a {
    position: relative;
    overflow: hidden;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  /* width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    height: auto;
    margin-bottom: 0;
  }

  img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
  } */
`;

export const Content = styled.div``;

export const Category = styled.h5`
  /* color: ${colors.blue};
  text-align: center;
  font-size: 25px;
  letter-spacing: -0.5px;
  line-height: 1.1;
  padding-bottom: 0.4em; */
`;

export const Description = styled.p``;

export const ContentContainer = styled.div`
  /* position: absolute;
  padding: 20px 40px;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
  background-image: linear-gradient(transparent, ${colors.white});
  transform: translateY(-20px);
  @media ${device.laptop} {
    transform: ${(props) => (props.$hover ? 'translateY(0)' : 'translateY(100%)')};
  } */

  p {
    /* text-rendering: optimizeLegibility;
    font-feature-settings: 'kern';
    font-kerning: normal;
    margin: 0 0 10.5px;
    color: ${colors.grey};
    line-height: 1.5;
    font-size: 17px;
    color: #fff; */
  }
`;
/////////////////////////

export const ServiceCardContainer = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    /* width: ${(props) => `calc(100% / (${props.$length} / 1.7))`}; */
    width: 33.3%;
  }
`;

export const Title = styled.h5`
  color: ${colors.white};
  text-align: center;
  font-size: 22px;
  letter-spacing: 3px;
  /* line-height: 1.1; */
  padding: 0.4em;
  /* font-weight: 900; */
`;

export const Card = styled.div`
  background: rgb(125, 167, 215);
  background: linear-gradient(315deg, rgba(125, 167, 215, 1) 0%, rgba(13, 88, 172, 1) 100%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  width: 92%;
  margin-top: 20px;

  img {
    height: 150px;
    width: auto;
    border-radius: 50%;
    aspect-ratio: 1;
    filter: drop-shadow(${colors.inputGrey} 0.5rem 0.5rem 1rem);
    margin-bottom: 30px;
  }
`;

export const Cta = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 16px;
  letter-spacing: 3px;
  line-height: 1.1;
  padding: 0.4em;
`;

export const Circle = styled.div`
  width: 31px;
  height: 31px;
  position: relative;
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  z-index: 2;
`;

export const Vertical = styled.div`
  content: '';
  position: absolute;
  width: 12px;
  height: 2px;
  background-color: white;
  border-radius: 0;
  top: 14px;
  -webkit-transition: 150ms ease-out;
  -moz-transition: 150ms ease-out;
  -o-transition: 150ms ease-out;
  transition: 150ms ease-out;
  z-index: 0;
  left: 9px;
  transform: rotate(-90deg);
`;

export const Horizontal = styled.div`
  content: '';
  position: absolute;
  width: 12px;
  height: 2px;
  background-color: white;
  border-radius: 0;
  top: 14px;
  transition: 150ms ease-out;
  z-index: 0;
  left: 9px;
`;
