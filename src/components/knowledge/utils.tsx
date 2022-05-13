import {
  AssetInventoryMetadata,
  AssetInventoryConfiguration,
} from "@hitachivantara/uikit-react-core";

const metadata: AssetInventoryMetadata[] = [
  {
    id: "id1",
    accessor: "title",
    cellType: "alpha-numeric",
  },
  {
    id: "id2",
    accessor: "project",
    cellType: "alpha-numeric",
  },
];

const viewConfiguration: AssetInventoryConfiguration = {
  breakpoints: { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 },
  columnConfiguration: [
    {
      style: { paddingLeft: "10px", textAlign: "start" },
    },
    {
      title: "Title",
      style: { textAlign: "start", minWidth: "120px" },
    },
    {
      title: "Project",
      style: { textAlign: "start", minWidth: "80px" },
    },
    {
      title: "Information Type",
      style: { textAlign: "start", minWidth: "60px" },
    },
    {
      title: "Uploaded By",
      style: { textAlign: "start", minWidth: "60px" },
    },
    {
      title: "Date",
      style: {
        textAlign: "start",
      },
    },
  ],
};

const configuration = {
  metadata,
  viewConfiguration,
};

const actions = [{ id: "view", label: "View", disabled: false }];

export { configuration, actions };
