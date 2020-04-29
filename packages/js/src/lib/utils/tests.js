import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import HvProvider from "@hv/uikit-react-core/dist/Provider";

const mockStore = configureMockStore([thunk]);
const memoryHistory = createMemoryHistory();

const createMockStore = mockState => mockStore(mockState);

const withStoreProvider = (Component, store) => props => (
  <Provider store={createMockStore(store)}>
    <HvProvider>
      <Component {...props} />
    </HvProvider>
  </Provider>
);

const withHvProvider = Component => props => (
  <HvProvider>
    <Component {...props} />
  </HvProvider>
);

export {
  createMockStore,
  mockStore,
  memoryHistory,
  withStoreProvider,
  withHvProvider
};
