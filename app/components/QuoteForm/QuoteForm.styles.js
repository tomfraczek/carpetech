import { device } from '@/global/breakpoints';
import { colors } from '@/global/colors';
import styled from 'styled-components';

export const Form = styled.form`
  grid-column-gap: 2%;
  grid-row-gap: 16px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    display: grid;
  }

  input,
  select,
  textarea {
    width: 100%;
    font-size: 15px;
    margin-bottom: 0;
    margin-top: 0;
    padding: 8px;
    color: ${colors.inputGrey};
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${colors.white};
    font-family: inherit;
  }
`;

export const FormName = styled.div`
  grid-column: span 6;
`;

export const FormPhone = styled.div`
  grid-column: span 6;
`;

export const FormEmail = styled.div`
  grid-column: span 8;
`;

export const FormPostcode = styled.div`
  grid-column: span 4;
`;

export const FormArea = styled.div`
  grid-column: span 12;
`;

export const FormMessage = styled.div`
  grid-column: 1/-1;
`;

export const FormCaptcha = styled.div`
  grid-column: span 12;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SubmitContainer = styled.div`
  grid-column: span 12;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: clamp(17px, 1.8vw, 26px);
    color: ${colors.white};
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5em;
    border: 2px solid;
    text-align: center;
    line-height: 1.2;
    padding: 0.4em 1.5em;
    transition: all 0.2s ease;
    position: relative;
    cursor: pointer;

    &:hover {
      background-color: ${colors.blue};
      border-color: ${colors.blue};
    }
  }
`;
