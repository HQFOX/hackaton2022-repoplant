import React from "react";
import {
  HvTypography,
  HvGrid,
  HvTable,
  TableColumn,
} from "@hv/uikit-react-core";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DetailsKPI } from "components/common";

const ExpandContent = ({ original }) => {
  const history = useHistory();
  const { id: characterID } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const labels = {
    maxAtmospheringSpeed: t(
      "components.characterDetails.starshipsTable.expand.maxAtmospheringSpeed"
    ),
    hyperdriveRating: t(
      "components.characterDetails.starshipsTable.expand.hyperdriveRating"
    ),
    cargoCapacity: t(
      "components.characterDetails.starshipsTable.expand.cargoCapacity"
    ),
    MGLT: t("components.characterDetails.starshipsTable.expand.MGLT"),
    consumables: t(
      "components.characterDetails.starshipsTable.expand.consumables"
    ),
    costInCredits: t(
      "components.characterDetails.starshipsTable.expand.costInCredits"
    ),

    crew: t("components.characterDetails.starshipsTable.expand.crew"),
    passengers: t(
      "components.characterDetails.starshipsTable.expand.passengers"
    ),
    length: t("components.characterDetails.starshipsTable.expand.length"),
    otherCharacters: t(
      "components.characterDetails.starshipsTable.expand.otherCharacters"
    ),
  };

  return (
    <HvGrid container>
      <HvGrid item>
        <DetailsKPI
          title={labels.maxAtmospheringSpeed}
          subtitle={original.maxAtmospheringSpeed}
        />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI
          title={labels.hyperdriveRating}
          subtitle={original.hyperdriveRating}
        />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI
          title={labels.cargoCapacity}
          subtitle={original.cargoCapacity}
        />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.MGLT} subtitle={original.MGLT} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI
          title={labels.consumables}
          subtitle={original.consumables}
        />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI
          title={labels.costInCredits}
          subtitle={original.costInCredits}
        />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.crew} subtitle={original.crew} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.passengers} subtitle={original.passengers} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI title={labels.length} subtitle={original.length} />
      </HvGrid>
      <HvGrid item>
        <DetailsKPI
          title={labels.otherCharacters}
          subtitle={
            <p>
              {original.pilotConnection?.pilots.map(
                ({ id, name }, i) =>
                  id !== characterID && (
                    <>
                      <HvTypography
                        variant="link"
                        component="a"
                        onClick={() =>
                          history.push(`/star-wars/characters/${id}`)
                        }
                      >
                        {name}
                      </HvTypography>
                      {i < original.pilotConnection?.pilots.length - 1
                        ? `,${" "}`
                        : ""}
                    </>
                  )
              )}
            </p>
          }
        />
      </HvGrid>
    </HvGrid>
  );
};

export default function StarshipsTable({ data }) {
  const defaultSorted = [{ id: "episodeID", desc: false }];
  const { t } = useTranslation();

  const labels = {
    name: t("components.characterDetails.vehiclesTable.columns.name"),
    model: t("components.characterDetails.vehiclesTable.columns.model"),
    class: t("components.characterDetails.vehiclesTable.columns.class"),
    manufacturers: t(
      "components.characterDetails.vehiclesTable.columns.manufacturers"
    ),
  };

  const getColumns = (): TableColumn[] => [
    {
      headerText: labels.name,
      accessor: "name",
      cellType: "alpha-numeric",
      minWidth: 200,
    },
    {
      headerText: labels.model,
      accessor: "model",
      cellType: "alpha-numeric",
      minWidth: 250,
    },
    {
      headerText: labels.class,
      accessor: "starshipClass",
      cellType: "alpha-numeric",
      minWidth: 100,
    },
    {
      headerText: labels.manufacturers,
      accessor: "manufacturers",
      cellType: "alpha-numeric",
      format: ({ value }) => value.join(", "),
      minWidth: 350,
    },
  ];

  return (
    <HvTable
      data={data}
      columns={getColumns()}
      showPagination={false}
      resizable={false}
      defaultSorted={defaultSorted}
      showPageSize={false}
      sortable={false}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      subElementTemplate={({ original }) => (
        <ExpandContent original={original} />
      )}
    />
  );
}
