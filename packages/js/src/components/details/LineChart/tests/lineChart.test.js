import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import LineChart from "..";

const data = [{ x: ["Q1"], y: [100], name: "Sales Target" }];

describe("<LineChart />", () => {
  let component;

  const WithProvider = withStoreProvider(() => <LineChart />, {
    data: { line: data }
  });

  beforeEach(() => {
    component = mount(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be rendered", () => {
    const lineChart = component.find(LineChart);
    expect(lineChart.length).toBe(1);
  });
});
