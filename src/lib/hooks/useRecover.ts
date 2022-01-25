import { useState } from "react";

const useRecover = (): RecoverContextValue => {
  const [recoverStatus, setRecoverStatus] = useState<string>("idle");
  const [activeForm, setActiveForm] = useState<string>("login");

  const recover = async (email: string) => {
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

  return { recoverStatus, activeForm, setActiveForm, recover };
};

export default useRecover;
