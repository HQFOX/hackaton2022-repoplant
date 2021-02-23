export interface PagesState {
  readonly data: Page[];
}
export interface Page {
  id: string;
  label: string;
  path: string;
  data?: Page[];
}
