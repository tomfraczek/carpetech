import { device } from "@/global/breakpoints";
import { colors } from "@/global/colors";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  z-index: 1;
  border-bottom: ${(props) => `10px solid ${props.$border}`};
  position: relative;
  aspect-ratio: 16 / 9;
  /* height: 400px; */

  @media ${device.laptop} {
    height: 700px;
  }
`;

export const Header = styled.h6`
  position: relative;
  top: 15px;
  z-index: 2;
  position: relative;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  font-size: clamp(20px, 2vw, 2em);
  color: ${colors.white};
  margin-top: 10.5px;
  margin-bottom: 10.5px;
`;

export const Description = styled.h2`
  z-index: 2;
  position: relative;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
  font-size: clamp(34px, 5vw, 70px);
  color: ${colors.white};
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-top: 14px;
  margin-bottom: 10px;
  width: 80%;
`;

export const Mask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const PhoneNumber = styled.p`
  font-weight: 700;
  margin: 0 5px;
`;

export const CtaContainer = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  margin-top: 50px;

  a {
    border-radius: 5em;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: clamp(20px, 1.8vw, 26px);
    display: flex;
    align-items: center;
    padding: 0.4em 1em;
    border: 2px solid ${colors.white};
    transition: all 0.2s ease;

    &:hover {
      background-color: ${colors.blue};
      border-color: ${colors.blue};

      & > img {
        transform: rotate(-90deg);
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5%;
  position: absolute;

  img {
    margin-right: 10px;
    transition: all 0.2s ease;
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
