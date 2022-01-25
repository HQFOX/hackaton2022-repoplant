import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HvTypography, HvGrid } from "@hitachivantara/uikit-react-core";

import { Starship } from "generated/graphql";
import { DetailsKPI } from "components/common";

const Content: React.FC<Starship> = ({
  maxAtmospheringSpeed,
  hyperdriveRating,
  cargoCapacity,
  MGLT,
  consumables,
  costInCredits,
  crew,
  passengers,
  length,
  pilotConnection,
}) => {
  const history = useHistory();
  const { t } = useTranslation("characterDetails");
  const { id: characterID } = useParams<{ id: string }>();

  const labels = {
    maxAtmospheringSpeed: t(
      "accordion.starships.table.expand.maxAtmospheringSpeed"
    ),
    hyperdriveRating: t("accordion.starships.table.expand.hyperdriveRating"),
    cargoCapacity: t("accordion.starships.table.expand.cargoCapacity"),
    MGLT: t("accordion.starships.table.expand.MGLT"),
    consumables: t("accordion.starships.table.expand.consumables"),
    costInCredits: t("accordion.starships.table.expand.costInCredits"),
    crew: t("accordion.starships.table.expand.crew"),
    passengers: t("accordion.starships.table.expand.passengers"),
    length: t("accordion.starships.table.expand.length"),
    otherCharacters: t("accordion.starships.table.expand.otherCharacters"),
  };

  return (
    <HvGrid container>
      <HvGrid item>
        <DetailsKPI
          title={labels.maxAtmospheringSpeed}
          subtitle={maxAtmospheringSpeed}
        />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI
          title={labels.hyperdriveRating}
          subtitle={hyperdriveRating}
        />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.cargoCapacity} subtitle={cargoCapacity} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.MGLT} subtitle={MGLT} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.consumables} subtitle={consumables} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.costInCredits} subtitle={costInCredits} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.crew} subtitle={crew} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.passengers} subtitle={passengers} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.length} subtitle={length} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI
          title={labels.otherCharacters}
          subtitle={pilotConnection?.pilots?.map(
            (pilot) =>
              pilot?.id !== characterID && (
                <span key={pilot?.id}>
                  <HvTypography
                    variant="link"
                    component="a"
                    onClick={() =>
                      history.push(`/star-wars/characters/${pilot?.id}`)
                    }
                  >
                    {pilot?.name}
                  </HvTypography>
                  {pilotConnection?.pilots?.length ? `${" "}` : ""}
                </span>
              )
          )}
        />
      </HvGrid>
    </HvGrid>
  );
};

const expandContent = (data: object) => {
  const startship: Starship = (data as Record<string, unknown>)
    .original as Starship;

  return <Content {...startship} />;
};

export default expandContent;
