import styled from 'styled-components';
import { colors } from '@/global/colors';

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
  color: ${colors.white};
  /* padding: 0 15px; */
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
