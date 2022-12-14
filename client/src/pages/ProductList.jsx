import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
      <Navbar />
      <Title>All Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Category:</FilterText>
          <Select>
            <Option>Funko</Option>
            <Option>Clothing</Option>
            <Option>Figurines</Option>
            <Option>Plushies</Option>
            <Option>Posters</Option>
            <Option>Bundles</Option>
            <Option>Sale</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option>Price (High to Low)</Option>
            <Option>Price (Low to High)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
}
