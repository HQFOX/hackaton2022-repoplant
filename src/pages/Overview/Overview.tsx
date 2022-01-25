import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import {
  HvGrid,
  HvCard,
  HvCardHeader,
  HvCardMedia,
  HvActionBar,
  HvActionsGeneric,
} from "@hitachivantara/uikit-react-core";

import { Container } from "components/layout";
import { ReactComponent as SWLogo } from "assets/star-wars-logo.svg";
import characters from "assets/characters.jpg";
import starships from "assets/starships.jpg";

import useStyles from "./styles";

const Overview: React.FC = () => {
  const { t } = useTranslation("overview");
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container>
      <HvGrid container alignItems="center" justifyContent="center">
        <HvGrid container item xs={12} justifyContent="center">
          <SWLogo className={classes.logo} />
        </HvGrid>
        <HvGrid item xs={12} sm={5} md={5}>
          <HvCard bgcolor="atmo1" className={classes.card}>
            <HvCardHeader title={t("charactersCard.title")} />
            <HvCardMedia image={characters} className={classes.img} />
            <HvActionBar>
              <HvActionsGeneric
                actions={[
                  {
                    id: "exploreCharacters",
                    label: t("charactersCard.button"),
                  },
                ]}
                actionsCallback={() => history.push(`/star-wars/characters`)}
              />
            </HvActionBar>
          </HvCard>
        </HvGrid>
        <HvGrid item xs={12} sm={5} md={5}>
          <HvCard
            bgcolor="atmo1"
            className={classes.card}
            onClick={() => history.push(`/star-wars/starships`)}
          >
            <HvCardHeader title={t("starshipsCard.title")} />
            <HvCardMedia image={starships} className={classes.img} />
            <HvActionBar>
              <HvActionsGeneric
                actions={[
                  {
                    id: "exploreStarships",
                    label: t("starshipsCard.button"),
                  },
                ]}
                actionsCallback={() => history.push(`/star-wars/starships`)}
              />
            </HvActionBar>
          </HvCard>
        </HvGrid>
      </HvGrid>
    </Container>
  );
};

export default Overview;
