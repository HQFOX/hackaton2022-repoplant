import {
  HvDialog,
  HvDialogTitle,
  HvDialogContent,
  HvDialogActions,
  HvButton,
  HvContainer,
  HvPanel,
  HvTypography,
} from "@hitachivantara/uikit-react-core";
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
        <HvDialogContent indentContent>A fullscreen dialog.</HvDialogContent>
        <HvDialogActions style={{ alignSelf: "flex-end" }}>
          <HvButton
            category="ghost"
            onClick={() => setAddKnowledgeModal(false)}
          >
            Close
          </HvButton>
        </HvDialogActions>
      </HvContainer>
    </HvDialog>
  );
};

export default AddKnowledgeDialog;
