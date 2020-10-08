import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { HvTable } from "@hv/uikit-react-core";
import { columns } from "./configuration";

const Table = ({ data, getTableData }) => {
  const { t } = useTranslation();

  useEffect(() => {
    getTableData();
  }, [getTableData]);

  if (!data || !data.length) { return null; }

  return (
    <HvTable
      data={data}
      columns={columns}
      defaultPageSize={10}
      title={t("components.details.table.title")}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array,
  getTableData: PropTypes.func
};

export default Table;
