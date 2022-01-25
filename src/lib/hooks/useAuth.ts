import { useState } from "react";

import { authenticate } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";

const useAuth = (): AuthContextValue => {
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

  return { isAuthed, authStatus, login, logout };
};

export default useAuth;
