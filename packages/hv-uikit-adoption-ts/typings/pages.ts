// Use enums for better autocompletion of action type names.
//
// We use the `@@context/ACTION_TYPE` convention,
// to follow the convention of Redux's `@@INIT` action.
export enum PagesActions {
  GET_PAGES = "@@layout/GET_PAGES",
  SET_PAGES = "@@layout/SET_PAGES"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface PagesState {
  readonly data: Page[];
}

export interface Page {
  id: string;
  label: string;
  path: string;
  data?: Page[];
}
