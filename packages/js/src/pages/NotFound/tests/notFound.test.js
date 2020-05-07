import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import NotFound from "..";

describe("<NotFound />", () => {
  let component;

  const WithStoreProvider = withStoreProvider(NotFound, {
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    pages: { data: [] },
    logout: jest.fn()
  });

  beforeEach(() => {
    component = mount(<WithStoreProvider />);
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
