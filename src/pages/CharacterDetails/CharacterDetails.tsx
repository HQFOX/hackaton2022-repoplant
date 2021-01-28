import React from "react";
import { useParams } from "react-router-dom";
import { HvButton, HvGrid, HvTypography } from "@hv/uikit-react-core";
import withLayout, { useLayoutMargins } from "lib/hocs/withLayout";
import GlobalActions from "components/characterDetails/GlobalActions";
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
        <HvGrid item>
          <HvTypography>{JSON.stringify(person)}</HvTypography>
        </HvGrid>
      </HvGrid>
    </>
  );
};

export default withLayout(CharacterDetails);
