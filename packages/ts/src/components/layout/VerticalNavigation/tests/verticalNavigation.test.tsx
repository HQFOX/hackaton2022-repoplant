import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import { TestAppState } from "typings/state";
import VerticalNavigation from "..";

const pageData = [
  {
    id: "1",
    label: "Overview",
    path: "/overview"
  },
  {
    id: "2",
    label: "Templates",
    path: "/templates"
  }
];

describe("<VerticalNavigation />", () => {
  let component;

  const WithProvider = withStoreProvider(VerticalNavigation, {
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    pages: { data: pageData },
    logout: jest.fn()
  } as TestAppState);

  beforeEach(() => {
    component = mount(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be rendered", () => {
    const navigation = component.find(VerticalNavigation);
    expect(navigation.length).toBe(1);
  });
});
