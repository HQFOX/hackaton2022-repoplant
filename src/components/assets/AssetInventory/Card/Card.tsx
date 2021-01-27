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
} from "@hv/uikit-react-core";
import useStyles from "./styles";

const Card = ({ data, viewConfiguration }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const labels = {
    probability: t("components.assets.assetInventory.cardView.probability"),
    timeHorizon: t("components.assets.assetInventory.cardView.timeHorizon"),
    relatedAssets: t("components.assets.assetInventory.cardView.relatedAssets"),
  };

  return (
    <HvCard key={data.id} bgcolor="atmo1">
      <HvCardHeader title={data.name} />
      <HvCardContent>
        <HvGrid container>
          <HvGrid item xs={4} sm={8} md={12} lg={12} xl={12}>
            <div className={classes.kpis}>
              <HvTypography className={classes.timestamp}>
                {data.birthYear}
              </HvTypography>
              <HvTypography>{data.species?.name || ""}</HvTypography>
            </div>
          </HvGrid>

          <HvGrid item xs={4} sm={8} md={12} lg={12} xl={12}>
            <div className={classes.kpis}>
              <HvKpi
                labels={{
                  title: "Homeworld",
                  indicator: data.homeworld.name,
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
            <HvTypography noWrap>
              {data.filmConnection.edges.map(({ node }) => ` ${node.title}`)}
            </HvTypography>
          </HvGrid>
        </HvGrid>
      </HvCardContent>
      <HvActionBar aria-label="Leaf">
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
