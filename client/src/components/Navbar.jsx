import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  height: 12vh;
  background: lightgray;
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

const SearchText = styled.h3`
  font-size: 22px;
  font-weight: 500;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
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
        <Left>
          <SearchText>Search</SearchText>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 26 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Weebify</Logo>
        </Center>
        <Right>
          <MenuItem>Sign-Up</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <ShoppingCartOutlined />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
