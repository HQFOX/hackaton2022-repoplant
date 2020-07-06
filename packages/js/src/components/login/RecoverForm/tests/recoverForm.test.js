import React from "react";
import { mount } from "enzyme";
import { withHvProvider } from "lib/utils/tests";
import RecoverForm from "../index";

describe("<RecoverForm />", () => {
  let component;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(RecoverForm);
    component = mount(<WithHvProvider login={jest.fn()} />);
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
