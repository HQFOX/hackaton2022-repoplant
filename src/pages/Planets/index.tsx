import { withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import Planets from "./Planets";

export type PlanetsProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Planets" })(Planets);
