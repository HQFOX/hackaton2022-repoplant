import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { getBarData } from "store/data/thunks";
import styles from "./styles";
import BarChart from "./BarChart";

const mapStateToProps = ({ data }) => ({
  data: data.bar
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBarData
    },
    dispatch
  );

export default withStyles(styles, { name: "BarChart" })(
  connect(mapStateToProps, mapDispatchToProps)(BarChart)
);
