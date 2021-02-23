import React, { useState } from "react";
import { RecoverContextType } from "typings/auth";

export const RecoverContext = React.createContext<RecoverContextType>({
  recoverStatus: "idle",
  activeForm: "login",
  setActiveForm: () => {},
  recover: () => {},
});

export const RecoverContextProvider = ({ children }) => {
  const [recoverStatus, setRecoverStatus] = useState<string>("idle");
  const [activeForm, setActiveForm] = useState<string>("login");

  const recover = async (email) => {
    setRecoverStatus("pending");
    try {
      await recover(email);
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
