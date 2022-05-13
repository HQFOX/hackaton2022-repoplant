import {
  HvDialog,
  HvDialogTitle,
  HvDialogContent,
  HvDialogActions,
  HvButton,
} from "@hitachivantara/uikit-react-core";
import AddProjectForm from "forms";
import React, { useState } from "react";

interface AddProjectDialogProps {
  open: boolean;
  setValue: (value: any) => void;
}

const AddProjectDialog: React.FC<AddProjectDialogProps> = ({
  open,
  setValue,
}) => {
  return (
    <HvDialog
      disableBackdropClick
      id="test"
      open={open}
      onClose={() => setValue(false)}
      firstFocusable="test-close"
      fullscreen
    >
      <HvDialogTitle variant="warning">Fullscreen</HvDialogTitle>
      <HvDialogContent indentContent>
        <AddProjectForm />
      </HvDialogContent>
      <HvDialogActions>
        <HvButton category="ghost" onClick={() => setValue(false)}>
          Close
        </HvButton>
      </HvDialogActions>
    </HvDialog>
  );
};

export default AddProjectDialog;
