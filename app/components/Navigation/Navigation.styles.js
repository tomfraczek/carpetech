import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.div`
  display: none;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 2222;

  @media ${device.tablet} {
    display: block;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  transition: box-shadow 0.2s ease;
  box-shadow: inset 0 5em transparent;
  position: relative;

  &:hover img {
    filter: invert(44%) sepia(25%) saturate(635%) hue-rotate(102deg) brightness(89%) contrast(87%);
  }

  > img {
    position: absolute;
    bottom: 0;
    left: calc(50% - 10px);
  }
`;

export const FreeQuoteButton = styled(Link)`
  padding: 15px;
  color: ${colors.blue};
  white-space: nowrap;
  font-weight: 700;
  font-size: 18px;
  display: block;
  transition: all 0.2s ease;
  letter-spacing: 1.1px;
  border: 2px solid ${colors.blue};
  border-radius: 5em;
  overflow: hidden;
  padding: 10px 20px;

  &.active {
    background-color: ${colors.blue};
    color: ${colors.white};
  }

  &:hover {
    background-color: ${colors.blue};
    color: ${colors.white};
  }
`;

export const NavLink = styled(Link)`
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

  &.active {
    background-color: ${colors.hoverWhite};
    color: ${colors.green};
  }
`;

export const SubmenuList = styled.ul`
  background-color: ${colors.green};
  position: absolute;
  min-width: 180px;
`;

export const SubmenuItem = styled.li`
  background-color: ${colors.green};
  border-bottom: 1px solid ${colors.darkGreen};

  &:first-of-type {
    box-shadow: inset 0 7px 9px -4px rgba(0, 0, 0, 0.15);
  }

  &:hover {
    background-color: ${colors.darkGreen};
  }

  a {
    color: ${colors.white};
    font-size: 18px;
    white-space: nowrap;
    padding: 12px 30px 12px 30px;
    display: block;
  }
`;

export const ContactButton = styled.li`
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
`;
