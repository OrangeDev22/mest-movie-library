"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const [token, setToken] = useState("");
  const user = useUser();

  const makeClient = () => {
    const httpLink = new HttpLink({
      uri: process.env.MEST_BACKEND_URL,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              httpLink,
            ])
          : httpLink,
    });
  };

  // useEffect(() => {
  //   const getAccessToken = async () => {
  //     try {
  //       const accessToken = await getAccessTokenSilently();
  //       setToken(accessToken);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAccessToken();
  // }, [user]);

  // if (isLoading && !token) return <div>Loading...</div>;

  // if ((isAuthenticated && !token) || error)
  //   return <div>Ops something went wrong</div>;

  return (
    <ApolloNextAppProvider makeClient={() => makeClient()}>
      {children}
    </ApolloNextAppProvider>
  );
}
