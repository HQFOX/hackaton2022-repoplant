import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import { TestAppState } from "typings/state";
import VerticalNavigation from "..";

const pageData = [
  {
    id: "1",
    label: "Overview",
    path: "/overview",
  },
  {
    id: "2",
    label: "Templates",
    path: "/templates",
  },
];

describe("<VerticalNavigation />", () => {
  let component;

  const WithProvider = withProvider(VerticalNavigation, {
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    pages: { data: pageData },
    logout: jest.fn(),
  } as TestAppState);

  beforeEach(() => {
    component = render(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("renders the component", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
