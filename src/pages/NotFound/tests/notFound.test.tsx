import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import { TestAppState } from "typings/state";
import NotFound from "..";

describe("<NotFound />", () => {
  let snapshot;

  beforeEach(() => {
    const WithStoreProvider = withStoreProvider(NotFound, {
      router: { location: { pathname: "/" } },
      auth: { isAuthed: false },
      pages: { data: [] },
      logout: jest.fn()
    } as TestAppState);
    snapshot = mount(<WithStoreProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot).toMatchSnapshot();
  });
});
