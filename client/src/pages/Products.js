import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Products = () => {
  return (
    <div>
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Products;
