import React from "react";
import styled from "styled-components";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const RemoveBtn = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;

  :hover {
    text-decoration: underline;
    color: red;
    cursor: pointer;
  }
`;

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div>
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>{item.name}</div>
        <div>${item.price}/</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <RemoveBtn onClick={() => removeFromCart(item)}>Remove</RemoveBtn>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
