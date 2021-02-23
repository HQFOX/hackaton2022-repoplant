import React from "react";
import withLayout from "lib/hocs/withLayout";
import { AssetInventory } from "components/characters";
import { CharactersStyles } from ".";

const Characters: React.FC<CharactersStyles> = () => {
  return <AssetInventory />;
};

export default withLayout(Characters);
