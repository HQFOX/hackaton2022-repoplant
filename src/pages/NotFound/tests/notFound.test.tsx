import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import { TestAppState } from "typings/state";
import NotFound from "..";

describe("<NotFound />", () => {
  let snapshot;

  beforeEach(() => {
    const WithProvider = withProvider(NotFound, {
      router: { location: { pathname: "/" } },
      auth: { isAuthed: false },
      pages: { data: [] },
      logout: jest.fn(),
    } as TestAppState);
    snapshot = render(<WithProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.container).toMatchSnapshot();
  });
});
