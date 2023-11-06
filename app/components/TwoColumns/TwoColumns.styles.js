import { device } from '@/global/breakpoints';
import styled from 'styled-components';

export const ColumnsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
  }

  & > div {
    width: 100%;
    padding: 3rem 0;

    @media ${device.laptop} {
      width: 50%;
      padding: 3rem 0;
    }
  }
`;
