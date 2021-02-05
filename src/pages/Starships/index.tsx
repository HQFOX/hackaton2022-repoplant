import { withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import Starships from "./Starships";

export type StarshipsProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Starships" })(Starships);
