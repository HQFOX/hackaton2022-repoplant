import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { withStoreProvider } from "lib/utils/tests";
import NotFound from "../index";

describe("<NotFound />", () => {
  let snapshot: ReactTestRenderer;

  beforeEach(() => {
    const WithStoreProvider = withStoreProvider(NotFound, {
      // @ts-ignore
      router: { location: { pathname: "/" } },
      auth: { isAuthed: false },
      logout: jest.fn()
    });
    snapshot = create(<WithStoreProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
