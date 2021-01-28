import React from "react";
import { useTranslation } from "react-i18next";
import { HvTable } from "@hv/uikit-react-core";
import { columns } from "./configuration";

const Table = () => {
  const { t } = useTranslation();
  const data = [];

  return (
    <HvTable
      data={data}
      columns={columns}
      defaultPageSize={10}
      title={t("components.planets.table.title")}
    />
  );
};

export default Table;
