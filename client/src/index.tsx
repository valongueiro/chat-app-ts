import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import App from "./App";
import "./index.css";

const apiUrl = {
  localhostServer: "http://localhost:4000/",
  anymind: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphiql",
};

const link = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link,
  uri: apiUrl.localhostServer,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
