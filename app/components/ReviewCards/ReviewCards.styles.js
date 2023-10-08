import { colors } from '@/global/colors';
import styled from 'styled-components';

export const Header = styled.h2`
  font-weight: bold;
  color: ${colors.blue};
  font-size: clamp(28px, 2vw, 36px);
  margin: 0.67em 0;
  margin-bottom: 10.5px;
  letter-spacing: -0.5px;
  line-height: 1.1;
`;
