import { render } from '@testing-library/react';
import React from "react";
import withLayout from "../withLayout";

describe("withLayout", () => {
  let wrapper;

  const checkComponent = (Component: React.ComponentType) => {
    wrapper = render(<Component />);
    expect(wrapper.container).toMatchSnapshot();
  };

  it("is rendered correctly", () => {
    // checkComponent(withLayout(React.Component));
    // checkComponent(withLayout(React.Component, true));
  });
});
