import React from "react";
import { HvTable, TableColumn } from "@hv/uikit-react-core";
import { useTranslation } from "react-i18next";

export default function FilmsTable({ data }) {
  const { t } = useTranslation();
  const defaultSorted = [{ id: "releaseDate", desc: false }];

  const getColumns = (): TableColumn[] => [
    {
      headerText: t("components.starships.filmsTable.title"),
      accessor: "title",
      cellType: "alpha-numeric",
      minWidth: 200,
      sortable: false,
    },
    {
      headerText: t("components.starships.filmsTable.director"),
      accessor: "director",
      cellType: "alpha-numeric",
      minWidth: 200,
      sortable: false,
    },
    {
      headerText: t("components.starships.filmsTable.producers"),
      accessor: "producers",
      cellType: "alpha-numeric",
      format: ({ value }) => value.join(", "),
      minWidth: 350,
      sortable: false,
    },
    {
      headerText: t("components.starships.filmsTable.releaseDate"),
      accessor: "releaseDate",
      cellType: "alpha-numeric",
      minWidth: 150,
      sortable: true,
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
