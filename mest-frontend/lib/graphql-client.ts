import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.MEST_BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;
