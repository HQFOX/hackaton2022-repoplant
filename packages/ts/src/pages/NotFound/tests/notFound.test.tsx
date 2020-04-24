import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import { withStoreProvider } from "lib/utils/tests";
import NotFound from "../index";

describe("<NotFound />", () => {
  let snapshot: ReactTestRenderer;

  beforeEach(() => {
    const WithStoreProvider = withStoreProvider(NotFound);
    snapshot = create(<WithStoreProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
