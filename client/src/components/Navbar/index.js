import React from "react";
import Auth from "../../utils/auth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cart from "../Cart";

const Container = styled.div`
  background: white;
  margin-top: 0.5%;
  border-bottom: 4px solid gray;
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
  color: black;
  font-size: 48px;
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  color: black;
  font-size: 18px;
  cursor: pointer;
  margin-right: 25px;

  :hover {
    font-weight: bold;
    color: purple;
    text-decoration: underline;
  }
`;

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Left>
          <Link to="/orderHistory" style={{ textDecoration: "none" }}>
            <MenuItem>Order History</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <MenuItem href="/" onClick={() => Auth.logout()}>
              Logout
            </MenuItem>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <MenuItem>Shop Products</MenuItem>
          </Link>
          <Cart />
        </Left>
      );
    } else {
      return (
        <Left>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <MenuItem>Sign-Up</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <MenuItem>Shop Products</MenuItem>
          </Link>
        </Left>
      );
    }
  }

  return (
    <Container>
      <Wrapper>
        <Left>{showNavigation()}</Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>Weebify</Logo>
          </Link>
        </Center>
        <Right>
          <Cart />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Nav;
