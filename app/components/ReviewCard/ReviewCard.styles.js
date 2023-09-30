import { colors } from '@/global/colors';
import styled from 'styled-components';

export const ReviewCardContainer = styled.div`
  position: relative;
  width: 480px;
  margin-right: 20px;
  display: block;
  height: auto;
  border-radius: 15px;
  padding: 20px 30px;
  background-color: ${colors.lightGrey};
  border: 1px solid ${colors.midGrey};
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-style: italic;
  color: ${colors.purple};
  margin: 0 0 10.5px;
`;

export const Author = styled.p`
  font-size: 18px;
  color: ${colors.blue};
  font-weight: bold;
`;

export const Location = styled.p`
  margin-bottom: 1em;
  color: ${colors.blue};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  svg {
    fill: ${colors.gold};
    width: 28px;
    height: 24px;
  }
`;
export const QuoteIcon = styled.img`
  margin-left: auto;
`;
