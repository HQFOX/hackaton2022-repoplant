import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "typings/state";
import { login } from "store/auth/thunks";
import styles from "./styles";
import Login from "./Login";

const mapStateToProps = ({ auth }: AppState) => ({
  auth
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export type LoginProps = WithStyles<typeof styles> &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default withStyles(styles, { name: "Login" })(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
