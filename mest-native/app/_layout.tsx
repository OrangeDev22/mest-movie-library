import { Stack } from "expo-router";
import "../global.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </ApolloProvider>
  );
}
