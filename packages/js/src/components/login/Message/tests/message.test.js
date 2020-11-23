import React from "react";
import { mount } from "enzyme";
import { withHvProvider } from "lib/utils/tests";
import Message from "../index";

describe("<Message />", () => {
  let component;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(Message);
    component = mount(
      <WithHvProvider login={jest.fn()} message={{ status: "someStatus" }} />
    );
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
