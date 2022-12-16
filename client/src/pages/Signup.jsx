import React, { useState, useRef } from "react";
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
  width: 40%;
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
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
  margin-bottom: 12px;
`;

export default function Signup() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <b>Weebify Account Creation</b>
        </Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Agreement>
            By creating this account you agree to our privacy policy
          </Agreement>
        </Form>
        <Button>Create</Button>
        <br></br>
        <Link to="/">Homepage</Link>
      </Wrapper>
    </Container>
  );
}
