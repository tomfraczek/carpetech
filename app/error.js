"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { colors } from "@/global/colors";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px;
`;

const Title = styled.h2`
  font-size: 82px;
  color: ${colors.blue};
`;

const Paragraph = styled.p`
  font-size: 30px;
  color: ${colors.darkBlue};
`;

const GoHomeButton = styled(Link)`
  color: ${colors.blue};
  &:hover {
    text-decoration: underline;
  }
`;

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorContainer>
      <Title>500</Title>
      <Paragraph>Something went wrong!</Paragraph>
      <GoHomeButton href="/">Return Home</GoHomeButton>
    </ErrorContainer>
  );
}
