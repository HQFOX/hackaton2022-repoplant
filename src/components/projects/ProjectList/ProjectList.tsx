import {
  HvAssetInventory,
  HvCardView,
  HvEmptyState,
} from "@hitachivantara/uikit-react-core";
import { Fail } from "@hitachivantara/uikit-react-icons";
import { configuration } from "components/characters/CharactersList/utils";
import React from "react";
import cardRenderer from "./cardRenderer";
import { actions } from "./utils";

// Asset Inventory configuration
const assetConfiguration = {
  metadata: [
    {
      id: "id1",
      accessor: "headerTitle",
      cellType: "alpha-numeric",
      searchable: true,
      sortable: true,
      sortableLabelAsc: "Title ascending",
      sortableLabelDesc: "Title descending",
    },
    {
      id: "id2",
      accessor: "semantic",
      cellType: "alpha-numeric",
    },
    {
      id: "id3",
      accessor: "probability",
      cellType: "numeric",
      searchable: true,
      sortable: true,
      sortableLabelAsc: "Probability ascending",
      sortableLabelDesc: "Probability descending",
    },
    {
      id: "id4",
      accessor: "timeHorizon",
      cellType: "numeric",
      sortable: true,
      sortableLabelAsc: "TimeHorizon ascending",
      sortableLabelDesc: "TimeHorizon descending",
    },
    {
      id: "id5",
      accessor: "event.schedule",
      cellType: "alpha-numeric",
      searchable: true,
    },
    {
      id: "id6",
      accessor: "event.description",
      cellType: "alpha-numeric",
      searchable: true,
    },
  ],
  viewConfiguration: {
    breakpoints: { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 },
    columnConfiguration: [
      { style: { width: 1, textAlign: "center" } },
      {
        title: "Description",
        style: { minWidth: "360px", textAlign: "start" },
      },
      {
        title: "Created by",
        style: { minWidth: "195px", paddingLeft: "30px", textAlign: "start" },
      },
    ],
  },
};

// Data

const compressorData = (id: number) => ({
  headerTitle: `Hitachi Virtual Storage Platform 5000 series ${id + 1}`,
  description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
  creator: `John Stedward`,
});

const machineData = (id: number) => ({
  headerTitle: `CSAF ${id + 1}`,
  description: `The most powerful Data platform in the world that will future proof your business and simplify day-to-dat management.`,
  creator: `John Stedward`,
});

const values = (num = 10) =>
  Array.from(Array(num).keys(), (id) => ({
    id: `id_${id}`,
    ...(id % 2 === 0 ? compressorData(id) : machineData(id)),
  }));

const ProjectList = () => {
  return (
    <HvAssetInventory
      id="hv-assetinventory"
      values={values()}
      configuration={configuration}
      onSelection={(event) => console.log("selected")}
      isSelectable
      actions={actions}
      actionsCallback={(e, id, action) =>
        console.log(`You have pressed action ${action.label}`)
      }
      searchProps={{ "aria-label": "Filters the data" }}
      multibuttonProps={[]}
      emptyComponent={
        <HvEmptyState
          message="No data found"
          icon={<Fail iconSize="S" color="acce1" />}
        />
      }
    >
      <HvCardView id="card" renderer={cardRenderer} />
    </HvAssetInventory>
  );
};

export default ProjectList;
