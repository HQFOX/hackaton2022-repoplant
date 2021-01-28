import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HvLinechart } from "@hv/uikit-react-core";

const LineChart = ({ data, getLineData }) => {
  const { t } = useTranslation();

  useEffect(() => {
    getLineData();
  }, [getLineData]);

  return data.length ? (
    <HvLinechart
      title={t("components.planets.chart.title")}
      subtitle={t("components.planets.chart.subtitle")}
      data={data}
      xAxisTitle={t("components.planets.chart.xAxisTitle")}
      yAxisTitle={t("components.planets.chart.yAxisTitle")}
    />
  ) : null;
};

export default LineChart;
