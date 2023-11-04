import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  /* position: absolute;
  top: 31px;
  right: 0;
  left: 0;
  bottom: 0; */

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    display: none;
  }
`;

export const HamburgerButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
`;

export const Logo = styled.div`
  display: block;
  padding: 40px 0;
  z-index: 10;

  @media ${device.tablet} {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  background: ${colors.white};
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
`;
