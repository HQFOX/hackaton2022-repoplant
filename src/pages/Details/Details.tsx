import React, { useState } from "react";
import { Delete, Lock, Preview } from "@hv/uikit-react-icons";
import { HvGrid, HvTypography, HvTable } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { DetailsProps } from ".";

const Details: React.FC<DetailsProps> = ({ classes }: DetailsProps) => {
  const initialData = [
    {
      pid: 14,
      name: "Event 1",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection ssssssssssssssssssssssssssssssssssssssssssssssssssss",
      status: "Open",
      riskScore: "98",
      severity: "Critical",
      priority: "Critical",
      link: { displayText: "Asset 1", url: "blablabla" },
      subElementTitle: "cell_1",
      subElementTitle2: "cell_2",
    },
    {
      pid: 13,
      name: "Event 2",
      createdDate: "10/14/2018",
      eventType: "Risk of failure profile",
      status: "Pending",
      riskScore: "90",
      severity: "Catastrophic",
      priority: "High",
      link: { displayText: "Asset 2", url: "blablabla" },
    },
    {
      pid: 12,
      name: "Event 3",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Closed",
      riskScore: "98",
      severity: "Moderate",
      priority: "Medium",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
    {
      pid: 11,
      name: "Event 4",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Open",
      riskScore: "98",
      severity: "Low",
      priority: "Low",
      link: { displayText: "Asset 3", url: "blablabla" },
    },
    {
      pid: 10,
      name: "Event 5",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Pending",
      riskScore: "98",
      severity: "Critical",
      priority: "Critical",
      link: { displayText: "Asset 2", url: "blablabla" },
    },
    {
      pid: 8,
      name: "Event 6",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Closed",
      riskScore: "98",
      severity: "Major",
      priority: "High",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
    {
      pid: 7,
      name: "Event 7",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Open",
      riskScore: "98",
      severity: "Critical",
      priority: "Critical",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
    {
      pid: 6,
      name: "Event 8",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Pending",
      riskScore: "98",
      severity: "Moderate",
      priority: "Medium",
      link: { displayText: "Asset 2", url: "blablabla" },
    },
    {
      pid: 5,
      name: "Event 9",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Open",
      riskScore: "98",
      severity: "Critical",
      priority: "Critical",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
    {
      pid: 4,
      name: "Event 1",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Closed",
      riskScore: "98",
      severity: "Critical",
      priority: "Critical",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
    {
      pid: 3,
      name: "Event 10",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Open",
      riskScore: "98",
      severity: "Major",
      priority: "High",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
    {
      pid: 2,
      name: "Event 11",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Open",
      riskScore: "98",
      severity: "Critical",
      priority: "Critical",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
    {
      pid: 1,
      name: "Event 12",
      createdDate: "10/14/2018",
      eventType: "Anomaly detection",
      status: "Open",
      riskScore: "98",
      severity: "Critical",
      priority: "Critical",
      link: { displayText: "Asset 1", url: "blablabla" },
    },
  ];

  const getColumns = () => [
    {
      headerText: "Title",
      accessor: "name",
      cellType: "alpha-numeric",
      fixed: "left",
      sortMethod: (a, b) => {
        if (a === b) {
          return 0;
        }
        const aReverse = Number(a.split(" ")[1]);
        const bReverse = Number(b.split(" ")[1]);
        return aReverse > bReverse ? 1 : -1;
      },
    },
    {
      headerText: "Time",
      accessor: "createdDate",
      cellType: "numeric",
    },
    {
      headerText: "Event Type",
      accessor: "eventType",
      format: (value) => value.original.eventType.replace("_", " ").toLowerCase(),
      style: { textTransform: "capitalize" },
      cellType: "alpha-numeric",
    },
    {
      headerText: "Status",
      accessor: "status",
      format: (value) => value.original.status.toLowerCase(),
      style: { textTransform: "capitalize" },
      cellType: "alpha-numeric",
    },
    {
      headerText: "Probability",
      accessor: "riskScore",
      format: (value) => `${value.original.riskScore}%`,
      cellType: "numeric",
    },
    {
      headerText: "Severity",
      accessor: "severity",
      format: (value) => value.original.severity.toLowerCase(),
      style: { textTransform: "capitalize" },
      cellType: "alpha-numeric",
    },
    {
      headerText: "Priority",
      accessor: "priority",
      format: (value) => value.original.priority.toLowerCase(),
      style: { textTransform: "capitalize" },
      cellType: "alpha-numeric",
    },
    {
      headerText: "Asset",
      accessor: "asset",
      cellType: "link",
      fixed: "right",
      sortable: false,
    },
  ];

  const [data, setData] = useState(initialData);
  const [pageSize, setPageSize] = useState(10);
  const defaultSorted = [{ id: "name", desc: true }];

  const onPageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  const actions = [
    { id: "delete", label: "Delete", icon: <Delete /> },
    { id: "lock", label: "Lock", icon: <Lock /> },
    { id: "put", label: "Preview", icon: <Preview /> },
  ];

  const handleAction = (event, id, action, selection = []) => {
    switch (action.id) {
      case "delete":
        setData(data.filter((el) => !selection.includes(el.pid)));
        break;
      default:
        break;
    }
  };

  return (
    <HvGrid container>
      <HvGrid item xs={4} md={8}>
        <HvTypography variant="xlTitle">Details</HvTypography>
      </HvGrid>
      <HvGrid item xs={12}>
        <HvTable
          id="table"
          data={data}
          columns={getColumns()}
          defaultPageSize={10}
          pageSize={pageSize}
          resizable={false}
          defaultSorted={defaultSorted}
          onPageSizeChange={onPageSizeChange}
          idForCheckbox="pid"
          actions={actions}
          actionsCallback={handleAction}
          maxVisibleActions={1}
        />
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(Details);
