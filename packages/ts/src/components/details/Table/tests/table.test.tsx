import React from "react";
import { mount } from "enzyme";
import { HvTable } from "@hv/uikit-react-core";
import { withHvProvider } from "lib/utils/tests";
import Table from "..";

describe("<Table />", () => {
  let component;

  beforeEach(() => {
    const WithProvider = withHvProvider(() => <Table />);
    component = mount(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be rendered", () => {
    const table = component.find(Table);
    expect(table.length).toBe(1);
  });

  it("should render the HvTable", () => {
    const table = component.find(HvTable);
    expect(table.length).toBe(1);
  });
});
