import React from "react";
import {
  HvTypography,
  HvListViewCell,
  HvListViewRow,
} from "@hitachivantara/uikit-react-core";
import useStyles from "./styles";

// ListRow renderer
const RowRenderer: React.FC<any> = (value: {
  title?: any;
  status?: any;
  checked?: any;
  id: any;
  project?: any;
  informationType?: any;
  uploadedBy?: any;
  created?: any;
}) => {
  const classes = useStyles();
  const { status, id } = value;
  const { Icon } = status;
  console.log(id);

  return (
    <HvListViewRow
      id={id}
      key={`row${id}`}
      checked={value.checked}
      checkboxProps={{
        value: value.id,
        inputProps: { "aria-label": `Select ${id}` },
      }}
    >
      <HvListViewCell semantic="sema0">
        {/* <Icon semantic={status.sema} className={classes.icon} /> */}
      </HvListViewCell>

      <HvListViewCell key={`row${id}-title`}>
        <HvTypography>{`${value.title}`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell key={`row${id}-project`}>
        <HvTypography>{`${value.project}`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell key={`row${id}-info`}>
        <HvTypography>{`${value.informationType}`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell key={`row${id}-uploade`}>
        <HvTypography>{value.uploadedBy}</HvTypography>
      </HvListViewCell>

      <HvListViewCell key={`row${id}-create`}>
        <HvTypography>{value.created}</HvTypography>
      </HvListViewCell>
    </HvListViewRow>
  );
};

export default RowRenderer;
