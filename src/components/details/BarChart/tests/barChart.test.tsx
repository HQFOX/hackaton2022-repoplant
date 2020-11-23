import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import BarChart from "..";

const data = [{ x: ["Q1"], y: [100], name: "Sales Target" }];

describe("<BarChart />", () => {
  let component;

  const WithProvider = withStoreProvider(() => <BarChart />, {
    data: { bar: data }
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
    const barChart = component.find(BarChart);
    expect(barChart.length).toBe(1);
  });
});
