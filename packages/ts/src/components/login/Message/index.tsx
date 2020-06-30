import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Message from "./Message";

interface Message {
  error?: string;
  success?: string;
}

interface BaseProps {
  message: Message;
  status: string;
}

export type MessageProps = BaseProps & WithStyles<typeof styles>;

export default withStyles(styles, { name: "Message" })(Message);
