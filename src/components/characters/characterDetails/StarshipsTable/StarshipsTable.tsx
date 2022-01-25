import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HvTable, TableColumn } from "@hitachivantara/uikit-react-core";

import { Starship } from "generated/graphql";
import expandContent from "./expandContent";

interface StarshipsTableProps {
  data: Starship[];
}

const defaultSorted = [{ id: "episodeID", desc: false }];

const StarshipsTable: React.FC<StarshipsTableProps> = ({ data }) => {
  const { t } = useTranslation("characterDetails");

  const labels = useMemo(
    () => ({
      name: t("accordion.starships.table.columns.name"),
      model: t("accordion.starships.table.columns.model"),
      class: t("accordion.starships.table.columns.class"),
      manufacturers: t("accordion.starships.table.columns.manufacturers"),
    }),
    [t]
  );

  const getColumns = useCallback(
    (): TableColumn[] => [
      {
        headerText: labels.name,
        accessor: "name",
        cellType: "alpha-numeric",
        minWidth: 200,
      },
      {
        headerText: labels.model,
        accessor: "model",
        cellType: "alpha-numeric",
        minWidth: 250,
      },
      {
        headerText: labels.class,
        accessor: "starshipClass",
        cellType: "alpha-numeric",
        minWidth: 100,
      },
      {
        headerText: labels.manufacturers,
        accessor: "manufacturers",
        cellType: "alpha-numeric",
        format: ({ value }) => value.join(", "),
        minWidth: 350,
      },
    ],
    [labels.class, labels.manufacturers, labels.model, labels.name]
  );

  return (
    <HvTable
      data={data}
      columns={getColumns()}
      showPagination={false}
      resizable={false}
      defaultSorted={defaultSorted}
      showPageSize={false}
      sortable={false}
      subElementTemplate={expandContent}
    />
  );
};

export default StarshipsTable;
