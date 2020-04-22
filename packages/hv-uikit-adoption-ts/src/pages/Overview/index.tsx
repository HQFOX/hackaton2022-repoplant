import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Overview from "./Overview";

export type OverviewProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Overview", withTheme: true })(
  Overview
);
