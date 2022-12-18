import React from "react";
import styled from "styled-components";

const Prompter = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  text-align: center;
`;

function Prompt({ children }) {
  return (
    <>
      <Prompter>{children}</Prompter>
    </>
  );
}

export default Prompt;
