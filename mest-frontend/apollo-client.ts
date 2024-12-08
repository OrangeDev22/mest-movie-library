import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.MEST_BACKEND_URL,
    cache: new InMemoryCache(),
    headers: {
      //   authorization: `Bearer ${token}`,
    },
  });
};

export default createApolloClient;
