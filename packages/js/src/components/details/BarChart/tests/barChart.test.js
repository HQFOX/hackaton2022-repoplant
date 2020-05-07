import React from "react";
import { mount } from "enzyme";
import BarChart from "..";

const data = [{ x: ["Q1"], y: [100], name: "Sales Target" }];

describe("<BarChart />", () => {
  let component;

  beforeEach(() => {
    component = mount(<BarChart data={data} />);
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
