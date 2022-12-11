import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  background-color: #960000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Announcement() {
  return (
    <Container>
      Holiday Savings! Free Priority Shipping on Orders Over $75
    </Container>
  );
}
