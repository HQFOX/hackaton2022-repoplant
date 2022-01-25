import React, { useMemo } from "react";

import useRecover from "lib/hooks/useRecover";

export const RecoverContext = React.createContext<RecoverContextValue>({
  recoverStatus: "idle",
  activeForm: "login",
  setActiveForm: () => {},
  recover: () => {},
});

export const RecoverContextProvider: React.FC = ({ children }) => {
  const { recoverStatus, activeForm, setActiveForm, recover } = useRecover();

  const value = useMemo(
    () => ({
      recoverStatus,
      activeForm,
      setActiveForm,
      recover,
    }),
    [recoverStatus, activeForm, setActiveForm, recover]
  );

  return (
    <RecoverContext.Provider value={value}>{children}</RecoverContext.Provider>
  );
};
