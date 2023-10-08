import styled from 'styled-components';
import { colors } from '@/global/colors';
import { device } from '@/global/breakpoints';

export const SubheaderContainer = styled.div`
  height: 31px;
  background-color: ${colors.green};
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const Title = styled.div`
  display: none;
  color: ${colors.white};

  @media ${device.tablet} {
    display: block;
  }
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
