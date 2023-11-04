import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  z-index: 20;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;

  @media ${device.tablet} {
    justify-content: space-between;
    padding: 50px 0;
  }
`;

export const Contact = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-right: 3px;
  }

  p {
    color: ${colors.blue};
    font-size: 18px;
  }
`;

export const Logo = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const PhoneNumber = styled.div`
  color: ${colors.green};
  font-size: 30px;
  font-weight: 700;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
`;
