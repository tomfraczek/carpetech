import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { DropzoneContainer } from './Dropzone.styles';

export const StyledDropzone = (props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
  });

  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
    </DropzoneContainer>
  );
};

<StyledDropzone />;
