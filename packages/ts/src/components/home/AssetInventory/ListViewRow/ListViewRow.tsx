import React from "react";
import {
  HvListViewCell,
  HvListViewRow,
  HvTypography
} from "@hv/uikit-react-core/dist";

const ListViewRow = ({ classes, status, value, id }) => {
  const { Icon } = status;

  return (
    // @ts-ignore
    <HvListViewRow checkboxProps={{ value: value.id }}>
      <HvListViewCell semantic={status.sema} id={`${id}icon`} key={`${id}icon`}>
        <Icon semantic={status.sema} className={classes.icon} />
      </HvListViewCell>

      <HvListViewCell id={`${id}-description`} key={`${id}-description`}>
        <div style={{ display: "inline-flex" }}>
          <HvTypography variant="highlightText">
            {value.event.description}
          </HvTypography>
          <HvTypography className={classes.timestamp} variant="sText">
            {value.event.timestamp}
          </HvTypography>
          <HvTypography style={{ paddingTop: "2px" }} variant="sText">
            {value.event.schedule}
          </HvTypography>
        </div>
      </HvListViewCell>

      <HvListViewCell id={`${id}-probability`} key={`${id}-probability`}>
        <HvTypography variant="normalText">{`${value.probability}%`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell id={`${id}-timeHorizon`} key={`${id}-timeHorizon`}>
        <HvTypography variant="normalText">{`${value.timeHorizon}h`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell id={`${id}-relatedAssets`} key={`${id}-relatedAssets`}>
        <HvTypography variant="normalText">{value.relatedAssets}</HvTypography>
      </HvListViewCell>
    </HvListViewRow>
  );
};

export default ListViewRow;
