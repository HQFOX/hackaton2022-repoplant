import withStyles from "@material-ui/core/styles/withStyles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "store/auth/thunks";
import styles from "./styles";
import Login from "./Login";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default withStyles(styles, { name: "Login", withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
