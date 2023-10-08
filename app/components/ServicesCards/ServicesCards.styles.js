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
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    width: calc(50% - 10px);

    @media ${device.tablet} {
      width: calc(25% - 10px);
    }
    &:hover {
      & img {
        opacity: 0.8;
      }

      & h5 {
        color: ${colors.green};
      }
    }
  }
`;

export const Card = styled.div`
  margin-bottom: 7px;
  margin-top: 7px;
  border-radius: 15px;
  box-shadow: 0 5px 8px -2px rgb(0, 0, 0, 0.2);
  padding: 25px 5px 15px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    transition: all 0.2s ease;
  }
`;

export const Content = styled.div``;

export const Title = styled.h5`
  color: ${colors.blue};
  text-align: center;
  font-size: 25px;
  letter-spacing: -0.5px;
  line-height: 1.1;
  font-weight: bold;
  padding-top: 0.4em;
`;

export const Category = styled.h5`
  color: ${colors.blue};
  text-align: center;
  font-size: 25px;
  letter-spacing: -0.5px;
  line-height: 1.1;
  padding-bottom: 0.4em;
`;
