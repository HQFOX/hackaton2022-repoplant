import { render } from "@testing-library/react";
import React from "react";
import { withStoreProvider } from "lib/utils/tests";
import { TestAppState } from "typings/state";
import withLayout from "../withLayout";

const Mock = () => <div />;

describe("withLayout", () => {
  let wrapper;

  const checkComponent = (Component: React.ComponentType) => {
    const WithStoreProvider = withStoreProvider(Component, {
      router: { location: { pathname: "/" } },
      auth: { isAuthed: false },
      pages: { data: [] },
      logout: jest.fn(),
    } as TestAppState);

    wrapper = render(<WithStoreProvider />);
    expect(wrapper.baseElement).toMatchSnapshot();
  };

  it("is rendered correctly", () => {
    checkComponent(withLayout(Mock));
    checkComponent(withLayout(Mock, true));
  });
});
