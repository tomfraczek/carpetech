import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled, { keyframes } from 'styled-components';

const ScrollGradientAnimation = keyframes`
  0% {
    transform: translateX(101%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-101%);
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
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
  z-index: 9;

  @media ${device.tablet} {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  background: ${colors.white};
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  padding-top: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MobileMenuList = styled.ul`
  overflow: scroll;
  position: relative;
`;

export const ListItem = styled.li`
  transition: box-shadow 0.2s ease;
  box-shadow: inset 0 5em transparent;
  position: relative;

  &:hover img {
    filter: invert(44%) sepia(25%) saturate(635%) hue-rotate(102deg) brightness(89%) contrast(87%);
  }

  > a {
    padding: 15px;
    color: ${colors.blue};
    white-space: nowrap;
    font-weight: 700;
    font-size: 18px;
    display: block;
    transition: all 0.2s ease;
    letter-spacing: 1.1px;

    &:hover {
      background-color: ${colors.hoverWhite};
      color: ${colors.green};

      ~ img {
        filter: invert(44%) sepia(25%) saturate(635%) hue-rotate(102deg) brightness(89%) contrast(87%);
      }
    }
  }

  &:last-of-type {
    border: 2px solid ${colors.blue};
    border-radius: 5em;
    overflow: hidden;

    a {
      padding: 10px 20px;
    }

    &:hover {
      background-color: ${colors.blue};

      a {
        background-color: ${colors.blue};
        color: ${colors.white};
      }
    }
  }

  > img {
    position: absolute;
    bottom: 0;
    left: calc(50% - 10px);
  }
`;

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 2222;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileListItem = styled.li`
  transition: all 0.2s ease;
  box-shadow: inset 0 5em transparent;
  position: relative;
  overflow: hidden;

  &:hover img {
    filter: invert(44%) sepia(25%) saturate(635%) hue-rotate(102deg) brightness(89%) contrast(87%);
  }

  a {
    color: ${colors.blue};
    white-space: nowrap;
    font-weight: 700;
    display: block;
    transition: all 0.2s ease;
    text-align: center;
    font-size: 28px;
    padding: 50px 0;

    &:focus-visible {
      outline-offset: unset;
    }

    &:hover {
      @media ${device.laptop} {
        background-color: ${colors.hoverWhite};
        color: ${colors.green};
      }

      ~ img {
        filter: invert(44%) sepia(25%) saturate(635%) hue-rotate(102deg) brightness(89%) contrast(87%);
      }
    }
  }

  &:last-of-type {
    border: 2px solid ${colors.blue};
    border-radius: 5em;
    overflow: hidden;
    margin: 50px;

    a {
      padding: 10px 20px;
    }

    &:hover {
      background-color: ${colors.blue};

      a {
        background-color: ${colors.blue};
        color: ${colors.white};
      }
    }
  }

  > img {
    position: absolute;
    bottom: 0;
    left: calc(50% - 10px);
  }
`;

export const SubmenuList = styled.ul`
  /* background-color: ${colors.green}; */
  /* position: absolute; */
  min-width: 180px;
  z-index: 10;
`;

export const SubmenuItem = styled.li`
  /* background-color: ${colors.green}; */
  border-bottom: 1px solid ${colors.blue};

  &:hover {
    /* background-color: ${colors.darkGreen}; */
  }

  a {
    color: ${colors.blue};
    font-size: 18px;
    white-space: nowrap;
    padding: 30px;
    display: block;
    text-align: center;
    font-weight: 900;
  }
`;

export const ScrollContainer = styled.div`
  margin-left: 1.4vw;
  font-size: 1.25vw;
  z-index: 100;
  grid-row-gap: 5px;
  color: var(--white);
  letter-spacing: -0.011em;
  text-transform: uppercase;
  flex-direction: column;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  position: absolute;
  top: 50vh;
  right: 0px;
  overflow: hidden;
  transform: rotate(-90deg);
`;

export const ScrollIndicator = styled.div`
  height: 2px;
  background-color: var(--white);
  background-image: linear-gradient(to right, ${colors.blue}, ${colors.purple});
  animation: ${ScrollGradientAnimation} 2s ease 0s infinite normal forwards;
`;

export const ScrollText = styled.div``;
