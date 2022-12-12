import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../queries/categoryQueries";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export default function Categories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      {!loading && !error && (
        <Container>
          {data.categories.map((category) => (
            <CategoryItem key={category._id} categories={category} />
          ))}
        </Container>
      )}
    </>
  );
}
