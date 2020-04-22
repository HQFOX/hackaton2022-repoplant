import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import Overview from "../index";

describe("<Overview />", () => {
  let component;

  const WithStoreProvider = withStoreProvider(Overview, {
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
