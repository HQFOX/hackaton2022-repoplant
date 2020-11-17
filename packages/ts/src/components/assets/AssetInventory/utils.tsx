import React from "react";
import {
  AssetInventoryMetadata,
  AssetInventoryConfiguration,
  HvSemanticColorKeys
} from "@hv/uikit-react-core";
import {
  Delete,
  Preview,
  Upload,
  Level1,
  Level2Average,
  Level3Bad,
  Level4,
  Level5
} from "@hv/uikit-react-icons";

const metadata: AssetInventoryMetadata[] = [
  {
    id: "id1",
    accessor: "headerTitle",
    cellType: "alpha-numeric",
    searchable: true,
    sortable: true,
    sortableLabelAsc: "Title ascending",
    sortableLabelDesc: "Title descending"
  },
  {
    id: "id2",
    accessor: "semantic",
    cellType: "alpha-numeric"
  },
  {
    id: "id3",
    accessor: "probability",
    cellType: "numeric",
    searchable: true,
    sortable: true,
    sortableLabelAsc: "Probability ascending",
    sortableLabelDesc: "Probability descending"
  },
  {
    id: "id4",
    accessor: "timeHorizon",
    cellType: "numeric",
    sortable: true,
    sortableLabelAsc: "TimeHorizon ascending",
    sortableLabelDesc: "TimeHorizon descending"
  },
  {
    id: "id5",
    accessor: "event.schedule",
    cellType: "alpha-numeric",
    searchable: true
  },
  {
    id: "id6",
    accessor: "event.description",
    cellType: "alpha-numeric",
    searchable: true
  }
];

const viewConfiguration: AssetInventoryConfiguration = {
  breakpoints: { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 },
  columnConfiguration: [
    { style: { width: 1, textAlign: "center" } },
    {
      title: "Event",
      style: { minWidth: "360px", textAlign: "start" }
    },
    {
      title: "Probability",
      style: { minWidth: "80px", textAlign: "end" }
    },
    {
      title: "Time horizon",
      style: { minWidth: "100px", textAlign: "end" }
    },
    {
      title: "Related Assets",
      style: {
        minWidth: "195px",
        paddingLeft: "30px",
        textAlign: "start"
      }
    }
  ]
};

const configuration = {
  metadata,
  viewConfiguration
};

const actions = [
  { id: "post", label: "Dismiss", disabled: false },
  {
    id: "get",
    label: "Preview",
    icon: <Preview color="atmo5" />,
    disabled: true
  },
  {
    id: "put",
    label: "Upload",
    icon: <Upload color="atmo5" />,
    disabled: true
  },
  { id: "delete", label: "Delete", icon: <Delete />, disabled: false }
];

type Status = {
  Icon: React.ComponentType<any> | null;
  sema: HvSemanticColorKeys;
};

const getStatus = (statusNumber: number): Status => {
  switch (statusNumber) {
    case 1:
      return { Icon: Level1, sema: "sema10" };
    case 2:
      return { Icon: Level2Average, sema: "sema11" };
    case 3:
      return { Icon: Level3Bad, sema: "sema12" };
    case 4:
      return { Icon: Level4, sema: "sema13" };
    case 5:
      return { Icon: Level5, sema: "sema14" };
    default:
      return { Icon: null, sema: "sema1" };
  }
};

export { configuration, actions, getStatus };
