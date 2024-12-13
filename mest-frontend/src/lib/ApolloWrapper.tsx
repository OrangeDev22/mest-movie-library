"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { ReactNode, useEffect, useState } from "react";

export function ApolloWrapper({
  children,
  accessToken,
}: {
  children: ReactNode;
  accessToken: string;
}) {
  const makeClient = () => {
    const httpLink = new HttpLink({
      uri: process.env.MEST_BACKEND_URL,
      headers: {
        authorization: `Bearer ${accessToken}`,
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

  return (
    <ApolloNextAppProvider makeClient={() => makeClient()}>
      {children}
    </ApolloNextAppProvider>
  );
}
