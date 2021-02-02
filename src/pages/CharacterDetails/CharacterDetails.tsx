import React from "react";
import { useParams } from "react-router-dom";
import { HvButton, HvGrid, HvTypography } from "@hv/uikit-react-core";
import withLayout, { useLayoutMargins } from "lib/hocs/withLayout";
import GlobalActions from "components/characterDetails/GlobalActions";
import MovieCountKPI from "components/characterDetails/MovieCountKPI";
import StarshipCountKPI from "components/characterDetails/StarshipCountKPI";
import VehicleCountKPI from "components/characterDetails/VehicleCountKPI";
import FilmsTable from "components/characterDetails/FilmsTable";

import { CharacterDetailsProps } from ".";
import { useCharacter } from "./data";

const CharacterDetails: React.FC<CharacterDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useCharacter(id);
  const margin = useLayoutMargins();

  if (!data) return <></>;

  const { person } = data;

  return (
    <>
      <GlobalActions name={person.name}>
        <HvButton>Explore Movies</HvButton>
      </GlobalActions>
      <HvGrid container style={{ paddingTop: margin - 40 }}>
        <HvGrid item xs={12}>
          <HvGrid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <HvGrid item xs={4}>
              <MovieCountKPI count={person.filmConnection.totalCount} />
            </HvGrid>
            <HvGrid item xs={4}>
              <StarshipCountKPI count={person.starshipConnection.totalCount} />
            </HvGrid>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <HvGrid item xs={4}>
              <VehicleCountKPI count={person.vehicleConnection.totalCount} />
            </HvGrid>
            <HvGrid item xs={1}>
              <HvTypography variant="highlightText">Birth Year</HvTypography>
              <HvTypography>{person.birthYear}</HvTypography>
            </HvGrid>
            <HvGrid item xs={1}>
              <HvTypography variant="highlightText">Eye Color</HvTypography>
              <HvTypography>{person.eyeColor}</HvTypography>
            </HvGrid>
            <HvGrid item xs={1}>
              <HvTypography variant="highlightText">Gender</HvTypography>
              <HvTypography>{person.gender}</HvTypography>
            </HvGrid>
            <HvGrid item xs={1}>
              <HvTypography variant="highlightText">Hair Color</HvTypography>
              <HvTypography>{person.hairColor}</HvTypography>
            </HvGrid>{" "}
            <HvGrid item xs={1}>
              <HvTypography variant="highlightText">Height</HvTypography>
              <HvTypography>{person.height}</HvTypography>
            </HvGrid>
            <HvGrid item xs={1}>
              <HvTypography variant="highlightText">Mass</HvTypography>
              <HvTypography>{person.mass}</HvTypography>
            </HvGrid>
            <HvGrid item xs={1}>
              <HvTypography variant="highlightText">Skin Color</HvTypography>
              <HvTypography>{person.skinColor}</HvTypography>
            </HvGrid>
            <HvGrid item xs={12}>
              <HvTypography variant="xlTitle">Films</HvTypography>
              <FilmsTable data={person.filmConnection.films} />
            </HvGrid>
          </HvGrid>
        </HvGrid>
      </HvGrid>
    </>
  );
};

export default withLayout(CharacterDetails);
