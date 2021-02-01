// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface PagesState {
  readonly data: Page[];
}

export interface Page {
  id: string;
  label: string;
  path: string;
  paths: string[];
  data?: Page[];
}
