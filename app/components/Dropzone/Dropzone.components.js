import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropzoneContainer } from './Dropzone.styles';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  width: '80px',
  height: 'auto',
  position: 'relative',
};

const img = {
  display: 'block',
};

export const StyledDropzone = ({ onDrop }) => {
  const [files, setFiles] = useState([]);
  const handleFile = () => {
    onDrop(files);
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      handleFile;
    },
  });
  console.log(files);

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image
          alt='preview'
          fill
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      <div style={thumbsContainer}>{thumbs}</div>
    </DropzoneContainer>
  );
};

<StyledDropzone />;

// import { useDropzone } from 'react-dropzone';
// import styled from 'styled-components';
// import { DropzoneContainer } from './Dropzone.styles';

// export const StyledDropzone = (props) => {
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: { 'image/*': [] },
//   });

//   return (
//     <DropzoneContainer {...getRootProps()}>
//       <input {...getInputProps()} />
//       <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
//     </DropzoneContainer>
//   );
// };

// <StyledDropzone />;
