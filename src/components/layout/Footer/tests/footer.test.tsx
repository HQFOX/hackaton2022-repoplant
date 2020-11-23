import React from "react";
import { mount } from "enzyme";
import { withHvProvider } from "lib/utils/tests";
import Footer from "../index";

describe("<Footer />", () => {
  let snapshot;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(Footer);
    snapshot = mount(<WithHvProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot).toMatchSnapshot();
  });
});
