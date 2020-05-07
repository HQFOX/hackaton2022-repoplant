import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPages } from "store/pages/thunks";
import { logout } from "store/auth/thunks";
import styles from "./styles";
import Header from "./Header";

const mapStateToProps = ({ router, auth, pages }) => ({
  router,
  auth,
  pages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPages,
      logout
    },
    dispatch
  );

export default withStyles(styles, { name: "Header" })(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
