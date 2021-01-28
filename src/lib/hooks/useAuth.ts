import { useState } from "react";
import { authenticate, recoverPassword } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import { AuthCredentials } from "typings/auth";

export const useAuth = () => {
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

  return { authStatus, isAuthed, login, logout };
};

export const useRecover = () => {
  const [recoverStatus, setRecoverStatus] = useState<string>("idle");
  const [activeForm, setActiveForm] = useState<string>("login");

  const recover = async (email) => {
    setRecoverStatus("pending");
    try {
      await recoverPassword(email);
      setRecoverStatus("success");
      setTimeout(() => {
        setRecoverStatus("idle");
        setActiveForm("login");
      }, 2000);
    } catch (error) {
      setRecoverStatus("error");
      setTimeout(() => setRecoverStatus("idle"), 2000);
    }
  };

  return { recoverStatus, activeForm, setActiveForm, recover };
};
