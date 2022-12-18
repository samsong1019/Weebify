import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const GrandContainer = styled.div`
  display: flex;
  border-bottom: 0.5px solid lightgray;
`;

const ParentContainer = styled.div`
  display: flex;
  margin: 2%;
`;
const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;
const ProductNameText = styled.div`
  color: black;
  margin-bottom: 5px;
  font-size: 18px;
  cursor: pointer;

  :hover {
    font-weight: bold;
    color: purple;
    text-decoration: underline;
  }
`;

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div>
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <GrandContainer key={order._id}>
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <ParentContainer>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <ChildContainer key={index}>
                      <Link
                        to={`/products/${_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Image alt={name} src={`${image}`} />
                        <ProductNameText>{name}</ProductNameText>
                      </Link>
                      <div>
                        <b>${price}</b>
                      </div>
                    </ChildContainer>
                  ))}
                </ParentContainer>
              </GrandContainer>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
