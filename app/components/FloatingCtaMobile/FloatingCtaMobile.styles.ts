import { device } from "@/global/breakpoints";
import { colors } from "@/global/colors";
import styled from "styled-components";

export const CtaContainer = styled.div<{ $show?: boolean }>`
  z-index: 99999;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  bottom: 30px;
  right: ${(props) => (props.$show ? "-15%" : "-100%")};
  transform: translateX(-50%);
  transition: right 0.5s ease-out; /* Smooth transition effect */

  @media ${device.tablet} {
    display: none;
  }
`;

export const InstantQuote = styled.a`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 10px 15px;
  border-radius: 5em;
  text-transform: uppercase;
`;
