import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Announcement() {
  return (
    <Container>
      🎄 Holiday Savings! Free Priority Shipping on Orders Over $50.00 🎄
    </Container>
  );
}
