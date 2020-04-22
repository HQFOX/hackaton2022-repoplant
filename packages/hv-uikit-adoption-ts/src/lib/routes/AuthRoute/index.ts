import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "typings/state";
import { checkAuth } from "store/auth/thunks";
import AuthRoute from "./AuthRoute";

const mapStateToProps = ({ auth }: AppState) => ({
  auth
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      checkAuth
    },
    dispatch
  );

export type AuthRouteProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
