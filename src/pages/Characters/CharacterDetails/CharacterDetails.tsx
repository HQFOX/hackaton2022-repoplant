import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Backwards, User } from "@hitachivantara/uikit-react-icons";
import {
  HvButton,
  HvGrid,
  HvGlobalActions,
  HvAccordion,
} from "@hitachivantara/uikit-react-core";

import {
  useGetCharacterQuery,
  Person,
  Film,
  Starship,
  Vehicle,
} from "generated/graphql";
import {
  MovieCountKPI,
  StarshipCountKPI,
  VehicleCountKPI,
  StarshipsTable,
  VehiclesTable,
} from "components/characters/characterDetails";
import { DetailsKPI, FilmsTable } from "components/common";
import { Container } from "components/layout";
import { isTopLevelPage } from "lib/utils/navigation";
import useStyles from "./styles";

const CharacterDetails: React.FC = () => {
  const { t } = useTranslation("characterDetails");
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCharacterQuery({
    variables: { id: id as never },
  });
  const { goBack } = useHistory();
  const hasSecondLevel = !isTopLevelPage(pathname);

  const person: Person | undefined = data?.person as Person;

  const classes = useStyles();

  return data ? (
    <Container>
      <HvGlobalActions
        className={clsx(classes.globalActions, {
          [classes.hasSecondLevel]: hasSecondLevel,
        })}
        position="fixed"
        title={person?.name}
        backButton={
          <HvButton aria-label="Back" icon onClick={goBack}>
            <Backwards />
          </HvButton>
        }
      >
        <HvButton>{t("globalActions.button")}</HvButton>
      </HvGlobalActions>
      <HvGrid container className={classes.root}>
        <HvGrid item xs={12}>
          <HvGrid container>
            <HvGrid item xs={12} md={3} lg={2}>
              <HvGrid item container justifyContent="center">
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
                  <MovieCountKPI
                    count={person?.filmConnection?.totalCount || 0}
                  />
                </HvGrid>
                <HvGrid item xs={12} sm={6} md={4} lg={2}>
                  <StarshipCountKPI
                    count={person?.starshipConnection?.totalCount || 0}
                  />
                </HvGrid>
                <HvGrid item xs={12} sm={6} md={4} lg={2}>
                  <VehicleCountKPI
                    count={person?.vehicleConnection?.totalCount || 0}
                  />
                </HvGrid>
                <HvGrid container item xs={12} />
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.birthYear")}
                    subtitle={person?.birthYear}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.homeworld")}
                    subtitle={person?.homeworld?.name}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.eyeColor")}
                    subtitle={person?.eyeColor}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.hairColor")}
                    subtitle={person?.hairColor}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.skinColor")}
                    subtitle={person?.skinColor}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.gender")}
                    subtitle={person?.gender}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.species")}
                    subtitle={person?.species?.name}
                  />
                </HvGrid>
                <HvGrid item xs={6} md={4} lg={2}>
                  <DetailsKPI
                    title={t("details.height")}
                    subtitle={person?.height}
                  />
                </HvGrid>
              </HvGrid>
            </HvGrid>
          </HvGrid>
          <HvGrid container>
            <HvGrid item xs={12} />
          </HvGrid>
          <HvGrid container>
            <HvGrid item xs={12}>
              <HvAccordion
                label={t("accordion.films.title")}
                defaultExpanded
                headingLevel={2}
              >
                <FilmsTable data={person?.filmConnection?.films as Film[]} />
              </HvAccordion>
            </HvGrid>
            {!!person?.starshipConnection?.starships?.length && (
              <HvGrid item xs={12}>
                <HvAccordion
                  label={t("accordion.starships.title")}
                  defaultExpanded
                  headingLevel={2}
                >
                  <StarshipsTable
                    data={person?.starshipConnection.starships as Starship[]}
                  />
                </HvAccordion>
              </HvGrid>
            )}
            {!!person?.vehicleConnection?.vehicles?.length && (
              <HvGrid item xs={12}>
                <HvAccordion
                  label={t("accordion.vehicles.title")}
                  defaultExpanded
                  headingLevel={2}
                >
                  <VehiclesTable
                    data={person?.vehicleConnection?.vehicles as Vehicle[]}
                  />
                </HvAccordion>
              </HvGrid>
            )}
          </HvGrid>
        </HvGrid>
      </HvGrid>
    </Container>
  ) : null;
};

export default CharacterDetails;
