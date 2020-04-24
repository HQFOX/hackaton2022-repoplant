// Use enums for better autocompletion of action type names.
//
// We use the `@@context/ACTION_TYPE` convention,
// to follow the convention of Redux's `@@INIT` action.
export enum AuthActions {
  SET_AUTH = "@@auth/SET_AUTH"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface AuthState {
  readonly isAuthed: boolean | null;
}

export interface AuthProps {
  login(credentials: AuthCredentials): void;
}

export interface AuthCredentials {
  username: string;
  password: string;
}
