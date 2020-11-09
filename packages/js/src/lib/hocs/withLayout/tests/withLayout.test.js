import React from "react";
import { shallow } from "enzyme";
import withLayout from "../withLayout";

describe("withLayout", () => {
  let wrapper;

  const checkComponent = Component => {
    wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  };

  it("is rendered correctly", () => {
    checkComponent(withLayout(React.Component));
    checkComponent(withLayout(React.Component, true));
  });
});
