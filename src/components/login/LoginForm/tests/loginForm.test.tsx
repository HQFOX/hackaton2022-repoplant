/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import LoginForm from "../index";

const mockStore = configureStore();

describe("<LoginForm />", () => {
  let snapshot: ReactTestRenderer;

  beforeEach(() => {
    const login = (
      <Provider store={mockStore()}>
        <HvProvider>
          <LoginForm />
        </HvProvider>
      </Provider>
    );

    snapshot = create(login);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
