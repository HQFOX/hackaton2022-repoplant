import React from "react";
import { render } from "@testing-library/react";
import { withHvProvider } from "lib/utils/tests";
import Footer from "../index";

describe("<Footer />", () => {
  let snapshot;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(Footer);

    snapshot = render(<WithHvProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.container).toMatchSnapshot();
  });
});
