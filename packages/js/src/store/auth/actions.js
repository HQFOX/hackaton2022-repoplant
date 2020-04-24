const AuthActions = {
  SET_AUTH: "@@auth/SET_AUTH"
};

const setAuth = isAuthed => ({
  type: AuthActions.SET_AUTH,
  isAuthed
});

export { AuthActions, setAuth };
