import { action } from "typesafe-actions";
import { PagesActions, PagesState } from "typings/pages";

// Use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
//
const setPages = (pages: PagesState) => action(PagesActions.SET_PAGES, pages);

export { setPages };
