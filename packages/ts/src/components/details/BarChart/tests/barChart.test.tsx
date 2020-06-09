import React from "react";
import { mount } from "enzyme";
import BarChart from "..";

describe("<BarChart />", () => {
  let component;

  beforeEach(() => {
    component = mount(<BarChart />);
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
