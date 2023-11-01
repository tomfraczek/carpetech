import { colors } from '@/global/colors';
import styled from 'styled-components';

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 0;
  width: 50%;
  position: relative;

  img {
    width: 100%;
    z-index: 0;
    height: auto;
  }
`;

export const AddressDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: clamp(28px, 2vw, 36px);
  margin-top: 0;
  margin-bottom: 15px;
  color: ${colors.blue};
  letter-spacing: -0.5px;
  font-weight: bold;
`;

export const Email = styled.div`
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  color: ${colors.purple};
  line-height: 1.5;
  font-size: 1.1em;
  margin: 0 0 10.5px;

  img {
    filter: invert(50%) sepia(26%) saturate(1120%) hue-rotate(248deg) brightness(72%) contrast(87%);
    width: 18.7px;
    height: 18.7px;
    top: 5px;
    position: relative;
    margin-right: 6px;
  }
`;

export const Phone = styled.p`
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  font-size: 2em;
  color: ${colors.purple};
  line-height: 1.5;
  font-size: 17px;
  margin: 0 0 10.5px;
  font-size: 2em;

  img {
    width: 34px;
    height: 34px;
    margin-right: 8px;
    position: relative;
    top: 4px;
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
