import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <b>Account Login</b>
        </Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <br></br>
          <Link to="/">Homepage</Link>
          <Link to="/signup">Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
