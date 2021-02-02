import React from "react";
import { HvTable, TableColumn } from "@hv/uikit-react-core";

export default function OrdersTable({ data }) {
  const defaultSorted = [{ id: "episodeID", desc: false }];

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Episode ID",
      accessor: "episodeID",
      cellType: "numeric",
    },
    {
      headerText: "Title",
      accessor: "title",
      cellType: "alpha-numeric",
    },
    {
      headerText: "Director",
      accessor: "director",
      cellType: "alpha-numeric",
    },
    {
      headerText: "Producers",
      accessor: "producers",
      cellType: "alpha-numeric",
    },
    {
      headerText: "Release Date",
      accessor: "releaseDate",
      cellType: "alpha-numeric",
    },
  ];

  return (
    <HvTable
      data={data}
      columns={getColumns()}
      showPagination={false}
      resizable={false}
      defaultSorted={defaultSorted}
      showPageSize={false}
    />
  );
}
