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
  justify-content: space-evenly;

  a {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 0 10px;
  }
`;

export const Card = styled.div``;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    vertical-align: middle;
  }
`;

export const Content = styled.div``;

export const Title = styled.h5`
  color: ${colors.green};
  text-align: center;
  font-size: 25px;
  letter-spacing: -0.5px;
  line-height: 1.1;
  font-weight: bold;
  padding: 0.4em;
`;

export const Category = styled.h5`
  color: ${colors.blue};
  text-align: center;
  font-size: 25px;
  letter-spacing: -0.5px;
  line-height: 1.1;
  padding-bottom: 0.4em;
`;

export const Description = styled.p``;

export const ContentContainer = styled.div`
  position: absolute;
  padding: 20px 40px;
  bottom: 0;
  right: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
  background-image: linear-gradient(transparent, ${colors.white});

  p {
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern';
    font-kerning: normal;
    margin: 0 0 10.5px;
    color: ${colors.grey};
    line-height: 1.5;
    font-size: 17px;
    color: #fff;
  }
`;
