import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { getTableData } from "store/data/thunks";
import styles from "./styles";
import Table from "./Table";

const mapStateToProps = ({ data }) => ({
  data: data.table
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTableData
    },
    dispatch
  );

export default withStyles(styles, { name: "Table" })(
  connect(mapStateToProps, mapDispatchToProps)(Table)
);
