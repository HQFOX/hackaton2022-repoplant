import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HvGrid,
  HvTypography,
  HvCard,
  HvCardHeader,
} from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { useSpaceships } from "./index";
import useStyles from "./styles";

const Overview: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { data } = useSpaceships();
  const classes = useStyles();

  return (
    <>
      <HvGrid
        container
        alignItems="center"
        justify="center"
        style={{ height: "100%" }}
      >
        <HvGrid item xs={8} sm={4}>
          <HvCard
            bgcolor="atmo1"
            className={classes.card}
            onClick={() => history.push(`/star-wars/characters`)}
          >
            <HvCardHeader
              title="Characters"
              subheader="All star wars characters"
            />
          </HvCard>
        </HvGrid>
        <HvGrid item xs={8} sm={4}>
          <HvCard
            bgcolor="atmo1"
            className={classes.card}
            onClick={() => history.push(`/star-wars/starships`)}
          >
            <HvCardHeader
              title="Starships"
              subheader="All star wars starships"
            />
          </HvCard>
        </HvGrid>
      </HvGrid>
    </>
  );
};

export default withLayout(Overview);
