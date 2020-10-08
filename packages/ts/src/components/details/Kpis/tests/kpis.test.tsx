import React from "react";
import { mount } from "enzyme";
import { HvGrid } from "@hv/uikit-react-core";
import { withHvProvider } from "lib/utils/tests";
import Kpis from "..";

describe("<Kpis />", () => {
  let component;

  beforeEach(() => {
    const WithProvider = withHvProvider(Kpis);
    component = mount(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be rendered", () => {
    const kpis = component.find(Kpis);
    expect(kpis.length).toBe(1);
  });

  it("should render 3 HvGrid", () => {
    const kpis = component.find(HvGrid);
    expect(kpis.length).toBe(3);
  });
});
