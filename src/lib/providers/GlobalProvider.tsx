import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { ThemeProvider } from "lib/context/ThemeContext";
import { NavigationProvider } from "lib/context/NavigationContext";
import { AuthProvider } from "lib/context/AuthContext";
import navigation from "lib/navigation";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
  credentials: "omit",
});

const GlobalProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    <NavigationProvider navigation={navigation}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </NavigationProvider>
  </ApolloProvider>
);

export default GlobalProvider;
