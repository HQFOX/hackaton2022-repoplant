import React from "react";
import { HvListView } from "@hv/uikit-react-core/dist";
import ListViewRow from "./ListViewRow";
import { getStatus } from "../utils";

const rowRenderer = (value, index) => (
  <ListViewRow
    status={getStatus(value.status)}
    value={value}
    id={value.id + index}
    key={value.id + index}
  />
);

const ListView = props => <HvListView renderer={rowRenderer} {...props} />;

ListView.propTypes = {};

export default ListView;
