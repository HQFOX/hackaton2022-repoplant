import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import configureMockStore, { MockStore } from "redux-mock-store";
import { createMemoryHistory } from "history";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import { AppState } from "typings/state";

export const createMockStore = (state: AppState): any => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(state);
  return store;
};

export const withStoreProvider = <P extends {}>(
  Component: React.ComponentType<P>,
  state: AppState
): React.FC<P> => props => (
  <Provider store={createMockStore(state)}>
    <HvProvider>
      <MemoryRouter>
        <Component {...props} />
      </MemoryRouter>
    </HvProvider>
  </Provider>
);

export const withHvProvider = <P extends {}>(
  Component: React.ComponentType<P>
): React.FC<P> => props => (
  <HvProvider>
    <MemoryRouter>
      <Component {...props} />
    </MemoryRouter>
  </HvProvider>
);
