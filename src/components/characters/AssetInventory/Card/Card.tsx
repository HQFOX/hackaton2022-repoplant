import React from "react";
import { useTranslation } from "react-i18next";
import {
  HvGrid,
  HvTypography,
  HvCard,
  HvCardHeader,
  HvCardContent,
} from "@hv/uikit-react-core";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

const Card = ({ data }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  const labels = {
    probability: t("components.characters.assetInventory.cardView.probability"),
    timeHorizon: t("components.characters.assetInventory.cardView.timeHorizon"),
    relatedAssets: t(
      "components.characters.assetInventory.cardView.relatedAssets"
    ),
  };

  let movies = "";
  data.filmConnection.edges.forEach(({ node: { title } }, index) => {
    movies = `${movies}${index > 0 ? ", " : ""}${title}`;
  });

  return (
    <HvCard
      key={data.id}
      bgcolor="atmo1"
      selectable={false}
      className={classes.charecter}
      onClick={() => history.push(`/star-wars/characters/${data.id}`)}
    >
      <HvCardHeader title={data.name} />
      <HvCardContent>
        <HvGrid container>
          <HvGrid item xs={4} sm={8} md={12}>
            <div className={classes.kpis}>
              <HvTypography className={classes.timestamp}>
                {data.birthYear === "unknown" ? "N/A" : data.birthYear}
              </HvTypography>
              <HvTypography>{data.species?.name || "N/A"}</HvTypography>
            </div>
          </HvGrid>

          <HvGrid item xs={4} sm={8} md={12}>
            <HvTypography variant="highlightText">Homeworld</HvTypography>
            <HvTypography noWrap>{data.homeworld.name}</HvTypography>
          </HvGrid>

          <HvGrid item xs={4} sm={8} md={12} className={classes.item}>
            <HvTypography variant="highlightText">
              {labels.relatedAssets}
            </HvTypography>
            <HvTypography noWrap>{movies}</HvTypography>
          </HvGrid>
        </HvGrid>
      </HvCardContent>
    </HvCard>
  );
};

export default (data) => <Card data={data} />;
