import React from "react";
import { render } from "@testing-library/react";
import { withStoreProvider } from "lib/utils/tests";
import LineChart from "..";

const data = [{ x: ["Q1"], y: [100], name: "Sales Target" }];

describe("<LineChart />", () => {
  let component;

  const WithProvider = withStoreProvider(() => <LineChart />, {
    data: { line: data },
  });

  beforeEach(() => {
    component = render(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });
});
