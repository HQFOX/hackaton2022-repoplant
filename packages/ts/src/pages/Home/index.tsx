import { withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import Home from "./Home";

export type HomeStyles = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Home" })(Home);
