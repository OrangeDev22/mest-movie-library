"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export function ApolloWrapper({
  children,
  accessToken,
  accessTokenExpiresAt,
}: {
  children: ReactNode;
  accessToken: string;
  accessTokenExpiresAt?: number;
}) {
  const router = useRouter();
  const LOG_OUT_ROUTE = "/api/auth/logout";

  if (
    accessTokenExpiresAt &&
    accessTokenExpiresAt < new Date().getTime() / 1000
  ) {
    router.push(LOG_OUT_ROUTE);
    return null;
  }

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
