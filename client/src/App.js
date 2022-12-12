import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </>
  );
}

export default App;
