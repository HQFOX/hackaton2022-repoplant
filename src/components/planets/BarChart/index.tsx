import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { AppState } from "typings/state";
import { getBarData } from "store/data/thunks";
import styles from "./styles";
import BarChart from "./BarChart";

const mapStateToProps = ({ data }: AppState) => ({
  data: data.bar,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getBarData,
    },
    dispatch
  );

export default withStyles(styles, { name: "BarChart" })(
  connect(mapStateToProps, mapDispatchToProps)(BarChart)
);
