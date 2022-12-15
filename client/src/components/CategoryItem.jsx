import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 30vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: black;
  font-size: 45px;
  font-weight: 600;
  margin: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  color: black;
  font-weight: 600;
  cursor: pointer;
`;

export default function CategoryItem({ categories }) {
  return (
    <Container>
      <Image src={categories.image} />
      <Info>
        <Title>{categories.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
}
