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
      title={t("components.details.chart.title")}
      subtitle={t("components.details.chart.subtitle")}
      data={data}
      xAxisTitle={t("components.details.chart.xAxisTitle")}
      yAxisTitle={t("components.details.chart.yAxisTitle")}
    />
  ) : null;
};

export default LineChart;
