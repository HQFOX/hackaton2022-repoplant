import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { getLineData } from "store/data/thunks";
import { withStyles } from "@material-ui/core";
import { AppState } from "typings/state";
import styles from "./styles";
import LineChart from "./LineChart";

const mapStateToProps = ({ data }: AppState) => ({
  data: data.line,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getLineData,
    },
    dispatch
  );

export default withStyles(styles, { name: "LineChart" })(
  connect(mapStateToProps, mapDispatchToProps)(LineChart)
);
