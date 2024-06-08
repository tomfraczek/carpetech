"use client";
import styled from "styled-components";
import Image from "next/image";

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;

  h1 {
    font-size: 2rem;
    color: red;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 400px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Message = () => (
  <MessageContainer>
    <h1>Atention !!!</h1>
    <p>This is a warning</p>

    <ImageContainer>
      <img src="/images/scum.jpg" alt="scumbag" />
    </ImageContainer>

    <h1>I'm a FRAUD !!!</h1>
    <p>My name is Michał Kosmowski</p>
    <p>I hire people and do not pay them</p>
    <p>I am a scum, a dishonorable and cowardly little man</p>
    <p style={{ color: "red" }}>Do not colaborate with me!</p>
  </MessageContainer>
);
