import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

const ParentContainer = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
`;

const ChildContainer = styled.div`
  flex: 2;
  margin: 5px;
  height: 30vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  opacity: 0.5;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: black;
  font-size: 22px;
  font-weight: 600;
  margin: 2px 35px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  border: 1px solid black;
  color: black;
  font-weight: 600;
  cursor: pointer;
`;

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <ParentContainer>
      {categories.map((item) => (
        <ChildContainer>
          <Image src={item.image} />
          <Info>
            <Button
              key={item._id}
              onClick={() => {
                handleClick(item._id);
              }}
            >
              <Title>{item.name}</Title>
            </Button>
          </Info>
        </ChildContainer>
      ))}
    </ParentContainer>
  );
}

export default CategoryMenu;
