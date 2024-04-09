import { device } from "@/global/breakpoints";
import styled from "styled-components";

export const CtaContainer = styled.div<{ $show?: boolean }>`
  z-index: 99999;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: 30px;
  right: ${(props) => (props.$show ? "0px" : "-100px")};
  transform: translateX(-50%);
  transition: right 0.5s ease-out; /* Smooth transition effect */

  @media ${device.tablet} {
    display: none;
  }
`;
