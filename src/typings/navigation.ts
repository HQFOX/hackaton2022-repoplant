import { Page } from "typings/pages";

export interface NavigationContextType {
  isOpen: boolean;
  toggleOpen: () => void;
  activePage: Page | undefined;
}
