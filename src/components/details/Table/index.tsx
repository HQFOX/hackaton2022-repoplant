import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { AppState } from "typings/state";
import { getTableData } from "store/data/thunks";
import styles from "./styles";
import Table from "./Table";

const mapStateToProps = ({ data }: AppState) => ({
  data: data.table
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTableData
    },
    dispatch
  );

export default withStyles(styles, { name: "Table" })(
  connect(mapStateToProps, mapDispatchToProps)(Table)
);
