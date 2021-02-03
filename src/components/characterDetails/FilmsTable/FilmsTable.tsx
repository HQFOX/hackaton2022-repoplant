import React from "react";
import { HvTable, TableColumn } from "@hv/uikit-react-core";

export default function FilmsTable({ data }) {
  const defaultSorted = [{ id: "episodeID", desc: false }];

  const getColumns = (): TableColumn[] => [
    {
      headerText: "Title",
      accessor: "title",
      cellType: "alpha-numeric",
      minWidth: 200,
    },
    {
      headerText: "Director",
      accessor: "director",
      cellType: "alpha-numeric",
      minWidth: 200,
    },
    {
      headerText: "Producers",
      accessor: "producers",
      cellType: "alpha-numeric",
      format: ({ value }) => value.join(", "),
      minWidth: 350,
    },
    {
      headerText: "Release Date",
      accessor: "releaseDate",
      cellType: "alpha-numeric",
      minWidth: 150,
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
      sortable={false}
    />
  );
}
