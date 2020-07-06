const AuthActions = {
  SET_ACTIVE_FORM: "@@auth/SET_ACTIVE_FORM",
  SET_IS_AUTHED: "@@auth/SET_IS_AUTHED",
  SET_AUTH_STATUS: "@@auth/SET_AUTH_STATUS",
  SET_RECOVER_STATUS: "@@auth/SET_RECOVER_STATUS"
};

const setActiveForm = activeForm => ({
  type: AuthActions.SET_ACTIVE_FORM,
  activeForm
});

const setIsAuthed = isAuthed => ({
  type: AuthActions.SET_IS_AUTHED,
  isAuthed
});

const setAuthStatus = authStatus => ({
  type: AuthActions.SET_AUTH_STATUS,
  authStatus
});

const setRecoverStatus = recoverStatus => ({
  type: AuthActions.SET_RECOVER_STATUS,
  recoverStatus
});

export {
  AuthActions,
  setActiveForm,
  setIsAuthed,
  setAuthStatus,
  setRecoverStatus
};
