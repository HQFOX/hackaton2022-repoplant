import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import Asset from "../index";

describe("<Asset />", () => {
  let component;

  const WithStoreProvider = withStoreProvider(Asset, {
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
