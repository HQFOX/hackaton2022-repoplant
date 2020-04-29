import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "typings/state";
import { getPages } from "store/pages/thunks";
import { logout } from "store/auth/thunks";
import styles from "./styles";
import Header from "./Header";

const mapStateToProps = ({ router, auth, pages }: AppState) => ({
  router,
  auth,
  pages
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getPages,
      logout
    },
    dispatch
  );

export type HeaderProps = WithStyles<typeof styles> &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default withStyles(styles, { name: "Header", withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
