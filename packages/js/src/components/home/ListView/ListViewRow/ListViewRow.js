import React from "react";
import PropTypes from "prop-types";
import {
  HvListViewCell,
  HvListViewRow,
  HvTypography
} from "@hv/uikit-react-core";

const ListViewRow = ({ classes, status, value, id }) => {
  const { Icon } = status;

  return (
    <HvListViewRow checkboxProps={{ value: value.id }}>
      <HvListViewCell semantic={status.sema} id={`${id}icon`} key={`${id}icon`}>
        <Icon semantic={status.sema} className={classes.icon} />
      </HvListViewCell>

      <HvListViewCell id={`${id}-description`} key={`${id}-description`}>
        <div className={classes.descriptionContainer}>
          <HvTypography variant="highlightText">
            {value.event.description}
          </HvTypography>
          <HvTypography className={classes.timestamp} variant="normalText">
            {value.event.timestamp}
          </HvTypography>
          <HvTypography className={classes.schedule} variant="normalText">
            {value.event.schedule}
          </HvTypography>
        </div>
      </HvListViewCell>

      <HvListViewCell id={`${id}-probability`} key={`${id}-probability`}>
        <HvTypography variant="normalText">{`${value.probability}`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell id={`${id}-timeHorizon`} key={`${id}-timeHorizon`}>
        <HvTypography variant="normalText">{`${value.timeHorizon}`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell id={`${id}-relatedAssets`} key={`${id}-relatedAssets`}>
        <HvTypography variant="normalText">{value.relatedAssets}</HvTypography>
      </HvListViewCell>
    </HvListViewRow>
  );
};

ListViewRow.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default ListViewRow;
