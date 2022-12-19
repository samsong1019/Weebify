import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Container = styled.div`
  height: 80vh;
  background-image: url("https://wallpaperaccess.com/full/17350.jpg");
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

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <b>Account Login</b>
        </Title>
        <Form onSubmit={handleFormSubmit}>
          <Input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <Input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          <Button type="submit">Login</Button>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <br></br>
          <Link to="/">Homepage</Link>
          <Link to="/signup">Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
    // <div className="container my-1">
    //   <Link to="/signup">← Go to Signup</Link>

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     {error ? (
    //       <div>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </div>
    //     ) : null}
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Login;
