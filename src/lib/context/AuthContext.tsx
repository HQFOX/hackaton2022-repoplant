import React, { useMemo } from "react";

import useAuth from "lib/hooks/useAuth";

export const AuthContext = React.createContext<AuthContextValue>({
  isAuthed: false,
  authStatus: "idle",
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const { isAuthed, authStatus, login, logout } = useAuth();

  const value = useMemo(
    () => ({
      isAuthed,
      authStatus,
      login,
      logout,
    }),
    [isAuthed, authStatus, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
