import React, { memo } from "react";
import { AuthContextType, RecoverContextType } from "typings/auth";
import { useAuth, useRecover } from "lib/hooks/useAuth";

export const AuthContext = React.createContext<AuthContextType>({
  isAuthed: false,
  authStatus: "idle",
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const { isAuthed, authStatus, login, logout } = useAuth();

  console.log("aaa");

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

export const RecoverContext = React.createContext<RecoverContextType>({
  recoverStatus: "idle",
  activeForm: "login",
  setActiveForm: () => {},
  recover: () => {},
});

export const RecoverContextProvider = ({ children }) => {
  const { recoverStatus, activeForm, setActiveForm, recover } = useRecover();

  console.log("aaa");

  return (
    <RecoverContext.Provider
      value={{
        recoverStatus,
        activeForm,
        setActiveForm,
        recover,
      }}
    >
      {children}
    </RecoverContext.Provider>
  );
};
