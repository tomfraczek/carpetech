import Link from 'next/link';
import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const CardsContainer = styled.div`
  padding-bottom: 3em;
  background-color: #ebedf0;
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
  display: none;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  width: 70%;
  gap: 1.55%;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }

  a {
    position: relative;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  /* filter: drop-shadow(${colors.inputGrey} 0.5rem 0.5rem 1rem); */
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    width: 150px;
    height: 150px;
  }

  @media ${device.tablet} {
    width: 200px;
    height: 200px;
  }
`;

export const ContentContainer = styled.div``;

export const ServiceCardContainer = styled(Link)`
  /* width: 60vw; */
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.h5`
  color: ${colors.blue};
  text-align: center;
  font-size: 22px;
  letter-spacing: 3px;
  padding: 0.4em;
  font-weight: bold;
  white-space: pre;
  text-wrap: wrap;
`;

export const Card = styled.div`
  background-color: ${colors.white};
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 0.2s ease;

  @media ${device.laptop} {
    margin-top: 20px;
    width: 400px;
  }

  &:hover {
    transform: scale(1.02);
  }

  img {
    height: 200px;
    width: auto;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const Cta = styled.p`
  color: ${colors.darkGreen};
  text-align: center;
  font-size: 16px;
  letter-spacing: 3px;
  line-height: 1.1;
  padding: 0.4em;
  margin-bottom: 10px;
`;

export const Circle = styled.div`
  width: 31px;
  height: 31px;
  position: relative;
  border-radius: 50%;
  background-color: #00000024;
  cursor: pointer;
  z-index: 2;
`;

export const Vertical = styled.div`
  content: '';
  position: absolute;
  width: 9px;
  height: 2px;
  background-color: white;
  border-radius: 0;
  top: 14px;
  transition: 150ms ease-out;
  z-index: 0;
  left: 11px;
  transform: rotate(-90deg);
`;

export const Horizontal = styled.div`
  content: '';
  position: absolute;
  width: 9px;
  height: 2px;
  background-color: white;
  border-radius: 0;
  top: 14px;
  transition: 150ms ease-out;
  z-index: 0;
  left: 11px;
`;

export const CardsMobile = styled.div`
  display: block;
  overflow: visible;
  width: 100%;

  .swiper {
    overflow: visible !important;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  padding: 50px;
  overflow: hidden;
`;
