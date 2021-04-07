import React from "react";
import { useParams } from "react-router-dom";
import {
  HvButton,
  HvGrid,
  HvTypography,
  HvGlobalActions,
} from "@hv/uikit-react-core";
import { User } from "@hv/uikit-react-icons";
import { useTranslation } from "react-i18next";
import withLayout from "lib/hocs/withLayout";
import {
  MovieCountKPI,
  StarshipCountKPI,
  VehicleCountKPI,
  StarshipsTable,
  VehiclesTable,
} from "components/characterDetails";
import { DetailsKPI, FilmsTable } from "components/common";
import { useCharacter } from "./data";
import useStyles from "./styles";

const CharacterDetails: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const { data } = useCharacter(id);
  const { t } = useTranslation();

  if (!data) return <></>;

  const { person } = data;

  return (
    <>
      <HvGlobalActions
        className={classes.globalActions}
        position="fixed"
        title={person.name}
      >
        <HvButton>{t("pages.characterDetails.globalActions.button")}</HvButton>
      </HvGlobalActions>
      <HvGrid container className={classes.root}>
        <HvGrid item xs={12}>
          <HvGrid container>
            <HvGrid item xs={12} md={3} lg={2}>
              <HvGrid item container justify="center">
                <User
                  color="acce1"
                  iconSize="M"
                  className={classes.icon}
                  height="48"
                  width="48"
                />
              </HvGrid>
            </HvGrid>
            <HvGrid item xs={12} md={9} lg={10}>
              <HvGrid container direction="row">
                <HvGrid item xs={12} sm={6} md={4} lg={2}>
                  <MovieCountKPI count={person.filmConnection.totalCount} />
                </HvGrid>
                <HvGrid item xs={12} sm={6} md={4} lg={2}>
                  <StarshipCountKPI
                    count={person.starshipConnection.totalCount}
                  />
                </HvGrid>
                <HvGrid item xs={12} sm={6} md={4} lg={2}>
                  <VehicleCountKPI
                    count={person.vehicleConnection.totalCount}
                  />
                </HvGrid>
                <HvGrid container item xs={12} />
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.birthYear")}
                    subtitle={person.birthYear}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.homeworld")}
                    subtitle={person.homeworld.name}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.eyeColor")}
                    subtitle={person.eyeColor}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.hairColor")}
                    subtitle={person.hairColor}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.skinColor")}
                    subtitle={person.skinColor}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.gender")}
                    subtitle={person.gender}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.species")}
                    subtitle={person.species?.name}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("pages.characterDetails.metadata.height")}
                    subtitle={person.height}
                  />
                </HvGrid>
              </HvGrid>
            </HvGrid>
          </HvGrid>
          <HvGrid container>
            <HvGrid item xs={12} />
          </HvGrid>
          <HvGrid container>
            <HvGrid item xs={12} className={classes.table}>
              <HvTypography variant="sectionTitle" className={classes.title}>
                {t("pages.characterDetails.films.title")}
              </HvTypography>
              <FilmsTable data={person.filmConnection.films} />
            </HvGrid>
            {person.starshipConnection.starships.length > 0 && (
              <HvGrid item xs={12} className={classes.table}>
                <HvTypography variant="sectionTitle" className={classes.title}>
                  {t("pages.characterDetails.starships.title")}
                </HvTypography>
                <StarshipsTable data={person.starshipConnection.starships} />
              </HvGrid>
            )}
            {person.vehicleConnection.vehicles.length > 0 && (
              <HvGrid item xs={12} className={classes.table}>
                <HvTypography variant="sectionTitle" className={classes.title}>
                  {t("pages.characterDetails.vehicles.title")}
                </HvTypography>
                <VehiclesTable data={person.vehicleConnection.vehicles} />
              </HvGrid>
            )}
          </HvGrid>
        </HvGrid>
      </HvGrid>
    </>
  );
};

export default withLayout(CharacterDetails);
