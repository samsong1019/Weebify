import React, { useEffect } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CartIcon = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  top: 2%;
  right: 1%;
  font-size: 2rem;
  cursor: pointer;
  background-color: var(--secondary);
  border-radius: 50%;
  padding: 0.25rem;
  z-index: 9999;

  :hover {
    animation: shake 2.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-width: 20%;
  max-width: 30%;
  max-height: 60%;
  background-color: white;
  border: 2px solid black;
  overflow: auto;
  padding: 0.5rem;
  z-index: 999;
  border-bottom-left-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    .cart {
      position: relative;
      max-width: 100%;
      max-height: auto;
      box-shadow: none;
      background-color: inherit;
    }
`;

const CartTitle = styled.h2`
  text-align: center;
  text-decoration: underline;
`;

const EmptyCartText = styled.h3`
  text-align: center;
`;

const CloseCartBtn = styled.div`
  text-align: right;
  font-size: 24px;
  font-weight: bold;

  :hover {
    text-decoration: underline;
    color: red;
    cursor: pointer;
  }
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
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

const LoginPrompt = styled.p`
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  color: black;
`;

const TotalCostText = styled.p`
  margin-top: 25px;
  font-size: 20px;
  font-weight: bold;
  color: darkgreen;
`;

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <CartIcon onClick={toggleCart}>
        <ShoppingCartOutlined fontSize="large" />
      </CartIcon>
    );
  }

  return (
    <CartContainer>
      <CloseCartBtn onClick={toggleCart}>X</CloseCartBtn>
      <CartTitle>Your Cart</CartTitle>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div>
            <TotalCostText>Total: ${calculateTotal()}</TotalCostText>
            <br></br>
            {Auth.loggedIn() ? (
              <Button onClick={submitCheckout}>Checkout Now</Button>
            ) : (
              <LoginPrompt>Please login to checkout!</LoginPrompt>
            )}
          </div>
        </div>
      ) : (
        <div>
          <EmptyCartText>You don't have any items in your cart.</EmptyCartText>
          <img src="https://www.redbubble.com/frontend-static/_next/static/media/empty-cart.4eb3b566.svg" />
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
