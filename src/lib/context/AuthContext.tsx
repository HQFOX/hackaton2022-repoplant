import React, { useState } from "react";
import { AuthContextType, AuthCredentials } from "typings/auth";
import { authenticate } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";

export const AuthContext = React.createContext<AuthContextType>({
  isAuthed: false,
  authStatus: "idle",
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<string>("idle");
  const [isAuthed, setIsAuthed] = useState<boolean>(
    Boolean(getCookie("token"))
  );

  const login = async (credentials: AuthCredentials): Promise<void> => {
    setAuthStatus("pending");

    try {
      const token: string = await authenticate(credentials);
      setCookie({ key: "token", value: token });
      setIsAuthed(true);
      setAuthStatus("success");
      setTimeout(() => setAuthStatus("idle"), 2000);
    } catch (error) {
      setAuthStatus("error");
      setTimeout(() => setAuthStatus("idle"), 2000);
    }
  };

  const logout = async (): Promise<void> => {
    removeCookie("token");
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthed,
        authStatus,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
