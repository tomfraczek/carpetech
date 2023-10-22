import { colors } from '@/global/colors';
import styled from 'styled-components';

export const CarouselCaontainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  /* margin: 100px 0; */

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

export const Title = styled.h2`
  color: ${colors.blue};
  font-weight: bold;
  letter-spacing: -0.5px;
  font-size: 30px;
  margin-top: 21px;
  margin-bottom: 10.5px;
  line-height: 1.1;
  margin-bottom: 20px;
`;
