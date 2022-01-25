import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HvTable, TableColumn } from "@hitachivantara/uikit-react-core";

import { Vehicle } from "generated/graphql";
import expandContent from "./expandContent";

interface VehiclesTableProps {
  data: Vehicle[];
}

const defaultSorted = [{ id: "episodeID", desc: false }];

const VehiclesTable: React.FC<VehiclesTableProps> = ({ data }) => {
  const { t } = useTranslation("characterDetails");

  const labels = useMemo(
    () => ({
      name: t("accordion.vehicles.table.columns.name"),
      model: t("accordion.vehicles.table.columns.model"),
      class: t("accordion.vehicles.table.columns.class"),
      manufacturers: t("accordion.vehicles.table.columns.manufacturers"),
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
        accessor: "vehicleClass",
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

export default VehiclesTable;
