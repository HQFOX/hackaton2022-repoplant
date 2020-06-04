import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPages, redirect } from "store/pages/thunks";
import { logout } from "store/auth/thunks";
import styles from "./styles";
import VerticalNavigation from "./VerticalNavigation";

const mapStateToProps = ({ router, auth, pages }) => ({
  router,
  auth,
  pages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPages,
      redirect,
      logout
    },
    dispatch
  );

export default withStyles(styles, { name: "VerticalNavigation" })(
  connect(mapStateToProps, mapDispatchToProps)(VerticalNavigation)
);
