import { withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import CharacterDetails from "./CharacterDetails";

export type CharacterDetailsProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "CharacterDetails" })(
  CharacterDetails
);
