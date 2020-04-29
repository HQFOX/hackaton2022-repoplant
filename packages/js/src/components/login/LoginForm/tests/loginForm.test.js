import React from "react";
import { mount } from "enzyme";
import { withHvProvider } from "lib/utils/tests";
import LoginForm from "../index";

describe("<LoginForm />", () => {
  let component;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(LoginForm);
    component = mount(<WithHvProvider login={jest.fn()} />);
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
