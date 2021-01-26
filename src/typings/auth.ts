// Use enums for better autocompletion of action type names.
//
// We use the `@@context/ACTION_TYPE` convention,
// to follow the convention of Redux's `@@INIT` action.
export enum AuthActions {
  SET_ACTIVE_FORM = "@@auth/SET_ACTIVE_FORM",
  SET_IS_AUTHED = "@@auth/SET_IS_AUTHED",
  SET_AUTH_STATUS = "@@auth/SET_AUTH_STATUS",
  SET_RECOVER_STATUS = "@@auth/SET_RECOVER_STATUS",
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface AuthState {
  readonly activeForm: string;
  readonly isAuthed: boolean | undefined;
  readonly authStatus: string;
  readonly recoverStatus: string;
}

export interface AuthProps {
  login(credentials: AuthCredentials): void;
}

export interface AuthCredentials {
  username: string;
  password: string;
}
