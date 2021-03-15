import { render } from "@testing-library/react";
import React from "react";
import { withProvider } from "lib/utils/tests";
import withLayout from "../withLayout";

const Mock = () => <div />;

describe("withLayout", () => {
  let wrapper;

  const checkComponent = (Component: React.ComponentType) => {
    const WithProvider = withProvider(Component);

    wrapper = render(<WithProvider />);
    expect(wrapper.container).toMatchSnapshot();
  };

  it("is rendered correctly", () => {
    checkComponent(withLayout(Mock));
    checkComponent(withLayout(Mock, true));
  });
});
