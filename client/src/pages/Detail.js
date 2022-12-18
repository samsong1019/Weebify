import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

const Container = styled.div`
  height: 60vh;
  background: white;
  margin-top: 0.5%;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  aling-items: center
  justify-content: space-around;
`;

const Left = styled.div`
  margin-top: 10%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Right = styled.div`
  margin-top: 7%;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 5px;
  border: none;
  background-color: white;
  border: 1px solid black;
  color: black;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: lightblue;
    font-weight: bold;
    text-decoration: underline;
  }
`;

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <Container className="container my-1">
          <Wrapper>
            <Link to="/products">← Back to Products</Link>
            <Left>
              <h2>{currentProduct.name}</h2>

              <p>{currentProduct.description}</p>
              <p>
                <strong>Price:</strong>${currentProduct.price}
              </p>
              <Button onClick={addToCart}>Add to Cart</Button>
              <Button
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >
                Remove from Cart
              </Button>
            </Left>
            <Right>
              {" "}
              <Image
                src={`${currentProduct.image}`}
                alt={currentProduct.name}
              />
            </Right>
          </Wrapper>
        </Container>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
