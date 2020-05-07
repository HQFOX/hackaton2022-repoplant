import {
  AssetInventoryMetadata,
  AssetInventoryConfiguration
} from "@hv/uikit-react-core/dist";

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
    id: "id4",
    accessor: "event.schedule",
    cellType: "alpha-numeric",
    searchable: true
  }
];

const viewConfiguration: AssetInventoryConfiguration = {
  breakpoints: { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 },
  columnConfiguration: [
    {
      title: "Status",
      style: { paddingLeft: "8px", minWidth: "52px" },
      align: "left"
    },
    { title: "Event", style: { minWidth: "400px" }, align: "left" },
    { title: "Probability", style: { minWidth: "93px" }, align: "right" },
    { title: "Time horizon", style: { minWidth: "108px" }, align: "right" },
    {
      title: "Related Assets",
      style: { minWidth: "195px", paddingLeft: "30px" },
      align: "left"
    }
  ]
};

const configuration = {
  metadata,
  viewConfiguration
};

export default configuration;
