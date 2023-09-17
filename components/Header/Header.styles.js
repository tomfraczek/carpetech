import { colors } from '@/global/colors';
import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-right: 3px;
  }

  p {
    color: ${colors.blue};
    font-size: 18px;
  }
`;

export const Logo = styled.div``;

export const PhoneNumber = styled.div`
  color: ${colors.green};
  font-size: 30px;
  font-weight: 700;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
`;
