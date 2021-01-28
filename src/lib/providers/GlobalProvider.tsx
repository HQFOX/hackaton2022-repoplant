import React from "react";
import { HvProvider } from "@hv/uikit-react-core";
import { AuthContext } from "lib/context/AuthContext";
import ThemeContext from "lib/context/ThemeContext";
import { useAuth } from "lib/hooks/useAuth";
import useTheme from "lib/hooks/useTheme";

const GlobalProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthed, authStatus, login, logout } = useAuth();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider
        value={{
          isAuthed,
          authStatus,
          login,
          logout,
        }}
      >
        <HvProvider uiKitTheme={theme}>{children}</HvProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default GlobalProvider;
