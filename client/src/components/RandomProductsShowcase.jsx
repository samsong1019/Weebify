import React from "react";
import styled from "styled-components";
import { popularProducts } from "../testingData";
import SingleProduct from "./SingleProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function RandomProductsShowcase() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </Container>
  );
}
