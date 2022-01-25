import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HvTypography, HvGrid } from "@hitachivantara/uikit-react-core";

import { Vehicle } from "generated/graphql";
import { DetailsKPI } from "components/common";

const expandContent = (data: object) => {
  const vehicle: Vehicle = (data as Record<string, unknown>)
    .original as Vehicle;

  const Content: React.FC = () => {
    const history = useHistory();
    const { id: characterID } = useParams<{ id: string }>();
    const { t } = useTranslation("characterDetails");

    const labels = {
      cargoCapacity: t("accordion.vehicles.table.expand.cargoCapacity"),
      consumables: t("accordion.vehicles.table.expand.consumables"),
      costInCredits: t("accordion.vehicles.table.expand.costInCredits"),
      maxAtmospheringSpeed: t(
        "accordion.vehicles.table.expand.maxAtmospheringSpeed"
      ),
      crew: t("accordion.vehicles.table.expand.crew"),
      passengers: t("accordion.vehicles.table.expand.passengers"),
      length: t("accordion.vehicles.table.expand.length"),
      otherCharacters: t("accordion.vehicles.table.expand.otherCharacters"),
    };

    return (
      <HvGrid container>
        <HvGrid item>
          <DetailsKPI
            title={labels.cargoCapacity}
            subtitle={vehicle.cargoCapacity}
          />
        </HvGrid>
        <HvGrid item>
          <DetailsKPI
            title={labels.consumables}
            subtitle={vehicle.consumables}
          />
        </HvGrid>
        <HvGrid item>
          <DetailsKPI
            title={labels.costInCredits}
            subtitle={vehicle.costInCredits}
          />
        </HvGrid>
        <HvGrid item>
          <DetailsKPI
            title={labels.maxAtmospheringSpeed}
            subtitle={vehicle.maxAtmospheringSpeed}
          />
        </HvGrid>
        <HvGrid item>
          <DetailsKPI title={labels.crew} subtitle={vehicle.crew} />
        </HvGrid>
        <HvGrid item>
          <DetailsKPI title={labels.passengers} subtitle={vehicle.passengers} />
        </HvGrid>
        <HvGrid item>
          <DetailsKPI title={labels.length} subtitle={vehicle.length} />
        </HvGrid>
        <HvGrid item>
          <DetailsKPI
            title={labels.otherCharacters}
            subtitle={vehicle?.pilotConnection?.pilots?.map(
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
                    {vehicle?.pilotConnection?.pilots?.length ? `${" "}` : ""}
                  </span>
                )
            )}
          />
        </HvGrid>
      </HvGrid>
    );
  };
  return <Content />;
};

export default expandContent;
