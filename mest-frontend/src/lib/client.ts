import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  // const authToken = localStorage.getItem("authToken") || "";
  // console.log("--access token?", authToken);
  console.log("Creating apollo client");
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.MEST_BACKEND_URL,
    }),
  });
});
