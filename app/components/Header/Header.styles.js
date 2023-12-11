import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  z-index: 20;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  top: 0;
  right: 0;
  left: 0;
  background-color: ${colors.white};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
  padding-top: 17px;

  @media ${device.tablet} {
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const Contact = styled.div`
  display: none;
  margin: 10px 0;

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

export const MobileContact = styled.div`
  img {
    margin-right: 3px;
  }

  p {
    color: ${colors.blue};
    font-size: 18px;
  }
`;

export const MobileContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Logo = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const PhoneNumber = styled.div`
  color: ${colors.blue};
  font-size: 24px;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 30px;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
`;
