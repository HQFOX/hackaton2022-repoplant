import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import Header from "../index";

describe("<Header />", () => {
  let component: any;

  beforeAll(() => {
    window.history.replaceState({ query: "google" }, "MOCK");
  });

  const WithStoreProvider = withStoreProvider(Header, {
    // @ts-ignore
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    logout: jest.fn()
  });

  beforeEach(() => {
    component = mount(<WithStoreProvider />);
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
