import React from "react";
import { MemoryRouter } from "react-router-dom";
import GlobalProvider from "lib/providers/GlobalProvider";

export const withProvider = <P extends {}>(
  Component: React.ComponentType<P>
): React.FC<P> => (props) => (
  <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
    <GlobalProvider>
      <Component {...props} />
    </GlobalProvider>
  </MemoryRouter>
);
