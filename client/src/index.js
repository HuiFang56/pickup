import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const protocol = window.location.protocol;
const slashes = protocol.concat("//");
const host = slashes.concat(window.location.hostname);

const client: ApolloClient = new ApolloClient({
  uri: host + ":8080/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        hello
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
