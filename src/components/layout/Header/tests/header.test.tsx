import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import { TestAppState } from "typings/state";
import Header from "..";

describe("<Header />", () => {
  let component: any;

  beforeAll(() => {
    window.history.replaceState({ query: "google" }, "MOCK");
  });

  const WithProvider = withProvider(Header, {
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    pages: { data: [] },
    logout: jest.fn(),
  } as TestAppState);

  beforeEach(() => {
    component = render(<WithProvider />);
  });

  it("renders the component", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
