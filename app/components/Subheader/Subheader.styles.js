import styled from 'styled-components';
import { colors } from '@/global/colors';
import { device } from '@/global/breakpoints';

export const SubheaderContainer = styled.div`
  height: 40px;
  background-color: ${(props) => props.$background};
  display: flex;
  align-items: center;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  color: ${colors.white};
  margin: auto;
  font-size: 17px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuLink = styled.div`
  color: ${colors.white};
  padding-left: 15px;

  a {
    text-decoration: none;
    color: ${colors.white};
    display: flex;

    &:hover {
      opacity: 0.7;
    }
  }
`;
