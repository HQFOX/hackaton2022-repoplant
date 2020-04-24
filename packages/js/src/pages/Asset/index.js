import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Asset from "./Asset";

export default withStyles(styles, { name: "Asset", withTheme: true })(
  Asset
);
