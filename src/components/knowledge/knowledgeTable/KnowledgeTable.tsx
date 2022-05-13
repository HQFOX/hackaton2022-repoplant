import React from "react";
import {
  HvContainer,
  HvAssetInventory,
  HvEmptyState,
  HvListView,
} from "@hitachivantara/uikit-react-core";
import {
  Preview,
  Upload,
  Delete,
  Cards,
  Fail,
} from "@hitachivantara/uikit-react-icons";
import { List } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { configuration } from "../utils";
import RowRenderer from "./rowRenderer/RowRenderer";

const Knowledge: React.FC = () => {
  const history = useHistory();
  // Actions
  const myActions = [
    { id: "post", label: "View", disabled: false },
    { id: "delete", label: "Delete", icon: <Delete />, disabled: false },
  ];

  // Data

  const knowledgeData = (id: number) => ({
    title: `project ${id + 1}`,
    status: 5,
    project: "name",
    informationType: "new",
    uploadedBy: "test",
    date: "date",
  });

  const values = () => {
    const Data = [
      {
        title: "HKS Auth",
        project: "ORBIT",
        informationType: "Code",
        uploadedBy: "HKS team",
        created: "11 Apr 2022, 10:30 PM",
        status: 5,
      },
      {
        title: "Phase 3 Usability findings",
        project: "AIOPS",
        informationType: "Design",
        uploadedBy: "AIOPS Team",
        created: "11 Apr 2022, 10:30 PM",
        status: 5,
      },
      {
        title: "HKS",
        project: "ORBIT",
        informationType: "Testing",
        uploadedBy: "QA",
        created: "11 Apr 2022, 10:30 PM",
        status: 5,
      },
      {
        title: "Phase 2 Usability findings",
        project: "AIOPS",
        informationType: "Design",
        uploadedBy: "AIOPs Team",
        created: "11 Apr 2022, 10:30 PM",
        status: 5,
      },
    ];

    return Data.map((data, index) => ({
      id: `id_${index + 1}`,
      checkboxProps: { value: `id_${index + 1}` },
      ...data,
    }));
  };

  return (
    <HvContainer style={{ padding: "0px" }}>
      <HvAssetInventory
        id="hv-assetinventory"
        values={values()}
        configuration={configuration}
        onSelection={(event) => console.log(event.target)}
        isSelectable={false}
        actions={myActions}
        actionsCallback={(e, id, action) => {
          console.log(`You have pressed action ${action.label}`);
          history.push(`/knowledge/1`);
        }}
        searchProps={{ "aria-label": "Filters the data" }}
        emptyComponent={
          <HvEmptyState
            message="No data found"
            icon={<Fail iconSize="S" color="acce1" />}
          />
        }
      >
        <HvListView id="list" renderer={RowRenderer} />
      </HvAssetInventory>
    </HvContainer>
  );
};

export default Knowledge;
