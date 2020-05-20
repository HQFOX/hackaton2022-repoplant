import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HvLinechart } from "@hv/uikit-react-core";
import { fetchTimeSeriesData } from "lib/api/data";

const LineChart = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTimeSeriesData();
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data || !data.length) return null;

  return (
    <HvLinechart
      title={t("components.details.chart.title")}
      subtitle={t("components.details.chart.subtitle")}
      data={data}
      xAxisTitle={t("components.details.chart.xAxisTitle")}
      yAxisTitle={t("components.details.chart.yAxisTitle")}
    />
  );
};

LineChart.propTypes = {};

export default LineChart;
