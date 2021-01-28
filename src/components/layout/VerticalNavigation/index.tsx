import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "store/auth/thunks";
import styles from "./styles";
import VerticalNavigation from "./VerticalNavigation";

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout,
    },
    dispatch
  );

export default withStyles(styles, { name: "VerticalNavigation" })(
  connect(mapStateToProps, mapDispatchToProps)(VerticalNavigation)
);
