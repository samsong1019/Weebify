import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <Container>
      <Info>Footer goes here</Info>
      <Info>Weebify © 2022 </Info>
      <Info>blah blah blah, needs more content</Info>
    </Container>
  );
}
