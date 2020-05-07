import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HvBarchart } from "@hv/uikit-react-core/dist";
import { fetchSalesData } from "lib/api/data";

const BarChart = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSalesData();
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data || !data.length) return null;

  return (
    <HvBarchart
      title={t("components.details.chart.title")}
      subtitle={t("components.details.chart.subtitle")}
      data={data}
      xAxisTitle={t("components.details.chart.xAxisTitle")}
      yAxisTitle={t("components.details.chart.yAxisTitle")}
    />
  );
};

BarChart.propTypes = {};

export default BarChart;
