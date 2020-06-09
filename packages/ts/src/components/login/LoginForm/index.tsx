import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { AuthProps } from "typings/auth";
import styles from "./styles";
import LoginForm from "./LoginForm";

export type LoginFormProps = WithStyles<typeof styles> & AuthProps;

export default withStyles(styles, { name: "LoginForm" })(LoginForm);
