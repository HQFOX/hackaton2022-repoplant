import React from "react";

import CharactersList from "components/characters/CharactersList";
import { Container } from "components/layout";

const Characters: React.FC = () => {
  return (
    <Container>
      <CharactersList />
    </Container>
  );
};

export default Characters;
