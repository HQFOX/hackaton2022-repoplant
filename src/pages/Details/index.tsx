import { withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import Details from "./Details";

export type DetailsProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Details" })(Details);
