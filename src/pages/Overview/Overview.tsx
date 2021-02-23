import React from "react";
import { useHistory } from "react-router-dom";
import {
  HvGrid,
  HvCard,
  HvCardHeader,
  HvCardMedia,
  HvActionBar,
  HvActionsGeneric,
} from "@hv/uikit-react-core";
import { useTranslation } from "react-i18next";
import { ReactComponent as SWLogo } from "assets/star-wars-logo.svg";
import characters from "assets/characters.jpg";
import starships from "assets/starships.jpg";
import withLayout from "lib/hocs/withLayout";
import useStyles from "./styles";

const Overview: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <HvGrid container alignItems="center" justify="center">
        <HvGrid container item xs={12} justify="center">
          <SWLogo className={classes.logo} />
        </HvGrid>
        <HvGrid item xs={12} sm={5} md={5} lg={3}>
          <HvCard bgcolor="atmo1" className={classes.card}>
            <HvCardHeader title={t("pages.overview.charactersCard.title")} />
            <HvCardMedia image={characters} className={classes.img} />
            <HvActionBar>
              <HvActionsGeneric
                actions={[
                  {
                    id: "exploreCharacters",
                    label: t("pages.overview.charactersCard.button"),
                  },
                ]}
                actionsCallback={() => history.push(`/star-wars/characters`)}
              />
            </HvActionBar>
          </HvCard>
        </HvGrid>
        <HvGrid item xs={12} sm={5} md={5} lg={3}>
          <HvCard
            bgcolor="atmo1"
            className={classes.card}
            onClick={() => history.push(`/star-wars/starships`)}
          >
            <HvCardHeader title={t("pages.overview.starshipsCard.title")} />
            <HvCardMedia image={starships} className={classes.img} />
            <HvActionBar>
              <HvActionsGeneric
                actions={[
                  {
                    id: "exploreStarships",
                    label: t("pages.overview.starshipsCard.button"),
                  },
                ]}
                actionsCallback={() => history.push(`/star-wars/starships`)}
              />
            </HvActionBar>
          </HvCard>
        </HvGrid>
      </HvGrid>
    </>
  );
};

export default withLayout(Overview);
