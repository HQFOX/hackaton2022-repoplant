import React from "react";
import { NavigationContextProvider } from "lib/context/NavigationContext";
import { ThemeContextProvider } from "lib/context/ThemeContext";
import { AuthContextProvider } from "lib/context/AuthContext";

const GlobalProvider = ({ children }) => {
  return (
    <NavigationContextProvider>
      <AuthContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </AuthContextProvider>
    </NavigationContextProvider>
  );
};

export default GlobalProvider;
