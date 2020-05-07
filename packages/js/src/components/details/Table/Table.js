import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HvTable } from "@hv/uikit-react-core/dist";
import { fetchTableData } from "lib/api/data";
import { columns } from "./configuration";

const Table = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTableData();
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <HvTable
      data={data}
      columns={columns}
      title={t("components.details.table.title")}
    />
  );
};

Table.propTypes = {};

export default Table;
