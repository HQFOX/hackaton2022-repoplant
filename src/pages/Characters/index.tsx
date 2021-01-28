import { withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import Characters from "./Characters";

export type CharactersStyles = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Characters" })(Characters);
