import { colors } from '@/global/colors';
import styled from 'styled-components';

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
