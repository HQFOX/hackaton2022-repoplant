import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { HvProvider } from "@hv/uikit-react-core";
import { TestAppState } from "typings/state";

export const createMockStore = (state: TestAppState): any => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(state);
  return store;
};

export const withStoreProvider = <P extends {}>(
  Component: React.ComponentType<P>,
  state: TestAppState
): React.FC<P> => props => (
  <Provider store={createMockStore(state)}>
    <HvProvider>
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <Component {...props} />
      </MemoryRouter>
    </HvProvider>
  </Provider>
);

export const withHvProvider = <P extends {}>(
  Component: React.ComponentType<P>
): React.FC<P> => props => (
  <HvProvider>
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <Component {...props} />
    </MemoryRouter>
  </HvProvider>
);
