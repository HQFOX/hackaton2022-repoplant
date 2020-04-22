import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import AssetInventory from "./AssetInventory";

export default withStyles(styles, { name: "AssetInventory", withTheme: true })(
  AssetInventory
);
