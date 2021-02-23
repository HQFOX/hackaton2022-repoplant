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
    homeworld: t("components.characters.assetInventory.cardView.homeworld"),
    films: t("components.characters.assetInventory.cardView.films"),
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
      className={classes.card}
      onClick={() => history.push(`/star-wars/characters/${data.id}`)}
    >
      <HvCardHeader title={data.name} />
      <HvCardContent>
        <HvGrid container>
          <HvGrid item xs={12} sm={12} md={12}>
            <div className={classes.kpis}>
              <HvTypography className={classes.timestamp}>
                {data.birthYear === "unknown" ? "N/A" : data.birthYear}
              </HvTypography>
              <HvTypography>{data.species?.name || "N/A"}</HvTypography>
            </div>
          </HvGrid>

          <HvGrid item xs={5} sm={6} md={12}>
            <HvTypography variant="highlightText">
              {labels.homeworld}
            </HvTypography>
            <HvTypography noWrap>{data.homeworld.name}</HvTypography>
          </HvGrid>

          <HvGrid item xs={7} sm={6} md={12} className={classes.item}>
            <HvTypography variant="highlightText">{labels.films}</HvTypography>
            <HvTypography noWrap>{movies}</HvTypography>
          </HvGrid>
        </HvGrid>
      </HvCardContent>
    </HvCard>
  );
};

export default (data) => <Card data={data} />;
