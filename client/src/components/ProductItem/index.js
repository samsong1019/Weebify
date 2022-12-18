import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const Container = styled.div`
  height: 200px;
  border-bottom: 0.5px solid lightgray;
  background: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const QuadrantOne = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuadrantTwo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuadrantThree = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuadrantFour = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  padding: 30px;
`;

const Info = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 50px;
`;

const ItemNameText = styled.div`
  color: black;
  font-size: 26px;
  cursor: pointer;
  margin-right: 25px;

  :hover {
    font-weight: bold;
    color: purple;
    text-decoration: underline;
  }
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

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <Container>
      <Wrapper>
        <QuadrantOne>
          <Image alt={name} src={`${image}`} />
        </QuadrantOne>
        <QuadrantTwo>
          <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
            <ItemNameText>{name}</ItemNameText>
          </Link>
        </QuadrantTwo>
        <QuadrantThree>
          <Info>Price: ${price}</Info>
          <Info>
            {quantity} {pluralize("unit", quantity)} in stock
          </Info>
        </QuadrantThree>
        <QuadrantFour>
          <Button onClick={addToCart}>Add to cart</Button>
        </QuadrantFour>
      </Wrapper>
    </Container>
  );
}

export default ProductItem;
