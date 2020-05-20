import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HvTable } from "@hv/uikit-react-core";
import { fetchTableData } from "lib/api/data";
import { columns } from "./configuration";

const Table: React.FC = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTableData();
      // @ts-ignore
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <HvTable
      data={data}
      // @ts-ignore
      columns={columns}
      title={t("components.details.table.title")}
    />
  );
};

export default Table;
