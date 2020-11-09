import { withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import Assets from "./Assets";

export type AssetsStyles = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Assets" })(Assets);
