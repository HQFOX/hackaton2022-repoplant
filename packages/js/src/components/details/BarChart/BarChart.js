import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HvBarchart } from "@hv/uikit-react-core";

const BarChart = ({ data, getBarData }) => {
  const { t } = useTranslation();

  useEffect(() => {
    getBarData();
  }, [getBarData]);

  if (!data?.length) return null;

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

BarChart.propTypes = {
  data: PropTypes.arrayOf(Object),
  getBarData: PropTypes.func
};

export default BarChart;
