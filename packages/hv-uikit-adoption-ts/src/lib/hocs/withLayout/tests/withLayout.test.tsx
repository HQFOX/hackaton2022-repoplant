import { shallow } from "enzyme";
import React from "react";
import withLayout from "../withLayout";

describe("withLayout", () => {
  let wrapper;

  const checkComponent = (Component: React.ComponentType) => {
    wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  };

  it("is rendered correctly", () => {
    checkComponent(withLayout(React.Component));
    checkComponent(withLayout(React.Component, true));
  });
});
