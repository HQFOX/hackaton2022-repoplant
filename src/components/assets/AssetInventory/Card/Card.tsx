import React from "react";
import { useTranslation } from "react-i18next";
import {
  HvGrid,
  HvKpi,
  HvTypography,
  HvActionBar,
  HvActionsGeneric,
  HvCard,
  HvCardHeader,
  HvCardContent,
  HvCheckBox,
} from "@hv/uikit-react-core";
import { getStatus } from "../utils";
import useStyles from "./styles";

const Card = ({ data, viewConfiguration }) => {
  const { t } = useTranslation();
  const { Icon, sema } = getStatus(data.status);
  const classes = useStyles();

  const labels = {
    probability: t("components.assets.assetInventory.cardView.probability"),
    timeHorizon: t("components.assets.assetInventory.cardView.timeHorizon"),
    relatedAssets: t("components.assets.assetInventory.cardView.relatedAssets"),
  };

  return (
    <HvCard
      bgcolor="atmo1"
      semantic={sema}
      icon={<Icon semantic={sema} />}
      selectable={viewConfiguration.isSelectable}
      selected={data.checked}
    >
      <HvCardHeader title={data.headerTitle} />
      <HvCardContent>
        <HvGrid container>
          <HvGrid item xs={4} sm={8} md={12} lg={12} xl={12}>
            <div className={classes.kpis}>
              <HvTypography className={classes.timestamp}>
                {data.event.timestamp}
              </HvTypography>
              <HvTypography>{data.event.schedule}</HvTypography>
            </div>
          </HvGrid>

          <HvGrid item xs={4} sm={8} md={12} lg={12} xl={12}>
            <div className={classes.kpis}>
              <HvKpi
                labels={{
                  title: labels.probability,
                  indicator: `${data.probability}%`,
                }}
              />
              <HvKpi
                labels={{
                  title: labels.timeHorizon,
                  indicator: `${data.timeHorizon}h`,
                }}
              />
            </div>
          </HvGrid>

          <HvGrid
            item
            xs={4}
            sm={8}
            md={12}
            lg={12}
            xl={12}
            className={classes.item}
          >
            <HvTypography variant="highlightText">
              {labels.relatedAssets}
            </HvTypography>
            <HvTypography noWrap>{data.relatedAssets}</HvTypography>
          </HvGrid>
        </HvGrid>
      </HvCardContent>
      <HvActionBar aria-label="Leaf">
        {viewConfiguration.isSelectable && (
          <HvCheckBox
            checked={data.checked}
            onChange={viewConfiguration.onSelection}
            value={data.id}
            inputProps={{ "aria-label": `Select ${data.id}` }}
          />
        )}
        <div style={{ flex: 1 }} />
        <HvActionsGeneric
          actions={viewConfiguration.actions}
          maxVisibleActions={viewConfiguration.maxVisibleActions}
          actionsCallback={viewConfiguration.actionsCallback}
        />
      </HvActionBar>
    </HvCard>
  );
};

export default (data, viewConfiguration) => (
  <Card data={data} viewConfiguration={viewConfiguration} />
);
