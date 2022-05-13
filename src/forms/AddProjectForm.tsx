import {
  HvInput,
  HvTextArea,
  HvTypography,
} from "@hitachivantara/uikit-react-core";
import React from "react";

const AddProjectForm: React.FC = () => {
  return (
    <form>
      <HvTypography variant="mTitle">Project Overview</HvTypography>
      <HvInput label="Project Name" placeholder="Enter text" />
      <HvTextArea id="main" label="Label" placeholder="Enter value" rows={5} />
      <HvInput label="Code Repository" placeholder="Enter text" />
      <HvInput label="Technology" placeholder="Enter text" />
    </form>
  );
};

export default AddProjectForm;
