import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import LoginForm from "./LoginForm";

export default withStyles(styles, { name: "LoginForm", withTheme: true })(
  LoginForm
);
