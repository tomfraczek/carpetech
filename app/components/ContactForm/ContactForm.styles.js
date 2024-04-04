import { device } from "@/global/breakpoints";
import { colors } from "@/global/colors";
import styled from "styled-components";

export const Form = styled.form`
  grid-column-gap: 2%;
  grid-row-gap: 16px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: grid;
  /* display: flex;
  flex-direction: column; */
  z-index: 3;

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
  grid-column: span 6;
`;

export const FormPostcode = styled.div`
  grid-column: span 6;
`;

export const FormArea = styled.div`
  grid-column: span 12;
`;

export const FormMessage = styled.div`
  grid-column: 1/-1;
`;

// export const FormCaptcha = styled.div`
//   grid-column: span 12;

//   & div {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

export const FormDropzone = styled.div`
  grid-column: 1/-1;
`;

export const SubmitContainer = styled.div`
  grid-column: span 12;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropzoneContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-style: dashed;
  background: rgba(0, 0, 0, 0.05);
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  grid-column: span 12;
  border-radius: 10px;
  cursor: pointer;
  border: 2px dashed ${colors.dropzoneBorder};
`;
export const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Thumb = styled.div`
  display: "inline-flex";
  border-radius: 2px;
  border: "1px solid #eaeaea";
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100%;
  height: 100%;
  padding: 4px;
  box-sizing: "border-box";
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0px;
  overflow: hidden;
  width: 80px;
  height: auto;
  position: relative;
`;

export const SubmitButton = styled.button`
  background-color: ${colors.blue};
  font-size: clamp(17px, 1.8vw, 26px);
  color: ${colors.white};
  border-radius: 5em;
  border: 2px solid ${colors.blue};
  text-align: center;
  line-height: 1.2;
  padding: 0.4em 1.5em;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  border: 2px solid white;

  &:hover {
    background-color: ${colors.green};
    border-color: ${colors.green};
  }

  &:disabled,
  &[disabled] {
    background-color: ${colors.green};
  }
`;
