import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { HvButton } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { CharacterDetailsProps } from ".";
import { useCharacter } from "./data";

const CharacterDetails: React.FC<CharacterDetailsProps> = () => {
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const { data } = useCharacter(id);
  return (
    <>
      <HvButton onClick={() => goBack()}>Back</HvButton>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default withLayout(CharacterDetails);
