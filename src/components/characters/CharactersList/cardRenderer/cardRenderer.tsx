import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Person } from "generated/graphql";

import {
  HvGrid,
  HvTypography,
  HvCard,
  HvCardHeader,
  HvCardContent,
} from "@hitachivantara/uikit-react-core";

import useStyles from "./styles";

const Card: React.FC<Person> = ({
  id,
  name,
  birthYear,
  species,
  homeworld,
  filmConnection,
}) => {
  const { t } = useTranslation("characters");
  const history = useHistory();
  const classes = useStyles();

  const labels = {
    homeworld: t("list.cardView.homeworld"),
    films: t("list.cardView.films"),
  };

  let movies = "";
  filmConnection?.edges?.forEach((edge, index) => {
    movies = `${movies}${index > 0 ? ", " : ""}${edge?.node?.title}`;
  });

  return (
    <HvCard
      key={id}
      bgcolor="atmo1"
      selectable={false}
      className={classes.card}
      onClick={() => history.push(`/star-wars/characters/${id}`)}
    >
      <HvCardHeader title={name || ""} />
      <HvCardContent>
        <HvGrid container>
          <HvGrid item xs={12} sm={12} md={12}>
            <div className={classes.kpis}>
              <HvTypography className={classes.timestamp}>
                {birthYear === "unknown" ? "N/A" : birthYear}
              </HvTypography>
              <HvTypography>{species?.name || "N/A"}</HvTypography>
            </div>
          </HvGrid>

          <HvGrid item xs={5} sm={6} md={12}>
            <HvTypography variant="highlightText">
              {labels.homeworld}
            </HvTypography>
            <HvTypography noWrap>{homeworld?.name}</HvTypography>
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

const cardRenderer = (data: object) => {
  const person: Person = data as Record<string, unknown> as Person;

  return <Card {...person} />;
};

export default cardRenderer;
