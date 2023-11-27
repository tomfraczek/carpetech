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

// export const Cards = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-direction: column;
//   flex-wrap: wrap;

//   @media ${device.tablet} {
//     flex-direction: row;
//   }

//   a {
//     position: relative;
//     overflow: hidden;
//     text-align: center;
//   }
// `;

export const ServiceCardContainer = styled(Link)`
  width: 100%;

  @media ${device.tablet} {
    width: ${(props) => `calc(100% / ${props.$length})`};
    margin: 0 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
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
  }
`;

export const Content = styled.div``;

// export const Title = styled.h5`
//   color: ${colors.green};
//   text-align: center;
//   font-size: 25px;
//   letter-spacing: -0.5px;
//   line-height: 1.1;
//   font-weight: bold;
//   padding: 0.4em;
// `;

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
  }

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
/////////////////////////

export const Card = styled(Link)`
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  width: calc(50% - 10px);
  margin-top: 20px;
  height: 250px;
  box-shadow: 0 5px 8px -2px rgb(0, 0, 0, 0.2);

  img {
    height: 100px;
    width: auto;
  }

  @media ${device.tablet} {
    width: calc(25% - 30px);
  }
  @media ${device.mobile} {
    width: calc(25% - 30px);
  }
`;

export const Title = styled.h3`
  font-size: 26px;
  margin: 0 0 1em;
  color: #0d58ac;
  letter-spacing: -0.5px;
  line-height: 1.1;
  font-weight: 300;
  margin-top: 40px;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    position: relative;
    overflow: hidden;
    text-align: center;
  }
`;
