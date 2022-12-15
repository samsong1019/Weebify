import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 12vh;
  background: white;
  margin-top: 0.5%;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  aling-items: center
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 46px;
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Logo>Weebify</Logo>
        </Center>
        <Right>
          <Link to="/signup">
            <MenuItem>Sign-Up</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <ShoppingCartOutlined />
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
