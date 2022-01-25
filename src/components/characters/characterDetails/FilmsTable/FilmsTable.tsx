import React, { useCallback } from "react";
import { HvTable, TableColumn } from "@hitachivantara/uikit-react-core";
import { useTranslation } from "react-i18next";

import { Film } from "generated/graphql";

interface FilmsTableProps {
  data: Film[];
}

const defaultSorted = [{ id: "releaseDate", desc: false }];

const FilmsTable: React.FC<FilmsTableProps> = ({ data }) => {
  const { t } = useTranslation("characterDetails");

  const getColumns = useCallback(
    (): TableColumn[] => [
      {
        headerText: t("accordion.films.table.columns.title"),
        accessor: "title",
        cellType: "alpha-numeric",
        minWidth: 200,
        sortable: false,
      },
      {
        headerText: t("accordion.films.table.columns.director"),
        accessor: "director",
        cellType: "alpha-numeric",
        minWidth: 200,
        sortable: false,
      },
      {
        headerText: t("accordion.films.table.columns.producers"),
        accessor: "producers",
        cellType: "alpha-numeric",
        format: ({ value }) => value.join(", "),
        minWidth: 350,
        sortable: false,
      },
      {
        headerText: t("accordion.films.table.columns.releaseDate"),
        accessor: "releaseDate",
        cellType: "alpha-numeric",
        minWidth: 150,
        sortable: true,
      },
    ],
    [t]
  );

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
};

export default FilmsTable;
