import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import Link from 'next/link';
import styled from 'styled-components';

export const AddressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3em 0;
  width: 50%;
  position: relative;
`;

export const AddressDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Email = styled(Link)`
  display: flex;
  align-items: center;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  color: ${colors.purple};
  line-height: 1.5;
  font-size: 2em;
  margin: 0 0 10.5px;

  img {
    filter: invert(50%) sepia(26%) saturate(1120%) hue-rotate(248deg) brightness(72%) contrast(87%);
    width: 18.7px;
    height: 18.7px;
    margin-right: 6px;
  }
`;

export const Phone = styled(Link)`
  display: flex;
  align-items: center;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  color: ${colors.purple};
  line-height: 1.5;
  font-size: 17px;
  margin: 0 0 10.5px;
  font-size: 2.7em;
  font-weight: bold;

  img {
    width: 34px;
    height: 34px;
    margin-right: 8px;
  }
`;

export const Subtitle = styled.h2`
  font-size: clamp(28px, 2vw, 36px);
  margin-top: 0;
  margin-bottom: 15px;
  color: ${colors.blue};
  font-weight: bold;
`;

export const Office = styled.p`
  display: flex;
  flex-direction: column;
  color: ${colors.grey};
  font-weight: bold;
  margin: 0 0 10.5px;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
`;

export const Address = styled.p`
  color: ${colors.grey};

  font-size: 17px;
  line-height: 1.5;
`;

export const Logo = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 310px;
  img {
    width: 100%;
    z-index: 0;
    height: auto;
  }
`;
