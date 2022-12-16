import React from "react";
import styled from "styled-components";
import Product from "./Product"
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/productQueries";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      {!loading && !error && (
        <Container>
          {data.products.map((item) => (
            <Product key={item._id} products={item}/>
          ))}
        </Container>
      )}
    </>
  );
}
