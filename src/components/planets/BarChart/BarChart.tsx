import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HvBarchart } from "@hv/uikit-react-core";

const BarChart = ({ data, getBarData }) => {
  const { t } = useTranslation();

  useEffect(() => {
    getBarData();
  }, [getBarData]);

  return data.length ? (
    <HvBarchart
      title={t("components.planets.chart.title")}
      subtitle={t("components.planets.chart.subtitle")}
      data={data}
      xAxisTitle={t("components.planets.chart.xAxisTitle")}
      yAxisTitle={t("components.planets.chart.yAxisTitle")}
    />
  ) : null;
};

export default BarChart;
