import styled from 'styled-components';
import { breakpoints } from '/global/breakpoints';

export const media = {
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  laptop: `@media (min-width: ${breakpoints.laptop})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
};

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;

  ${media.tablet} {
    width: 970px;
  }

  ${media.laptop} {
    width: 1170px;
  }
`;
