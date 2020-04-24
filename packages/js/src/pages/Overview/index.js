import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Overview from "./Overview";

export default withStyles(styles, { name: "Overview", withTheme: true })(
  Overview
);
