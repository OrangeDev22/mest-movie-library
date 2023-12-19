"use client";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

interface RootProps {
  Component: React.ElementType;
  pageProps: any; // Adjust the type based on your actual pageProps type
}

function Auth0Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Auth0Provider
      domain="https://dev-7rw58x6ui5jm2kah.us.auth0.com"
      clientId="rbU3CqujWDdGLeW86aeRiqw9yO2cNSQd"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
        audience: "https://dev-7rw58x6ui5jm2kah.us.auth0.com/api/v2/",
        scope:
          "stripe_customer_portal is_setup update:current_user_metadata openid email profile read:current_user update:current_user_identities",
      }}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0Wrapper;
