import React from "react";
import { mount } from "enzyme";
import { HvTable } from "@hv/uikit-react-core";
import { withStoreProvider } from "lib/utils/tests";
import Table from "..";
import { columns } from "../configuration";

const data = [
  {
    id: 14,
    name: "Event 1",
    createdDate: "10/14/2018",
    eventType:
      "Anomaly detection ssssssssssssssssssssssssssssssssssssssssssssssssssss",
    status: "Open",
    riskScore: "98",
    severity: "Critical",
    priority: "Critical",
    link: { displayText: "Asset 1", url: "blablabla" },
    subElementTitle: "cell_1",
    subElementTitle2: "cell_2"
  }
];

const mockTitle = "Title123";

describe("<Table />", () => {
  let component;

  const WithProvider = withStoreProvider(
    () => <Table columns={columns} title={mockTitle} />,
    {
      data: { table: data }
    }
  );

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
    const table = component.find(Table);
    expect(table.length).toBe(1);
  });

  it("should render the HvTable", () => {
    const table = component.find(HvTable);
    expect(table.length).toBe(1);
  });
});
