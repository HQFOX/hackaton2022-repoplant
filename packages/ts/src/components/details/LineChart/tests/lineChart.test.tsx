import React from "react";
import { mount } from "enzyme";
import LineChart from "..";

describe("<LineChart />", () => {
  let component;

  beforeEach(() => {
    component = mount(<LineChart />);
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
