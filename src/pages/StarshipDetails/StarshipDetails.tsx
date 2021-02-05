import React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@material-ui/core";
import {
  HvTypography,
  HvCard,
  HvCardHeader,
  HvButton,
  HvGrid,
} from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import useLayoutMargins from "lib/hooks/useLayoutMargins";
import GlobalActions from "components/starshipDetails/GlobalActions";
import FilmsTable from "components/starshipDetails/FilmsTable";
import { useStarships } from "lib/api/swapi";

const Card = ({ title, label }) => (
  <HvCard bgcolor="atmo1">
    <HvCardHeader title={title} subheader={label} />
  </HvCard>
);

const StarshipDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useStarships(id);
  const { top } = useLayoutMargins();

  if (!data) return null;

  return (
    <>
      <GlobalActions name={data.name}>
        <HvButton>Explore Starships</HvButton>
      </GlobalActions>
      <HvGrid container style={{ paddingTop: top - 40 }}>
        <HvGrid item xs={12} sm={4}>
          <HvGrid
            container
            direction="column"
            justify="space-between"
            alignContent="flex-end"
          ></HvGrid>
        </HvGrid>
        <HvGrid item xs={12} sm={8}>
          <HvGrid
            container
            direction="row"
            justify="space-between"
            alignContent="flex-start"
          >
            <HvGrid item xs={6} sm={4}>
              <Card title="Model" label={data.name} />
            </HvGrid>
            <HvGrid item xs={6} sm={4}>
              <Card title="Class" label={data.starship_class} />
            </HvGrid>
            <HvGrid item xs={6} sm={4}>
              <Card title="Passengeners" label={data.passengers} />
            </HvGrid>
            <HvGrid item xs={6} sm={4}>
              <Card title="Cargo Capacity" label={data.cargo_capacity} />
            </HvGrid>
            <HvGrid item xs={6} sm={4}>
              <Card title="Crew" label={data.crew} />
            </HvGrid>
            <HvGrid item xs={6} sm={4}>
              <Card title="Hyperdrive Rating" label={data.hyperdrive_rating} />
            </HvGrid>
          </HvGrid>
        </HvGrid>
        <HvGrid item xs={12}>
          <HvGrid container direction="row">
            <HvGrid item xs={12}>
              <HvTypography variant="mTitle">Films</HvTypography>
              <FilmsTable films={data.films} />
            </HvGrid>
          </HvGrid>
        </HvGrid>
      </HvGrid>
    </>
  );
};

export default withLayout(StarshipDetails);
