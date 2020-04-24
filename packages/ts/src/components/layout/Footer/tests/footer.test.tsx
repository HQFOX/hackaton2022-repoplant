import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { withHvProvider } from "lib/utils/tests";
import Footer from "../index";

describe("<Footer />", () => {
  let snapshot: ReactTestRenderer;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(Footer);
    snapshot = create(<WithHvProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
