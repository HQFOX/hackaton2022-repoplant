import React, { useState } from "react";

export interface DummyContextType {
  stuff: string;
}

export const DummyContext = React.createContext({});

export const DummyContextProvider = ({ children }) => {
  const [stuff, setStuff] = useState("");

  console.log("ddd");

  return (
    <DummyContext.Provider value={{ stuff }}>{children}</DummyContext.Provider>
  );
};
