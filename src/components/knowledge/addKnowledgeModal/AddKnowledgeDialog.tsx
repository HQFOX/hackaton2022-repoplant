import {
  HvDialog,
  HvDialogTitle,
  HvDialogContent,
  HvDialogActions,
  HvButton,
  HvContainer,
  HvPanel,
  HvTypography,
  HvInput,
  HvDropdown,
  HvTextArea,
} from "@hitachivantara/uikit-react-core";
import Fileuploader from "components/fileuploader";
import AddProjectForm from "forms";
import React, { useState } from "react";
import useStyles from "./styles";

interface AddKnowledgeDialogProps {
  isAddKnowledgeModalOpen: boolean;
  setAddKnowledgeModal: (value: any) => void;
}

const AddKnowledgeDialog: React.FC<AddKnowledgeDialogProps> = ({
  isAddKnowledgeModalOpen,
  setAddKnowledgeModal,
}) => {
  const classes = useStyles();
  return (
    <HvDialog
      disableBackdropClick
      id="test"
      open={isAddKnowledgeModalOpen}
      firstFocusable="test-close"
      fullScreen
    >
      <HvPanel className={classes.hvPanel}>
        <HvTypography
          variant="sectionTitle"
          style={{ display: "inline-block" }}
        >
          ADD KNOWLEDGE
        </HvTypography>
      </HvPanel>
      <HvContainer>
        <HvDialogContent indentContent>
          <form>
            <div>
              <div>
                <div
                  style={{
                    marginTop: "20px",
                    marginBottom: "45px",
                  }}
                >
                  <HvTypography variant="mTitle">
                    Knowledge Details
                  </HvTypography>
                </div>
                <div
                  style={{
                    gap: "50px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <HvInput label="Title" placeholder="Enter text" />
                  <HvDropdown
                    aria-label="Information type"
                    label="Information type"
                    multiSelect
                    showSearch
                    values={[
                      { label: "value 1" },
                      { label: "value 2", selected: true },
                      { label: "value 3" },
                      { label: "value 4" },
                    ]}
                  />
                  <HvDropdown
                    label="Select project"
                    multiSelect
                    showSearch
                    values={[
                      { label: "value 1" },
                      { label: "value 2", selected: true },
                      { label: "value 3" },
                      { label: "value 4" },
                    ]}
                  />
                  <HvTextArea
                    id="main"
                    label="Description"
                    placeholder="Enter text"
                    rows={5}
                  />
                  <HvDropdown
                    label="Connected Features(Optional)"
                    multiSelect
                    showSearch
                    values={[
                      { label: "value 1" },
                      { label: "value 2", selected: true },
                      { label: "value 3" },
                      { label: "value 4" },
                    ]}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <div>
                  <HvTypography variant="mTitle">Upload Files</HvTypography>
                </div>
                <div>
                  <Fileuploader
                    data={{
                      id: "",
                      title: "",
                      creator: "",
                      description: "",
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </HvDialogContent>
        <HvDialogActions style={{ justifyContent: "space-between" }}>
          <HvButton
            category="ghost"
            onClick={() => setAddKnowledgeModal(false)}
          >
            Cancle
          </HvButton>
          <HvButton onClick={() => setAddKnowledgeModal(false)}>Save</HvButton>
        </HvDialogActions>
      </HvContainer>
    </HvDialog>
  );
};

export default AddKnowledgeDialog;
