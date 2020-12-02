import React from "react";
import { render } from '@testing-library/react';
import { withStoreProvider } from "lib/utils/tests";
import { TestAppState } from "typings/state";
import Header from "..";

describe("<Header />", () => {
  let component: any;

  beforeAll(() => {
    window.history.replaceState({ query: "google" }, "MOCK");
  });

  const WithStoreProvider = withStoreProvider(Header, {
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    pages: { data: [] },
    logout: jest.fn()
  } as TestAppState);

  beforeEach(() => {
    component = render(<WithStoreProvider />);
  });

  it("it matches the snapshot", () => {
    expect(component.container).toMatchSnapshot();
  });
});
