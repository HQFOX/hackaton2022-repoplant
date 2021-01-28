import React from "react";
import { AuthContextType, RecoverContextType } from "typings/auth";

export const AuthContext = React.createContext<AuthContextType>({
  isAuthed: false,
  authStatus: "idle",
  login: () => {},
  logout: () => {},
});

export const RecoverContext = React.createContext<RecoverContextType>({
  recoverStatus: "idle",
  activeForm: "login",
  setActiveForm: () => {},
  recover: () => {},
});
