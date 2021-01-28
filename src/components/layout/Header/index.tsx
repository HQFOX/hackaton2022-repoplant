import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "typings/state";
import { logout } from "store/auth/thunks";
import styles from "./styles";
import Header from "./Header";

const mapStateToProps = ({ auth }: AppState) => ({
  auth,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
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
