import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Prompt from "../components/Prompt";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 5000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Prompt>
      <img src="https://i.postimg.cc/9Xs9gKdX/fatcat-removebg-preview.png" />
      <br></br>
      <h1>Purchase Complete!</h1>
      <h2>Thank you for shopping with us today!</h2>
      <h2>You will be redirected to the home page momentarily</h2>
    </Prompt>
  );
}

export default Success;
