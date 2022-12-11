import React from "react";
import styled from "styled-components";
import { popularProducts } from "../testingData";
import SingleProduct from "./SingleProduct";

const Container = styled.div``;

export default function AllProducts() {
  return <Container>
    {popularProducts.map(item =>(
        <SingleProduct item={item} key={item.id}/>>
    ))}
  </Container>;
}
