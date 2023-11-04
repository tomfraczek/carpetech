import styled from 'styled-components';
import { colors } from '@/global/colors';
import { device } from '@/global/breakpoints';

export const MenuContainer = styled.div`
  display: ${(props) => (props.mobile ? 'flex' : 'none')};
  align-items: center;
  justify-content: ${(props) => (props.mobile ? 'center' : 'flex-end')};
  padding-bottom: 21px;
  padding-top: 15px;
  flex-direction: column;

  @media ${device.tablet} {
    display: ${(props) => (props.mobile ? 'none' : 'flex')};
    flex-direction: row;
  }
`;

export const MenuLink = styled.div`
  padding-left: 15px;

  a {
    text-decoration: none;
    color: ${colors.blue};
    display: flex;
    letter-spacing: 1.1px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const MiniMenu = styled.div`
  display: flex;
`;
export const MiniSocial = styled.div`
  display: flex;
`;
