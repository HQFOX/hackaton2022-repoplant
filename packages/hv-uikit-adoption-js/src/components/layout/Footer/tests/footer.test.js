import React from "react";
import { mount } from "enzyme";
import { withHvProvider } from "lib/utils/tests";
import Footer from "../index";

describe("<Footer />", () => {
  let component;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(Footer);
    component = mount(<WithHvProvider />);
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
