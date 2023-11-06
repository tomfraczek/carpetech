import styled from 'styled-components';

export const ThankYouContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff9c;
  border-radius: 15px;
`;

export const Title = styled.h3`
  font-weight: bold;
  color: #15528b;
  font-size: clamp(28px, 2vw, 36px);
  margin: 0.67em 0;
  margin-bottom: 10.5px;
  letter-spacing: -0.5px;
  line-height: 1.1;
`;

export const Message = styled.p`
  text-align: center;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  font-kerning: normal;
  margin: 0 0 10.5px;
  color: #555555;
  line-height: 1.5;
  font-size: 17px;
`;
