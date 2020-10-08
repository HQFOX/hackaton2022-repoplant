import React from "react";
import { useTranslation } from "react-i18next";
import { HvGrid, HvKpi, HvTypography } from "@hv/uikit-react-core";

const CardContent = ({ classes, values }) => {
  const { t } = useTranslation();

  return (
    <HvGrid container>
      <HvGrid item xs={12}>
        <div className={classes.kpis}>
          <HvTypography className={classes.timestamp} variant="normalText">
            {values.event.timestamp}
          </HvTypography>
          <HvTypography variant="normalText">{values.event.schedule}</HvTypography>
        </div>
      </HvGrid>

      <HvGrid item xs={12}>
        <div className={classes.kpis}>
          <HvKpi
            labels={{
              title: t("components.home.cardView.probability"),
              indicator: values.probability
            }}
          />
          <HvKpi
            labels={{
              title: t("components.home.cardView.timeHorizon"),
              indicator: values.timeHorizon
            }}
          />
        </div>
      </HvGrid>

      <HvGrid item xs={12} className={classes.item}>
        <HvTypography variant="highlightText">
          {t("components.home.cardView.relatedAssets")}
        </HvTypography>
        <HvTypography variant="normalText" className={classes.text}>
          {values.relatedAssets}
        </HvTypography>
      </HvGrid>
    </HvGrid>
  );
};

CardContent.propTypes = {};

export default CardContent;
