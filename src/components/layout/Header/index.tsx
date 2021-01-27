import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "typings/state";
import { redirect } from "store/pages/thunks";
import { logout } from "store/auth/thunks";
import styles from "./styles";
import Header from "./Header";

const mapStateToProps = ({ router, auth }: AppState) => ({
  router,
  auth,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      redirect,
      logout,
    },
    dispatch
  );

export type HeaderProps = WithStyles<typeof styles> &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default withStyles(styles, { name: "Header" })(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
