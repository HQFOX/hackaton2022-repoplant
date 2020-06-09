import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { getLineData } from "store/data/thunks";
import styles from "./styles";
import LineChart from "./LineChart";

const mapStateToProps = ({ data }) => ({
  data: data.line
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getLineData
    },
    dispatch
  );

export default withStyles(styles, { name: "LineChart" })(
  connect(mapStateToProps, mapDispatchToProps)(LineChart)
);
