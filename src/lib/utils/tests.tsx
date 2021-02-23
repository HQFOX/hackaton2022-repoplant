import React from "react";
import { MemoryRouter } from "react-router-dom";
import { HvProvider } from "@hv/uikit-react-core";
import ContextProvider from "lib/providers/ContextProvider";

export const withProvider = <P extends {}>(
  Component: React.ComponentType<P>
): React.FC<P> => (props) => (
  <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
    <ContextProvider>
      <HvProvider>
        <Component {...props} />
      </HvProvider>
    </ContextProvider>
  </MemoryRouter>
);
