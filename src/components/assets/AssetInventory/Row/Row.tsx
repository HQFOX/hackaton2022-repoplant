import React from "react";
import {
  HvListViewCell,
  HvListViewRow,
  HvTypography
} from "@hv/uikit-react-core";
import { getStatus } from "../utils";
import useStyles from "./styles";

const Row = ({ data }) => {
  const { Icon, sema } = getStatus(data.status);
  const { id } = data;
  const classes = useStyles();

  return (
    <HvListViewRow
      id={id}
      key={`row${id}`}
      checked={data.checked}
      checkboxProps={{
        inputProps: { "aria-label": `Select ${id}` }
      }}>
      <HvListViewCell semantic={sema}>
        <Icon semantic={sema} className={classes.icon} />
      </HvListViewCell>

      <HvListViewCell>
        <div style={{ display: "inline-flex" }}>
          <HvTypography variant="highlightText">
            {data.event.description}
          </HvTypography>
          <HvTypography className={classes.timestamp2}>
            {data.event.timestamp}
          </HvTypography>
          <div className={classes.columnSplitter} />
          <HvTypography>{data.event.schedule}</HvTypography>
        </div>
      </HvListViewCell>

      <HvListViewCell>
        <HvTypography>{`${data.probability}%`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell>
        <HvTypography>{`${data.timeHorizon}h`}</HvTypography>
      </HvListViewCell>

      <HvListViewCell>
        <HvTypography>{data.relatedAssets}</HvTypography>
      </HvListViewCell>
    </HvListViewRow>
  );
};

export default data => <Row data={data} />;
